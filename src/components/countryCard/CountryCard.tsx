import React from 'react';
import {Card, CardHeader} from "@mui/material";
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MoneyIcon from '@mui/icons-material/Money';
import PublicIcon from '@mui/icons-material/Public';
import "./CountryCard.scss"
import {CountryType} from "../../types";
import {Fade} from "react-awesome-reveal";

type PropsType = {
    country: CountryType
}

const CountryCard = ({country}: PropsType) => {
    const {name, continent, capital, languages, currency, phone, emoji} = country
    return (
        <Fade>
        <Card
            className="countryCardContainer"
            elevation={5}
        >

            <CardHeader
                className="cardHeader"
                avatar={<div className="avatar">{emoji}</div>}
                title={name}
                subheader={capital}
            />
            <div className="fields">
                <div><GTranslateIcon/> {languages.map(l => l.native).join(", ")}</div>
                <div><LocalPhoneIcon/> {phone}</div>
                <div><MoneyIcon/> {currency}</div>
                <div><PublicIcon/> {continent.name}</div>
            </div>

        </Card>
        </Fade>
    );
};

export default CountryCard;