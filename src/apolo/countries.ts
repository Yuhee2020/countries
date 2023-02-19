import { gql } from '@apollo/client';

export const ALL_COUNTRIES = gql`
  query AllCountries {
    countries {
      code
      name
      phone
      capital
      currency
      languages {
        native
      }
      continent {
        name
      }
      emoji
    }
  }
`;
