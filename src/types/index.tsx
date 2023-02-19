export type CountryType = {
  code: string;
  name: string;
  phone: string;
  capital: string;
  currency: string;
  languages: [
    {
      native: string;
      __typename: string;
    },
  ];
  continent: {
    name: string;
    __typename: string;
  };
  emoji: string;
};
