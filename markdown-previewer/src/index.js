import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { createRoot } from 'react-dom/client';

const theme = createTheme();

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
