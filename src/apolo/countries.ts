import {gql} from "@apollo/client";


export const ALL_COUNTRIES = gql`
  query AllCountries {
    countries {
        code
        name
        native
        phone
        capital
        currency
        languages {
            name
            native
        }
        continent {
            name
        }
        emoji
        states {
            name
        }
    }
}
`;


