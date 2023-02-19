import React from 'react';
import {Card, CardHeader} from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MoneyIcon from '@mui/icons-material/Money';
import PublicIcon from '@mui/icons-material/Public';
import  "./CountryCard.scss"
import {CountryType} from "../../types";

type PropsType = {
    country: CountryType
}

const CountryCard = ({country}: PropsType) => {
    const {code, name, continent, capital, languages, currency, phone,emoji} = country
    return (
        <Card
            className="countryCardContainer"
            elevation={5}
            key={name}
            sx={{width: 275}}>
            <CardHeader
                avatar={<div className="avatar">{emoji}</div>}
                title={name}
                subheader={capital}
            />
            <div><GTranslateIcon/> {languages.map(l => l.native).join(", ")}</div>
            <div><LocalPhoneIcon/> {phone}</div>
            <div><MoneyIcon/> {currency}</div>
            <div><PublicIcon/> {continent.name}</div>
        </Card>
    );
};

export default CountryCard;