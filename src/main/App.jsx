import './App.scss';
import React from 'react';
import Search from '../components/input/Input';

const App = (props) => {
	function busca() {
		console.log('buscando.....');
	}

	return (
		<div className="App">
			<div className="container d-flex flex-column">
				<div className="col-12">
					<h1 className="text-white size-60 mt-27">
						Previsão do tempo
					</h1>
				</div>
				<div className="col-12 mt-5 text-center">
					<Search
						cols="12"
						className="Input"
						type="search"
						placeholder="Insira aqui o nome da cidade"
						busca={() => busca()}
					/>
				</div>
				<div
					className="col-12 mt-6"
					style={{ border: '1px solid #fff' }}
				></div>
				<div className="list justify-content-start">
					<h1 className="text-white">Capitais</h1>
				</div>
			</div>
		</div>
	);
};

export default App;
