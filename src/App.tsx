import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// react functional component return type is F

function App(): React.FC {
	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = (): any => {
		const users = [];
		console.log(users);
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>dfsdf</h1>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
