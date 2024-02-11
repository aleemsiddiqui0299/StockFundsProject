const {Equities} = require('./models/products')
const {Companies} = require('./models/companies')
const mongoose = require('mongoose');


const resolvers= {
    Equity: {

        //logic to grab equity based on 
        company: async function(parent) {

            console.log('Parent equity name : '+ parent.name+" equity company id : ", parent.company_id);
            const equity = await Companies.findOne({ companyId: parent.company_id});
            console.log('Result for company in equity : ', equity);
            return equity;

        }
    },
    Query: {

        getAllEquities : async ()=> await Equities.find(),
        getAllCompanies : async ()=> await Companies.find(),

        getEquity: async function(parent, {name}) {
            try{
                console.log("RECEIVED name for equity search: ", name);
                result = await Equities.findOne({ name });
                console.log("Result equity : ", result);
                return result;
            }catch(error){
                console.log("Database Error: ", error);
            } 
        },
        
        getCompany: async function(parent, {companyId}) {
            try{
                console.log("RECEIVED Company_id for Company search: ", companyId);
                result = await Companies.findOne({ companyId });
                console.log("Result company : ", result);
                return result;
            }catch(error){
                console.log("Database Error: ", error);
            } 
        },
    }
};

module.exports={ resolvers }