var mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {id: Number, name: String, tel: String});

function init()
{
    mongoose.connect('mongodb://localhost/MyNewDB');
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('DB Started');
    });
}

function createDemoContact()
{
    var contact = new Contact({id: 0, name: 'rotem', tel: '06666666'});
    contact.save(function (err)
    {
        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log('Yay !!! Save success!');
        }
    });
}


function getContacts(cb)
{
    Contact.find().exec(cb)
}



module.exports = {
    'createDemoContact': createDemoContact,
    'init': init,
    'getContacts' : getContacts
};

