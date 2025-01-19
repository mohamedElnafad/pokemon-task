// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PokemonListPage from './Pages/PokemonListPage.tsx';
import PokemonDetailsPage from './Pages/PokemonDetailsPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PokemonListPage />} />
        <Route path='/pokemon/:id' element={<PokemonDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
