const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 });
  const css = fs.readFileSync('POSTERDIR/fonts.css','utf8');
  await p.route('**/fonts.googleapis.com/**', r => r.fulfill({ status: 200, contentType: 'text/css', body: css }));
  const d = 'POSTERDIR';
  for (let i=0;i<20;i++){ try { await p.goto('http://localhost:4173/'); break; } catch { await p.waitForTimeout(500); } }
  await p.waitForTimeout(2600);
  await p.click('.location-badge'); await p.waitForTimeout(500);
  await p.click('.city-list-item:has-text("Gaziantep")'); await p.waitForTimeout(600);
  await p.click('.nav-item:nth-child(3)'); await p.waitForTimeout(500);
  await p.locator('text=Sıfır Atık').first().click(); await p.waitForTimeout(600);
  const intro = await p.$('.mode-intro'); if (intro) { await intro.click(); await p.waitForTimeout(600); }
  await p.click('.nav-item:nth-child(1)'); await p.waitForTimeout(600);
  const want = /^(BEYRAN ÇORBASI|FISTIKLI KATMER|FISTIKLI BAKLAVA|FISTIKLI SARMA)$/;
  const run = async (tag) => { for (let i=0;i<80;i++) {
    const n = await p.$$eval('.card-body .card-title', es=>es.length?es[es.length-1].innerText:null).catch(()=>null);
    if (!n) break;
    if (n === 'BEYRAN ÇORBASI') { await p.waitForTimeout(300); await p.screenshot({ path: d+'/s1.png' }); return; }
    if (want.test(n)) await p.click('.control-btn.like'); else await p.click('.control-btn.dislike');
    await p.waitForTimeout(1000);
  } };
  await run();
  await p.click(".control-btn.like"); await p.waitForTimeout(1000);
  await p.click('.course-chip.dessert'); await p.waitForTimeout(500);
  for (let i=0;i<40;i++) {
    const n = await p.$$eval('.card-body .card-title', es=>es.length?es[es.length-1].innerText:null).catch(()=>null);
    if (!n) break;
    if (want.test(n)) await p.click('.control-btn.like'); else await p.click('.control-btn.dislike');
    await p.waitForTimeout(1000);
  }
  await p.click('.nav-item:nth-child(2)'); await p.waitForTimeout(500);
  console.log(await p.$$eval('.liked-card-name', es=>es.map(e=>e.innerText)));
  await p.click('.course-chip.dessert'); await p.waitForTimeout(300);
  console.log(await p.$$eval('.liked-card-name', es=>es.map(e=>e.innerText)));
  await p.screenshot({ path: d+'/liked.png' });
  await p.click('.promo-btn'); await p.waitForTimeout(700);
  for (let r=0;r<4;r++) {
    const ns = await p.$$eval('.duel-card-name', es=>es.map(e=>e.innerText)).catch(()=>[]);
    console.log('duel', ns); if (ns.length<2) break;
    await p.screenshot({ path: `${d}/duel${r}.png` });
    // keep Katmer and Beyran alive
    const keep = ns.some(n=>/Baklava/.test(n)) ? ns.findIndex(n=>/Baklava/.test(n)) : ns.findIndex(n=>/Katmer/.test(n)); 
    await (await p.$$('.duel-card'))[keep>=0?keep:0].click(); await p.waitForTimeout(1300);
  }
  await p.waitForTimeout(1500);
  await p.screenshot({ path: d+'/win.png' });
  // scroll winner screen to show rescue box
  await p.evaluate(()=>{const w=document.querySelector('.winner-screen'); if(w) w.scrollTop=0;});
  const tabs = await p.$$('.winner-tab-btn'); if (tabs[1]) { await tabs[1].click(); await p.waitForTimeout(2500); }
  await p.screenshot({ path: d+'/rest.png' });
  console.log(await p.$$eval('.restaurant-name-text', es=>es.map(e=>e.innerText)));
  await p.waitForTimeout(500);
  await b.close();
})();
