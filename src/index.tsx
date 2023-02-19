import React from 'react';

import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';

import './index.scss';
import client from './apolo/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
