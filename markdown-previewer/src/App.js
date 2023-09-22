import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, TextareaAutosize } from '@mui/material';
import Previewer from './components/Previewer';

function App() {
	const [markdownText, setMarkdownText] = useState(
		// Default markdown text
		`# Welcome to my Markdown Previewer
## This is a sub-heading
Here's a link: [freeCodeCamp](https://www.freecodecamp.org)
Inline code: \`<div></div>\`
\`\`\`
// Code block
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![Markdown Previewer Logo](https://via.placeholder.com/150)
**Bold text**
    `
	);

	const handleMarkdownChange = (e) => {
		setMarkdownText(e.target.value);
	};

	return (
		<Container maxWidth="md">
			<Typography variant="h3" align="center" gutterBottom>
				Markdown Previewer
			</Typography>
			<Grid container spacing={3} flexDirection="column" alignItems="center">
				<Grid item xs={12} sm={12}>
					<Paper elevation={3} style={{ padding: '16px' }}>
						<Typography variant="h5" gutterBottom>
							Editor
						</Typography>
						<TextareaAutosize
							id="editor"
							rows={15}
							value={markdownText}
							onChange={handleMarkdownChange}
							style={{ width: '100%' }}
						/>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12}>
					<Paper elevation={3} style={{ padding: '16px' }}>
						<Typography variant="h5" gutterBottom>
							Preview
						</Typography>
						<Previewer markdownText={markdownText} />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}

export default App;
