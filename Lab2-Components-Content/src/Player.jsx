import React from 'react'

function Player(props) {
	return (
		<div style={{ border: '5px solid black', padding: '0px 20px 20px 20px', position: 'relative' }}>
			<h1>Player {props.playerNumber}</h1>
			<p>Name: {props.playerName}</p>
			<p>Played number of times: {props.playerTimesPlayed}</p>
			<button
				style={{ width: '250px', position: 'absolute', right: '10px', bottom: '10px' }}
				onClick={props.onClicking}
				disabled={props.buttonDisabled}
			>{props.buttonText}</button>
		</div>
	);
}

export default Player