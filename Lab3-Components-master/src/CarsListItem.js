import React from 'react';
import "./styles.css";

export class CarsListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			car: props.car,
			isEdited: props.isEdited,
		}
		this.changeEditState = this.changeEditState.bind(this);
	}

	changeEditState() {
		this.setState((prevState) => ({
			...prevState,
			isEdited: !(prevState.isEdited)
		}))
	}

	render() {
		return (
			<div className="divS">
				<table style={{ width: '100%' }}>
					<tbody>
						<tr>
							<td className="tdS">
								<img className="imgS" src={this.state.car.image} alt={this.state.car.name} />
							</td>
							<td className="tdS">
								<label className="labelS" style={{ fontSize: "30px" }}>{this.state.car.name}</label><br />
							</td>
							<td className="tdS">
								<label className="labelS">Seats: {this.state.car.seats}</label><br />
								<label className="labelS">Doors: {this.state.car.doors}</label><br />
							</td>
							<td className="tdS">
								{this.state.isEdited === false ?
									<label className="labelS">Price per day: {this.state.car.pricePerDay}</label> :
									<input className="inputS" type="number" value={this.state.car.pricePerDay} onChange={e => this.props.changePrice(this.state.car.id, e.target.value)} />}
								<br />
								{this.state.isEdited === false ?
									<button className="buttonS" onClick={this.changeEditState}>Edit</button> :
									<button className="buttonS" onClick={this.changeEditState}>Save</button>}
								<br />
								<button className="buttonS" onClick={() => this.props.deleteItem(this.state.car.id)}>Delete</button>
								<br />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}