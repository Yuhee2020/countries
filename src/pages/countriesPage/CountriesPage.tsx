import React, { SyntheticEvent, useState } from 'react';

import { useQuery } from '@apollo/client';
import { Alert } from '@mui/material';

import { ALL_COUNTRIES } from '../../apolo/countries';
import { BackDrop, CountryCard, CountrySearch } from '../../components';
import { CountryType } from '../../types';

export const CountriesPage = () => {
  const { loading, error, data } = useQuery(ALL_COUNTRIES);

  const [country, setCountry] = useState<CountryType | null>();

  const handleAutocompleteChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: CountryType | null,
  ) => {
    setCountry(newValue);
  };

  if (loading) return <BackDrop loading={loading} />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  const countries = data.countries as CountryType[];

  return (
    <div className="countriesPage">
      <CountrySearch
        countries={countries}
        onAutocompleteChange={handleAutocompleteChange}
      />

      <div className="cards">
        {(country ? [country] : countries).map(country => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};
