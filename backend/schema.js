const {Equities} = require('./models/products')
const {Companies} = require('./models/companies')
const { gql } = require('graphql-tag')
const mongoose = require('mongoose');

const typeDef=gql`
    type Equity{
        name: String
        category: String
        company_id: Int
        open_value: Float
        close_value: Float
        company: Company
    }

    type Company{
        companyId: Int
        name: String
        year: Int
    }

    type Query{
        getAllEquities: [Equity]
        getAllCompanies: [Company]
        getEquity(name: String): Equity
        getCompany(companyId: Int): Company
    }
`;
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

const typeDef2 = gql`
type Query{
    greetings: String
}
`;
const resolvers2 = {
    Query: {
        greetings: ()=>'You Are Awesome!!'
    },
};


module.exports={typeDef, resolvers};
//{"name":"TCS" ,category: "IT", "company_id": 101, "open_value": 123.5, "close_value": 125.1},
//{ "companyId":101, "name":"Tata Group" , "year":1968 }, 