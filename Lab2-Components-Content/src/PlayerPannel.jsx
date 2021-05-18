import React from 'react'

function PlayerPannel(props) {
	return (
		<div style={{ whiteSpace: 'nowrap', display: 'flex' }}>
			<label style={{ padding: '0px 50px 0px 0px', float: 'left' }}>
				Set name of Player {props.playerNumber}:
            </label>
			<input style={{ border: '3px solid black', width: '100%' }} onChange={props.onChanging} />
		</div>
	)
}

export default PlayerPannel