import React, {SyntheticEvent} from 'react';
import {Autocomplete, Box, Paper, TextField} from "@mui/material";
import {CountryType} from "../../types";
import "./CountrySearch.scss"
import {Zoom} from "react-awesome-reveal";

type PropsType = {
    countries: CountryType[]
    onAutocompleteChange: (event: SyntheticEvent<Element, Event>, newValue: CountryType | null) => void
}


export const CountrySearch = ({countries, onAutocompleteChange}: PropsType) => {

    const handleAutocompleteChange = (event: SyntheticEvent<Element, Event>,
                                      newValue: CountryType | null) => {
        onAutocompleteChange(event, newValue)
    }

    return (
        <Zoom>

                <Paper className="searchContainer"><Autocomplete
                    onChange={handleAutocompleteChange}
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.code}
                    renderOption={(props, option) => (
                        <Box component="li"{...props}>
                            {option.emoji} {option.code}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField

                            {...params}
                            label="Search by country code"

                        />
                    )}
                /></Paper>

        </Zoom>
    );
};

