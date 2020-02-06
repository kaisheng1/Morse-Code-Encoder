import React, { useState } from 'react';
import MorseCode from './morse_code';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
import styled from 'styled-components';

const m = new MorseCode();

function App() {
	const [ input, setInput ] = useState('');
	const [ output, setOutput ] = useState('');
	const [ doEncrypt, setDoEncrypt ] = useState(true);

	const encrypt = (input) => {
		setOutput(m.encode(input));
	};
	const decrypt = (input) => {
		setOutput(m.decode(input));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		doEncrypt ? encrypt(input) : decrypt(input);
	};

	return (
		<Container>
			<Row>
				<form onSubmit={handleSubmit} style={{ height: '100%' }}>
					<TextArea placeholder="Input" value={input} onChange={(e) => setInput(e.target.value)} />
					<FloatRight>
						<Button type="submit" onClick={() => setDoEncrypt(true)}>
							Encode
						</Button>
						<Button type="submit" onClick={() => setDoEncrypt(false)}>
							Decode
						</Button>
					</FloatRight>
				</form>
			</Row>
			<Row>
				<TextArea placeholder="Output" value={output} onChange={(e) => setOutput(e.target.value)} />
				<FloatRight>
					<CopyToClipboard text={output} onCopy={() => alert('Copied successfully')}>
						<Button>Copy</Button>
					</CopyToClipboard>
				</FloatRight>
			</Row>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Row = styled.div`
	width: 100%;
	height: 100%;
	padding: 2rem 0;
`;
const TextArea = styled.textarea`
	width: 100%;
	height: 80%;
	padding: 1rem;
`;

const FloatRight = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Button = styled.button`
	background-color: #007bff;
	color: white;
	outline: none;
	border: none;
	padding: 0.5rem 2rem;
	cursor: pointer;
	margin-left: 1rem;
	margin-top: 1rem;

	&:hover {
		opacity: 90%;
	}
`;

export default App;
