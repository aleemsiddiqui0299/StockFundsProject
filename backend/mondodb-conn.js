const mongoose = require('mongoose');


//can define schema and models before connecting

mongoose.connect('mongodb+srv://<username>:<password>@<cluster>.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database connected... ');
}).catch(err =>{
    console.error("INitial error ", err);
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
    console.log('Connected to database : '+db.name)
});

module.exports = mongoose;
