const mongoose = require('mongoose');

//Defining schema, although it will present all fields if documents were added before defining schema
const productsSchema = new mongoose.Schema({
    name: {
     type: String,
     required: true,
    },
    company: {
     type: String,
     require: true,
    },
 },{toJSON: { virtuals : true }});
 
 const Products = mongoose.model('Products', productsSchema);
 module.exports = { Products };
