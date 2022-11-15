const Puppeteer = require("puppeteer")
const bot = async()=>{
    const browser = await Puppeteer.launch({
        args:['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('https://google.com/',{
        waitUntil:'networkidle2'
    });
    console.log( await page.content())
    return 'Done';
}

module.exports = bot;