const mongoose = require('mongoose');
const { ApolloServer } = require('@apollo/server')
const { Equities } = require('./models/products')
const {Companies} = require('./models/companies')

//Connecting to mongodb server for local testing of models
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
Equities.find({ company_id: 103})
.then(products => console.log(products))
.catch(err => console.error("Error fetching authors ",err));

Companies.find({ year: { $gt: 1984 }})
.then(products => console.log(products))
.catch(err => console.error("Error fetching authors ",err));

// module.exports = Equities;