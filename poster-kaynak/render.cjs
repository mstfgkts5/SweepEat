const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1890, height: 2646 } });
  await p.goto('file://POSTERDIR/poster.html'); await p.waitForTimeout(1200);
  const h = await p.evaluate(() => document.querySelector('.poster').scrollHeight);
  const main = await p.evaluate(() => { const m=document.querySelector('main'); return [m.scrollHeight, m.clientHeight]; });
  console.log('poster', h, await p.evaluate(()=>[...document.querySelectorAll('header,main>*,footer')].map(e=>e.tagName+':'+Math.round(e.getBoundingClientRect().height)).join(' ')));
  await p.screenshot({ path: 'preview.png' });
  await p.pdf({ path: 'Kaydirak_HASAT13_Poster.pdf', width: '500mm', height: '700mm', printBackground: true, pageRanges: '1' });
  await b.close();
})();
