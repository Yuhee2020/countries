import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {ApolloProvider} from "@apollo/client";
import client from "./apolo/client";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
);



