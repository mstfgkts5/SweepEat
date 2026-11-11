# Kaydırak: eksik yemek fotoğrafları için Wikimedia Commons'tan aday indirir.
# Çalıştırma (proje klasöründe):  powershell -ExecutionPolicy Bypass -File .\tools\foto-adaylari.ps1
# Sonuç: photo-candidates\<yemek>\1.jpg, 2.jpg ... ve meta.csv (dosya, lisans, yazar).
# Uygulamaya hiçbir şey eklemez; doğru fotoğrafı sonra seçip public\images'a koyuyoruz.

$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$root = Split-Path -Parent $PSScriptRoot
$out = Join-Path $root "photo-candidates"
New-Item -ItemType Directory -Force -Path $out | Out-Null
$ua = "KaydirakApp/1.0 (photo candidates; contact: project owner)"
$perDish = 6

$dishes = @(
  @{ slug = "tavuklu-sezar-salata"; q = @("chicken caesar salad", "caesar salad") },
  @{ slug = "sahanda-yumurta"; q = @("sahanda yumurta", "fried eggs pan") },
  @{ slug = "tavuk-sote"; q = @("tavuk sote", "chicken sauté peppers") },
  @{ slug = "et-sote"; q = @("et sote", "beef sauté peppers") },
  @{ slug = "izgara-bonfile"; q = @("beef tenderloin steak", "bonfile") },
  @{ slug = "tavuk-pirzola"; q = @("tavuk pirzola", "grilled chicken thighs") },
  @{ slug = "yulaf-lapasi"; q = @("oatmeal with fruit", "porridge banana") },
  @{ slug = "izgara-sebze"; q = @("grilled vegetables plate", "grilled vegetables") },
  @{ slug = "pizza"; q = @("pizza sucuk", "pizza") },
  @{ slug = "kiymali-pide"; q = @("kıymalı pide", "pide minced meat") },
  @{ slug = "citir-tavuk"; q = @("fried chicken", "crispy fried chicken") },
  @{ slug = "patates-kizartmasi"; q = @("french fries", "patates kızartması") },
  @{ slug = "trilece"; q = @("trileçe", "tres leches cake") },
  @{ slug = "tiramisu"; q = @("tiramisu") },
  @{ slug = "magnolia"; q = @("magnolia pudding", "banana pudding cup") },
  @{ slug = "pogaca"; q = @("poğaça", "pogaca") },
  @{ slug = "pilav-ustu-doner"; q = @("pilav üstü döner", "döner rice") },
  @{ slug = "balik-ekmek"; q = @("balık ekmek", "fish sandwich Istanbul") },
  @{ slug = "karides-guvec"; q = @("karides güveç", "shrimp casserole") },
  @{ slug = "kalamar-tava"; q = @("kalamar tava", "fried calamari") },
  @{ slug = "kuzu-pirzola"; q = @("kuzu pirzola", "lamb chops") },
  @{ slug = "cokertme-kebabi"; q = @("çökertme kebabı", "çökertme") },
  @{ slug = "katmer"; q = @("katmer Gaziantep", "katmer") },
  @{ slug = "cig-kofte-durumu"; q = @("çiğ köfte dürüm", "çiğ köfte wrap") },
  @{ slug = "bulgur-pilavi"; q = @("bulgur pilavı", "bulgur pilaf") },
  @{ slug = "nohutlu-pilav"; q = @("nohutlu pilav", "rice with chickpeas") },
  @{ slug = "acili-ezme"; q = @("acılı ezme", "ezme salad") },
  @{ slug = "babagannus"; q = @("baba ghanoush", "babagannuş") },
  @{ slug = "patatesli-gozleme"; q = @("patatesli gözleme", "gözleme") },
  @{ slug = "nohut-durum"; q = @("nohut dürüm", "chickpea wrap") },
  @{ slug = "sebzeli-makarna"; q = @("pasta with vegetables", "vegetable pasta") },
  @{ slug = "sebze-corbasi"; q = @("sebze çorbası", "vegetable soup") },
  @{ slug = "vegan-burger"; q = @("veggie burger", "vegan burger") },
  @{ slug = "tahin-helvasi"; q = @("tahin helvası", "halva") },
  @{ slug = "meyve-tabagi"; q = @("fruit platter", "fruit plate") },
  @{ slug = "serpme-kahvalti"; q = @("serpme kahvaltı", "Turkish breakfast") },
  @{ slug = "izgara-somon"; q = @("grilled salmon", "salmon steak") },
  @{ slug = "hamburger"; q = @("hamburger", "cheeseburger") }
)

$metaPath = Join-Path $out "meta.csv"
$meta = New-Object System.Collections.Generic.List[object]
if (Test-Path $metaPath) { Import-Csv $metaPath | ForEach-Object { $meta.Add($_) } }

# Wikimedia limits fast requests; wait and retry once when a call fails.
function Get-WithRetry([scriptblock]$call) {
  try { return & $call } catch { Start-Sleep -Seconds 8; return & $call }
}
$i = 0
foreach ($d in $dishes) {
  $i++
  $dir = Join-Path $out $d.slug
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  if (Get-ChildItem -Path $dir -Filter *.jpg -ErrorAction SilentlyContinue) {
    Write-Host ("[{0}/{1}] {2}: zaten var, atlandı" -f $i, $dishes.Count, $d.slug)
    continue
  }
  Write-Host ("[{0}/{1}] {2}" -f $i, $dishes.Count, $d.slug)
  $seen = @{}
  $n = 0
  foreach ($q in $d.q) {
    if ($n -ge $perDish) { break }
    $search = [uri]::EscapeDataString("$q filetype:bitmap")
    $url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=10&gsrsearch=$search&prop=imageinfo&iiprop=url|size|mime|extmetadata&iiextmetadatafilter=LicenseShortName|Artist&iiurlwidth=800"
    Start-Sleep -Milliseconds 1500
    try { $r = Get-WithRetry { Invoke-RestMethod -Uri $url -UserAgent $ua -TimeoutSec 30 -UseBasicParsing } } catch { Write-Host "  arama hatası: $q"; continue }
    if (-not $r.query) { continue }
    $pages = $r.query.pages.PSObject.Properties | ForEach-Object { $_.Value } | Sort-Object { $_.index }
    foreach ($p in $pages) {
      if ($n -ge $perDish) { break }
      $info = $p.imageinfo[0]
      if (-not $info -or $seen.ContainsKey($p.title)) { continue }
      if ($info.mime -ne "image/jpeg" -and $info.mime -ne "image/png") { continue }
      if ($info.width -lt 600) { continue }
      $seen[$p.title] = $true
      $n++
      $file = Join-Path $dir ("{0}.jpg" -f $n)
      try {
        Get-WithRetry { Invoke-WebRequest -Uri $info.thumburl -UserAgent $ua -OutFile $file -TimeoutSec 60 -UseBasicParsing } | Out-Null
      } catch { Write-Host "  indirme hatası: $($p.title)"; $n--; continue }
      $artist = ($info.extmetadata.Artist.value -replace '<[^>]+>', '').Trim()
      $meta.Add([pscustomobject]@{
        slug = $d.slug; n = $n; title = $p.title; page = $info.descriptionurl
        license = $info.extmetadata.LicenseShortName.value; artist = $artist
      })
      Start-Sleep -Milliseconds 1200
    }
  }
  Write-Host ("  {0} aday" -f $n)
}
$meta | Export-Csv -Path $metaPath -NoTypeInformation -Encoding UTF8
Write-Host ""
Write-Host "Bitti. Adaylar: $out"
