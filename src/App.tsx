import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { getPokemons } from './services/API';
import { PokemonsList } from './services/API/type';

import Landing from './pages/Landing';

const PAGINATION_SIZE = 5;

function App() {
  const [offset, setOffset] = useState(0);
  const [paginationInfo, setPaginationInfo] = useState<PokemonsList>();

  useEffect(() => {
    const loadPage = async () => await getPokemons(PAGINATION_SIZE, offset).then(page => setPaginationInfo(page));

    loadPage();
  }, [offset]);


  const increment = () => setOffset(prev => prev + 1);

  const decrement = () => {
    if (offset) setOffset(prev => prev - 1);
  };

  return (
    <Router>
      <Route exact path="/">
        <Landing paginationInfo={paginationInfo} increment={increment} decrement={decrement} />
      </Route>
      <Route exact path="/pokemon">
        <h1>HOLA!</h1>
      </Route>
    </Router>
  );
}

export default App;
