// src/App.tsx
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import PokemonListPage from './Pages/PokemonListPage';
import PokemonDetailsPage from './Pages/PokemonDetailsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={PokemonListPage} exact />
        <Route path='/pokemon/:id' component={PokemonDetailsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
