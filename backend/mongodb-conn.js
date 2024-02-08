const mongoose = require('mongoose');
const { ApolloServer } = require('@apollo/server')
const { Products } = require('./models/authors')

//Connecting to mongodb server
mongoose.connect('YOUR_MONGODB_CONNECTION_STRING',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database connected... ');
}).catch(err =>{
    console.error("Initial error ", err);
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
    console.log('Connected to database : '+db.name)
});

// Finding documents in products collection
Products.find({}).select('name category price')
.then(products => console.log(products))
.catch(err => console.error("Error fetching authors ",err));

module.exports = Products;