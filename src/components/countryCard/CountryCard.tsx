import React from 'react';
import {Card, CardHeader} from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import {CountryType} from "../../App";

type PropsType={
    country:CountryType
}

const CountryCard = ({country}:PropsType) => {
    const {code,name,continent,capital,languages,native,currency,phone}=country
    return (
        <Card key={name} sx={{width: 275}}>
            <CardHeader
                avatar={<ReactCountryFlag
                    countryCode={code}
                    svg
                    style={{width: '2em', height: '2em',}}
                    title={code}
                />}
                title={name}
                subheader={capital}
            />
        </Card>
    );
};

export default CountryCard;