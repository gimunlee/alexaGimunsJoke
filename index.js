// var express = require('express');
// var app = express();

// app.get("/", function(req, res) {
//     res.send("hello");
//     console.log("request approved");
// });
// app.listen(process.env.PORT || "3003",function() {
//     console.log("listening");
// });

console.log("first of indx.js");
var Alexa = require('alexa-sdk');


var handlers = {
    "Hello": function() {
        this.emit(':tell', "Hello world");
    },
    "AMAZON.HelpIntent": function() {
        this.emit(':tell', "May I help you?");
    }
};
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
}