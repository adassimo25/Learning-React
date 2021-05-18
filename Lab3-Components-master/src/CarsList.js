import React from 'react';
import { CarsListItem } from './CarsListItem'
import cars from './data/cars.json'

export class CarsList extends React.Component {
	constructor() {
		super();
		cars.forEach((car, index) => {
			car.id = index;
		});
		this.state = {
			dynamicSearch: "",
			cars: cars,
			displayedCars: cars
		}
		this.dynamicChangeState = this.dynamicChangeState.bind(this);
		this.searchChangeState = this.searchChangeState.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.changePrice = this.changePrice.bind(this);
	}

	dynamicChangeState(newName) {
		this.setState((prevState) => ({
			...prevState,
			dynamicSearch: newName
		}))
	}

	searchChangeState() {
		var carsList = this.state.cars.filter((car) => car.name.includes(this.state.dynamicSearch));
		this.setState((prevState) => ({
			...prevState,
			displayedCars: carsList
		}))
	}

	deleteItem(id) {
		var carsList = this.state.cars.filter(car => (car.id !== id));
		var displayedCarsList = this.state.displayedCars.filter(car => (car.id !== id));
		this.setState((prevState) => ({
			...prevState,
			cars: carsList,
			displayedCars: displayedCarsList
		}))
	}

	changePrice(id, newPrice) {
		var allCars = this.state.cars;
		allCars.forEach((car) => {
			if (car.id === id) {
				car.pricePerDay = newPrice;
			}
		});
		var allDisplayedCars = allCars.filter((car) => car.name.includes(this.state.dynamicSearch));
		this.setState((prevState) => ({
			...prevState,
			cars: allCars,
			displayedCars: allDisplayedCars
		}))
	}

	render() {
		return (
			<div>
				<div>
					<label className="labelS" style={{ margin: '20px 25px 20px 50px' }}>Type car name: </label>
					<input className="inputS" style={{ width: '20%' }} onChange={(e) => this.dynamicChangeState(e.target.value)} />
					<button className="buttonS" style={{ margin: '0px 0px 0px 10px', width: '10%' }} onClick={this.searchChangeState}>Search</button>
				</div>
				{this.state.displayedCars.map(car => <CarsListItem key={car.id} car={car} isEdited={false} deleteItem={this.deleteItem} changePrice={this.changePrice} />)}
			</div>
		);
	}
}