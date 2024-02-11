import { gql } from '@apollo/client';

// Define queries here

const GET_ONLY_TRADES = gql`
  query get_all_trades {
    getAllEquities {
      name
      company_id
      category
      open_value
      close_value
    }
  }
`;

const GET_EQUITIES_COMPANIES = gql`
  query get_all_equities_with_companies {
    getAllEquities {
      name
      company {
        name
        year
      }
    }
  }
`;

const GET_COMPANIES = gql`
  query get_all_companies {
    getAllCompanies {
      name
      year
      companyId
    }
  }
`;

// Parameterized queries
const GET_EQUITY_BY_NAME = gql`
  query get_equity_by_name($eq_name: String!) {
    getEquity(name: $eq_name) {
      name
      company_id
      category
      company {
        name
        year
      }
    }
  }
`;

const GET_COMPANY_BY_ID = gql`
  query get_company_by_id($comp_id: Int!) {
    getCompany(companyId: $comp_id) {
      name
      year
      companyId
    }
  }
`;

export default {
  GET_ONLY_TRADES,
  GET_EQUITIES_COMPANIES,
  GET_COMPANIES,
  GET_EQUITY_BY_NAME,
  GET_COMPANY_BY_ID
};
