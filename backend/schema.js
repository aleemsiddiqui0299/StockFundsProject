const {Equities} = require('./models/products')
const {Companies} = require('./models/companies')
const { gql } = require('graphql-tag')
const mongoose = require('mongoose');

const typeDef=gql`
    type Equity{
        id: ID
        name: String
        category: String
        company_id: Int!
        open_value: Float
        close_value: Float
        company: Company
    }

    type Company{
        id: ID
        companyId: Int!
        name: String
        year: Int
    }

    type Query{
        getAllEquities: [Equity]
        getAllCompanies: [Company]
        getEquity(company_id: Int!): Equity
    }
`;
const resolvers= {
    Equity: {
        //logic to grab equity based on 
        company:async (equity)=> await Companies.find({ companyId: equity.company_id})
    },
    Query: {
        getAllEquities : async ()=> await Equities.find(),
        getAllCompanies : async ()=> await Companies.find(),
        getEquity: async(parent, {id})=> await Equities.find({ company_id: id})
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