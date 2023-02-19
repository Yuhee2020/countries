import React, {useState} from 'react';
import {useQuery} from "@apollo/client";
import {ALL_COUNTRIES} from "./apolo/countries";
import "./App.scss"
import {Autocomplete, Box, TextField} from "@mui/material";
import ReactCountryFlag from "react-country-flag"
import CountryCard from "./components/countryCard/CountryCard";


export type CountryType = {
    code: string;
    name: string;
    native: string;
    phone: string;
    capital: string;
    currency: string;
    languages: {
        name: string;
        native: string;
        __typename: string;
    };
    continent: {
        name: string;
        __typename: string;
    };
    emoji: any;
    states: string[];
    __typename: string;
}


function App() {

    const {loading, error, data} = useQuery(ALL_COUNTRIES)
    const [country, setCountry] = useState<CountryType | null>()
    const handleAutocompleteChange = (event: any, newValue: CountryType | null) => {
        setCountry(newValue)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    const countries = data.countries as CountryType[]

    return (
        <div className="AppContainer">
            <Autocomplete
                onChange={handleAutocompleteChange}
                sx={{width: 300}}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.code}
                renderOption={(props, option) => (
                    <Box component="li"
                         sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                        <ReactCountryFlag
                            countryCode={option.code}
                            svg
                            style={{
                                width: '1.5em',
                                height: '1.5em',
                            }}
                            title={option.code}
                        />
                        {option.code}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search by country code"
                        inputProps={{
                            ...params.inputProps,
                        }}
                    />
                )}
            />
            {(country ? [country] : countries).map(country =>
                <CountryCard key={country.name} country={country}/>)}
        </div>
    );
}

export default App;
