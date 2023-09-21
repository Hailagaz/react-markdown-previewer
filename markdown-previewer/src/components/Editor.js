import React, { useState } from 'react';
import { Container, TextareaAutosize } from '@mui/material';

function Editor() {
	const [markdown, setMarkdown] = useState('');

	const handleInputChange = (event) => {
		setMarkdown(event.target.value);
	};

	return (
		<Container>
			<TextareaAutosize
				id="editor"
				value={markdown}
				onChange={handleInputChange}
				rowsMin={10}
				style={{ width: '100%', padding: '16px' }}
			/>
		</Container>
	);
}

export default Editor;
