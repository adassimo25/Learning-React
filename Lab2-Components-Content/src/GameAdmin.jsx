import React from 'react'
import Player from './Player'
import PlayerPannel from './PlayerPannel'

class GameAdmin extends React.Component {
	constructor() {
		super();
		this.state = {
			playerOne: {
				playerName: "",
				active: true,
				buttonText: "Play",
				timesPlayed: 0
			},
			playerTwo: {
				playerName: "",
				active: true,
				buttonText: "Play",
				timesPlayed: 0
			}
		}
		this.onChangeInputOne = this.onChangeInputOne.bind(this);
		this.onChangeInputTwo = this.onChangeInputTwo.bind(this);
		this.onClickButtonOne = this.onClickButtonOne.bind(this);
		this.onClickButtonTwo = this.onClickButtonTwo.bind(this);
	}

	onChangeInputOne(event) {
		var nameOne = event.target.value;
		this.setState((prevState) => ({
			playerOne: {
				...prevState.playerOne,
				playerName: nameOne
			}
		}))
	}

	onChangeInputTwo(event) {
		var nameTwo = event.target.value;
		this.setState((prevState) => ({
			playerTwo: {
				...prevState.playerTwo,
				playerName: nameTwo
			}
		}))
	}

	onClickButtonOne(event) {
		this.setState((prevState) => ({
			playerOne: {
				...prevState.playerOne,
				active: false,
				buttonText: "The user is playing now",
				timesPlayed: prevState.playerOne.timesPlayed + 1
			},
			playerTwo: {
				...prevState.playerTwo,
				active: true,
				buttonText: "Play"
			}
		}))
	}

	onClickButtonTwo(event) {
		this.setState((prevState) => ({
			playerOne: {
				...prevState.playerOne,
				active: true,
				buttonText: "Play",
			},
			playerTwo: {
				...prevState.playerTwo,
				active: false,
				buttonText: "The user is playing now",
				timesPlayed: prevState.playerTwo.timesPlayed + 1
			}
		}))
	}

	render() {
		return (
			<div style={{ fontFamily: 'Comic Sans MS' }}>
				<Player playerNumber="One"
					playerName={this.state.playerOne.playerName}
					playerTimesPlayed={this.state.playerOne.timesPlayed}
					onClicking={this.onClickButtonOne}
					buttonText={this.state.playerOne.buttonText}
					buttonDisabled={!this.state.playerOne.active}
				/>
				<br />
				<Player playerNumber="Two"
					playerName={this.state.playerTwo.playerName}
					playerTimesPlayed={this.state.playerTwo.timesPlayed}
					onClicking={this.onClickButtonTwo}
					buttonText={this.state.playerTwo.buttonText}
					buttonDisabled={!this.state.playerTwo.active}
				/>
				<br />
				<hr style={{ color: 'black', backgroundColor: 'black', height: '5px' }} />
				<br />
				<PlayerPannel playerNumber="One" onChanging={this.onChangeInputOne} />
				<br />
				<PlayerPannel playerNumber="Two" onChanging={this.onChangeInputTwo} />
			</div>
		);
	};
}

export default GameAdmin