import React from 'react';
import NameStep from './NameStep.jsx';
import AddressStep from './AddressStep.jsx';
import SummaryStep from './SummaryStep.jsx';

export default class CustomerForm extends React.Component {
	constructor() {
		super();
		this.state = {
			activeStep: 0,
			firstName: '',
			lastName: '',
			email: '',
			deliveryStreet: '',
			deliveryZipCode: '',
			deliveryCity: '',
			sameAddresses: false,
			invoiceStreet: '',
			invoiceZipCode: '',
			invoiceCity: ''
		}
		this.changeStep = this.changeStep.bind(this);
		this.handleCustomerForm = this.handleCustomerForm.bind(this);
	}

	changeStep(val) {
		this.setState((prevState) => ({
			...prevState,
			activeStep: prevState.activeStep + val
		}))
	}

	handleCustomerForm(name, value) {
		this.setState(prevState => {
			return {
				...prevState,
				[name]: value
			}
		});
	}

	render() {
		return (
			<div>
				{ this.state.activeStep === 0 ?
					<NameStep changeStep={this.changeStep} changeData={this.handleCustomerForm} data={this.state} /> :
					this.state.activeStep === 1 ?
						<AddressStep changeStep={this.changeStep} changeData={this.handleCustomerForm} data={this.state} /> :
						<SummaryStep changeStep={this.changeStep} changeData={this.handleCustomerForm} data={this.state} />}
			</div >
		)
	}
}