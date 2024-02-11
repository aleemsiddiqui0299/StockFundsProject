const mongoose = require('mongoose');


const companiesSchema = new mongoose.Schema({
    companyId: Number,
    name: String,
    year: Number
}, {toJSON: {virtuals: true}});

const Companies = mongoose.model('Companies', companiesSchema);

module.exports = Companies;
//{"name":"TCS" ,category: "IT", "company_id": 101, "open_value": 123.5, "close_value": 125.1},
//{ "companyId":101, "name":"Tata Group" , "year":1968 }, 