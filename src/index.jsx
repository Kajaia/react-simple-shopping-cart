import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ContextProvider } from './Context';
import { App } from './App';

import './assets/styles/index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<ContextProvider>
			<Router>
				<App />
			</Router>
		</ContextProvider>
	</React.StrictMode>
);
