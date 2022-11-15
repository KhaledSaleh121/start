const express = require('express');
const bot = require('./bot');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.get('/',async (req,res)=>{
    const response = await bot();
    res.send('Done');
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log('listing on port ${PORT} ..');
})

var locateChrome = require('locate-chrome');
locateChrome(function(l) {
    console.log(l);
  });