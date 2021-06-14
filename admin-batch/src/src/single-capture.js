const puppeteer = require('puppeteer');

(async() => {
  console.log('Starting headless Chrome');
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();

  console.log('Goto destination...');
  await page.goto('https://google.co.jp/');

  await page.setViewport( {
    width: 1200,
    height: 800
  } );

  console.log('Capturing page');
  await page.screenshot({path: `puppeteer_${(new Date()).getTime()}.png`});

  browser.close();
})();
