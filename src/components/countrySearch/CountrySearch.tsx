import React, {SyntheticEvent} from 'react';
import {Autocomplete, Box, TextField} from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import {CountryType} from "../../types";

type PropsType = {
    countries: CountryType[]
    onAutocompleteChange: (event: SyntheticEvent<Element, Event>, newValue: CountryType | null) => void
}


const CountrySearch = ({countries, onAutocompleteChange}: PropsType) => {

    const handleAutocompleteChange = (event: SyntheticEvent<Element, Event>, newValue: CountryType | null) => {
        onAutocompleteChange(event, newValue)
    }

    return (
        <div>
            <Autocomplete
                onChange={handleAutocompleteChange}
                sx={{width: 300}}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.code}
                renderOption={(props, option) => (
                    <Box component="li"
                         sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                        {option.emoji}
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
        </div>
    );
};

export default CountrySearch;