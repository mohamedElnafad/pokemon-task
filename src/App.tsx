// src/App.tsx
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import PokemonListPage from './Pages/PokemonListPage';
import PokemonDetailsPage from './Pages/PokemonDetailsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route>
        <Route path='/' component={PokemonListPage} />
        <Route path='/pokemon/:id' component={PokemonDetailsPage} />
      </Route>
    </BrowserRouter>
  );
};

export default App;
