const mongoose = require('mongoose');
const companiesSchema = new mongoose.Schema(
{
    companyId: Number,
    name: String,
    year: Number
}, {toJSON: {virtuals: true}}
);
const Companies = mongoose.model('Companies', companiesSchema);
module.exports ={ Companies }
