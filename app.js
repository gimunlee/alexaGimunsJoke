var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.send("hello");
    console.log("request approved");
});
app.listen("80",function() {
    console.log("listening");
});