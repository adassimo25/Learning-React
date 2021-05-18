
export default function snakeReducer(state = { snakeBody: [{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 1, y: 5 }], snakeHead: { x: 1, y: 1 }, width: 10, height: 10 }, action) {
	let newBody = [];
	newBody = newBody.concat(state.snakeBody);
	newBody.splice(newBody.length - 1, 1);
	switch (action.type) {
		case 'MOVE_LEFT': {
			let newHead = { x: state.snakeHead.x - 1, y: state.snakeHead.y };
			if (state.snakeHead.x === 0 || state.snakeBody.some(b => (b.x === newHead.x && b.y === newHead.y)))
				return state;
			return { ...state, snakeBody: [state.snakeHead].concat(newBody), snakeHead: newHead };
		};
		case 'MOVE_UP': {
			let newHead = { x: state.snakeHead.x, y: state.snakeHead.y - 1 };
			if (state.snakeHead.y === 0 || state.snakeBody.some(b => (b.x === newHead.x && b.y === newHead.y)))
				return state;
			return { ...state, snakeBody: [state.snakeHead].concat(newBody), snakeHead: newHead };
		};
		case 'MOVE_RIGHT': {
			let newHead = { x: state.snakeHead.x + 1, y: state.snakeHead.y };
			if (state.snakeHead.x + 1 === state.width || state.snakeBody.some(b => (b.x === newHead.x && b.y === newHead.y)))
				return state;
			return { ...state, snakeBody: [state.snakeHead].concat(newBody), snakeHead: newHead };
		};
		case 'MOVE_DOWN': {
			let newHead = { x: state.snakeHead.x, y: state.snakeHead.y + 1 };
			if (state.snakeHead.y + 1 === state.height || state.snakeBody.some(b => (b.x === newHead.x && b.y === newHead.y)))
				return state;
			return { ...state, snakeBody: [state.snakeHead].concat(newBody), snakeHead: newHead };
		};
		default:
			return state;
	}
}