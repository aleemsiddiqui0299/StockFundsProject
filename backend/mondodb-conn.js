const mongoose = require('mongoose');
const { AutomaticPrefetchPlugin } = require('webpack');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number
});

const Author = mongoose.model('Author', authorSchema);

Vercel
//can define schema and models before connecting
mongoose.connect('mongodb+srv://<username>:<password>@<cluster-id>.mongodb.net/',{
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

Author.find({})
.then(authors => console.log(authors))
.catch(err => console.error("Error fetching authors ",err));

module.exports = mongoose;