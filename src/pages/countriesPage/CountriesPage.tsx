import React, {SyntheticEvent, useState} from 'react';
import CountryCard from "../../components/countryCard/CountryCard";
import {useQuery} from "@apollo/client";
import {ALL_COUNTRIES} from "../../apolo/countries";
import {CountryType} from "../../types";
import CountrySearch from "../../components/countrySearch/CountrySearch";


export const CountriesPage = () => {

    const {loading, error, data} = useQuery(ALL_COUNTRIES)
    const [country, setCountry] = useState<CountryType | null>()
    const handleAutocompleteChange = (event: SyntheticEvent<Element, Event>, newValue: CountryType | null) => {
        setCountry(newValue)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const countries = data.countries as CountryType[]
    return (
        <div>
            <CountrySearch
                countries={countries}
                onAutocompleteChange={handleAutocompleteChange}/>
            {(country ? [country] : countries).map(country =>
                <CountryCard key={country.name} country={country}/>)}
        </div>
    );
};
