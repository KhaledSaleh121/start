const Puppeteer = require("puppeteer")
const bot = async()=>{
    const browser = await Puppeteer.launch({
        executablePath: __dirname+"/chrome/win64-1056772/chrome-win/chrome.exe",
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