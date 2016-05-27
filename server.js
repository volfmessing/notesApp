/**
 * Created by vkhodak on 27.05.2016.
 */
//
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/app'));


app.get('/', function (req, res) {
    res.send('notesApp server part is alive!!!');
});

//run server
app.listen(3000);
console.log('express server running  on port 3000');
