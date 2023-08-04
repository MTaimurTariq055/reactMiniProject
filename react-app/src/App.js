import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PokemonProvider } from './components/PokemonContextProvider';
import { Home } from './components/Home';
import PokemonDetails from './components/PokemonDetails'; // Import the detail component
import './App.css';
import Header from './components/Header';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphqlpokemon.favware.tech/v7',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <Router>
          <Header />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<PokemonDetails />} />
          </Routes>
        </Router>
      </PokemonProvider>
    </ApolloProvider>
  );
}

export default App;