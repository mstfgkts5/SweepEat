python3 - <<'P'
import re
s=open('POSTERDIR/poster.tpl.html').read()
path=re.search(r'd="([^"]+)"',open('/home/claude/sweepeat/brand/kaydirak_mark_white.svg').read()).group(1)
open('POSTERDIR/poster.html','w').write(s.replace('LOGOPATH',path).replace('/*FONTS*/',open('POSTERDIR/fonts.css').read()))
P
node POSTERDIR/render.cjs
