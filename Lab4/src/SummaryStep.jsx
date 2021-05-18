import React from 'react';

export default function SummaryStep(props) {
	return (
		<div>
			<h3>Summary Step</h3>
			<form>
				<h5>Personal data</h5>
				<label>First name: {props.data.firstName}</label><br />
				<label>Last name: {props.data.lastName}</label><br />
				<label>Email: {props.data.email}</label><br />
				<h5>Delivery address</h5>
				<label>Street: {props.data.deliveryStreet}</label><br />
				<label>Zip code: {props.data.deliveryZipCode}</label><br />
				<label>City: {props.data.deliveryCity}</label><br />
				<h5>Invoice address</h5>
				<label>Street: {props.data.invoiceStreet}</label><br />
				<label>Zip code: {props.data.invoiceZipCode}</label><br />
				<label>City: {props.data.invoiceCity}</label><br />
			</form>
			<br />
			<button onClick={e => props.changeStep(-2)}>Back to Name Step</button>
			<button onClick={e => props.changeStep(-1)}>Back to Address Step</button>
		</div>
	)
}