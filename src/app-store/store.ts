// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../api/pokemonApi.ts';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
