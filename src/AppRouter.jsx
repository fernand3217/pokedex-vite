import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, PokemonPage, SearchPage } from './pages';

export const AppRouter = () => {
  return (
	<Routes>
		<Route path='/' element={<Navigation/>}>
 				<Route index element={<HomePage />} />
 				<Route path='pokemon/:id' element={<PokemonPage />} /> // localhost/pokemon/10
 				<Route path='search' element={<SearchPage />} />
		</Route>
		<Route path='*' element={<Navigate to='/' />} />
	</Routes>
  )
}
