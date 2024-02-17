const { gql } = require('graphql-tag')
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
module.exports={typeDef};
