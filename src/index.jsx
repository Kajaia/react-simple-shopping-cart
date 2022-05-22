import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { ContextProvider } from './Context';
import { App } from './App';

import 'remixicon/fonts/remixicon.css';
import 'sweetalert2/src/sweetalert2.scss';
import './assets/styles/index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<ContextProvider>
		<Router>
			<App />
		</Router>
	</ContextProvider>
);
