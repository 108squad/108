var express = require("express");
var path = require("path");
 
var app = express();
app.use(express.static(path.join(__dirname,"/html")));
app.use('/boot', express.static(path.join(__dirname,"/boot")));
app.use('/style', express.static(path.join(__dirname,"/style")));
app.use('/img', express.static(path.join(__dirname,"/img")));

app.listen(7777,function(){
    console.log("Started listening on port", 7777);
})
