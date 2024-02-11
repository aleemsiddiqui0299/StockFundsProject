const mongoose = require('mongoose');
const Decimal128 = mongoose.Schema.Types.Decimal128;

//Defining schema, although it will present all fields if documents were added before defining schema
const equitiesSchema = new mongoose.Schema({
    name: {
     type: String,
     required: true,
    },
    category: {
        type: String,
        require: true,
       },
    company_id: {
     type: Number,
     require: true,
    },
    open_value: {
        type: Decimal128,
        required: true
    },
    close_value: {
        type: Decimal128,
        required: true
    }
 },{toJSON: { virtuals : true }});
 const Equities = mongoose.model('Equities', equitiesSchema);
 module.exports = { Equities }
