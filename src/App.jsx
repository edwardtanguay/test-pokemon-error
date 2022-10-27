import { useState, useEffect } from 'react';
import './App.scss';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ivysaur';

function App() {
	const [pokemonObj, setPokemonObj] = useState({});

	useEffect(() => {
		(async () => {
			const response = await fetch(apiUrl);
			const result = await response.json();
			const _pokemonObj = result.sprites.other['official-artwork'];
			console.log(_pokemonObj);
			setPokemonObj(_pokemonObj);
		})();
	}, []);

	return (
		<div className="App">
			<h1>Pokemon Test Site</h1>
			<p>{pokemonObj.front_default}</p>
			<img src={pokemonObj.front_default} />
		</div>
	);
}

export default App;
