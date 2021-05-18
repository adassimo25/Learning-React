import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './snakeReducer';
import Board from './Board';

const store = createStore(reducer, composeWithDevTools());

function App() {
	return (
		<Provider store={store}>
			<Board />
		</Provider>
	);
}

export default App;