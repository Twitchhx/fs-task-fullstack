import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import './output.css';
import client from './apollo/client.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
