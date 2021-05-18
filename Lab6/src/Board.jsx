import React from 'react';
import { connect } from 'react-redux';
import Tile from './Tile';

const mapStateToProps = (state) => {
	return {
		snakeBody: state.snakeBody,
		snakeHead: state.snakeHead,
		width: state.width,
		height: state.height
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		moveLeft: () => dispatch({ type: 'MOVE_LEFT' }),
		moveUp: () => dispatch({ type: 'MOVE_UP' }),
		moveRight: () => dispatch({ type: 'MOVE_RIGHT' }),
		moveDown: () => dispatch({ type: 'MOVE_DOWN' })
	}
}

function handleOnKeyDown(e, props) {
	switch (e.key) {
		case 'ArrowLeft':
			props.moveLeft();
			break;
		case 'ArrowUp':
			props.moveUp();
			break;
		case 'ArrowRight':
			props.moveRight();
			break;
		case 'ArrowDown':
			props.moveDown();
			break;
		default:
			break;
	}
}

class Board extends React.Component {
	componentDidMount() {
		document.getElementById("board").focus();
	}

	Paint() {
		let grid = new Array(this.props.height);
		for (var i = 0; i < grid.length; i++) {
			grid[i] = new Array(this.props.width);
			grid[i].fill("white");
		}
		for (let i in this.props.snakeBody)
			grid[this.props.snakeBody[i].y][this.props.snakeBody[i].x] = "lime";
		grid[this.props.snakeHead.y][this.props.snakeHead.x] = "limegreen";
		return grid;
	}

	render() {
		return (
			<div className="div" id="board" tabIndex="-1" onKeyDown={e => handleOnKeyDown(e, this.props)}>
				{this.Paint().map(row => <div className="divRow">{row.map(color => <Tile color={color} />)}</div>)}
			</div>);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);