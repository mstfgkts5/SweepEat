// ==========================================
// Kaydırak shows no prices (20 Nov 2026): a dish's price differs by restaurant and
// changes every few months, so a number on screen was more often wrong than right.
// Older insight texts were written around a price ("130 ₺ fiyatıyla ...", "Only ₺95.00! ...");
// this removes the amount and keeps the rest of the sentence. Tested in tests/no-price.test.ts.
// ==========================================

const AMOUNT = String.raw`(?:₺\s?\d[\d.,]*|\d[\d.,]*\s?(?:₺|TL))`;

const RULES: [RegExp, string][] = [
  // English first: "Only ₺95.00!", "At only ₺80.00,", "for ₺155.00,", "priced at only ₺110.00", "under ₺200"
  [new RegExp(`\\b(?:[Oo]nly|[Ss]adece) ${AMOUNT}[!.,]?\\s*`, "g"), ""],
  [new RegExp(`\\b(?:[Aa]t|[Ff]or|[Uu]nder|[Aa]round|[Pp]riced at|[Cc]osting|[Oo]f)\\s+(?:only\\s+|under\\s+)?${AMOUNT},?\\s*`, "g"), ""],
  [new RegExp(`${AMOUNT}\\s+for\\s+`, "g"), ""],
  // Turkish: "130 ₺ fiyatıyla", "155.00 ₺ fiyatına göre", "95 ₺ ile", "40 ₺ tanesi ama"
  [new RegExp(`${AMOUNT}\\s*(?:fiyat(?:ıyla|ına göre|ına|ı ile)|ile|karşılığında|tanesi(?: ama)?)\\s*`, "g"), ""],
  [new RegExp(`${AMOUNT}(?:'(?:ye|ya|e|a|den|dan|lik|lık))?\\s*(?:altında(?:ki)?|civarında)?\\s*`, "g"), ""],
  [new RegExp(AMOUNT, "g"), ""]
];

// Sentences that read wrong once the amount is gone.
const AFTER: [RegExp, string][] = [
  [/^Tanesi\s+ama\s+/i, ""],
  [/^Balık için normaldir,/i, "Balık için makul bir seçim,"],
  [/^Mersin tantuni klasiği için son derece doyurucu ve lezzetli bir fiyat\.$/, "Mersin tantunisinin son derece doyurucu ve lezzetli hali."],
  [/^(?:At|For|Under)\s+(?=[a-z])/, ""],
  [/\s+(?:costing|priced at|for)\s*$/, ""]
];

export const stripPrices = (text: string): string => {
  if (!/₺|\d\s?TL\b/.test(text)) return text;
  let out = text;
  for (const [re, by] of RULES) out = out.replace(re, by);
  out = out.replace(/\s{2,}/g, " ").trim();
  for (const [re, by] of AFTER) out = out.replace(re, by);
  out = out
    .replace(/\s+([,.!?])/g, "$1")
    .replace(/^[\s,.!;:-]+/, "")
    .replace(/,\s*,/g, ",")
    .replace(/\s{2,}/g, " ")
    .trim();
  if (!/[.!?]$/.test(out)) out += ".";
  return out.charAt(0).toLocaleUpperCase("tr-TR") + out.slice(1);
};
