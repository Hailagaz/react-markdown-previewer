// App.js
import React, { useEffect, useState } from 'react';
import { CssBaseline, Container, Grid, Typography, Paper } from '@mui/material';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { defaultMarkdown } from './sampleMarkdown';

function App() {
	const [markdown, setMarkdown] = useState(defaultMarkdown);

	useEffect(() => {
		setMarkdown(defaultMarkdown);
	}, []);

	return (
		<div>
			<CssBaseline />
			<Container maxWidth="lg" style={{ marginTop: '24px' }}>
				<Typography variant="h4" align="center" gutterBottom>
					Markdown Previewer
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<Paper elevation={3}>
							<Typography variant="h6" align="center" gutterBottom>
								Editor
							</Typography>
							<Editor markdown={markdown} />
						</Paper>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Paper elevation={3}>
							<Typography variant="h6" align="center" gutterBottom>
								Previewer
							</Typography>
							<Previewer markdown={markdown} />
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
