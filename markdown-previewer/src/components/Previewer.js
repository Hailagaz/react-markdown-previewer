import React from 'react';
import { Typography } from '@mui/material';
import * as marked from 'marked'; // Use this import statement

function Previewer({ markdownText }) {
	const getMarkdownText = () => {
		// Use the marked library to convert markdown to HTML
		const rawMarkup = marked.parse(markdownText, { sanitize: true });
		return { __html: rawMarkup };
	};

	return (
		<Typography
			id="preview"
			variant="body1"
			dangerouslySetInnerHTML={getMarkdownText()}
			style={{ maxHeight: '500px', overflowY: 'auto' }}
		/>
	);
}

export default Previewer;
