const {Equities} = require('./models/products')

const typeDef=`
    type Equity{
        name: String!
        category: String!
        company_id: Int!
        open_value: Float!
        close_value: Float!
        company: Company
    }

    type Company{
        companyId: Int!
        name: String!
        year: Int!
    }

    type Query{
        getAllEquities: [Equity]
        getAllCompanies: [Company]
        getEquity(company_id: Int!): Equity
    }
`
resolvers: {
    Equity: {
        //logic to grab equity based on 
        company:async (equity)=> await Equities.find({ $company_id: equity.company_id})
    }
}
//{"name":"TCS" ,category: "IT", "company_id": 101, "open_value": 123.5, "close_value": 125.1},
//{ "companyId":101, "name":"Tata Group" , "year":1968 }, 