import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Photos } from './pages/Photos';

export const App = _ => (
	<>
		<Header />

		<Routes>
			<Route path="/" element={<Photos />} />
			<Route path="/cart" element={<Cart />} />
		</Routes>
	</>
);
