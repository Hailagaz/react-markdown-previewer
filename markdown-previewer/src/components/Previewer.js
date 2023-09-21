// Previewer.js
import React from 'react';
import * as marked from 'marked';
import { Container } from '@mui/material';

function Previewer({ markdown }) {
	const getMarkdownText = () => {
		return { __html: marked(markdown, { breaks: true }) };
	};

	return (
		<Container>
			<div
				id="preview"
				style={{
					padding: '16px',
					backgroundColor: 'white',
					minHeight: '200px',
					border: '1px solid #ccc',
				}}
				dangerouslySetInnerHTML={getMarkdownText()}
			/>
		</Container>
	);
}

export default Previewer;
