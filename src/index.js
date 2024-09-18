import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { ApolloClient, ApolloProvider, HttpLink , InMemoryCache } from '@apollo/client';
import ElectronicStoreApp from './Reducers';
import './index.css';

const client = new ApolloClient({
  cache : new InMemoryCache(),
  link: new HttpLink({
    uri : "https://localhost:7259/graphql/"
  })
});

let store = createStore(ElectronicStoreApp);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);