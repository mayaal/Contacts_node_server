var app = require('express')();
var http = require('http');
var server = http.createServer(app);
var contacts = require('./mock_contacts');
var db = require('./db');
server.on('listening', onListening);

server.listen(8080);
db.init();

app.get('/', function (req, res)
{
    res.send('Hello from Node.JS!')
});

app.get('/getContacts', function (req, res)
{
    console.log('getContacts Called');
    db.getContacts(function (err, results)
    {
        console.log(err);
        console.log(results);
        res.send(results);
    });
});

app.get('/createDemoContacts', function (req, res)
{
    db.createDemoContact();
    res.send('Ok ! Created.')
});


function onListening() {
    var addr = server.address();
    console.log('Node.JS Listening on '
        + addr.address + ':' + addr.port);
}
