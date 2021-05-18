import React, { useState } from 'react';
import { IsZipCodeCorrect, IsFieldEmpty } from './CorrectnessFunctions';

export default function AddressStep(props) {
	const [deliveryStreet, setDeliveryStreet] = useState(props.data.deliveryStreet);
	const [deliveryZipCode, setDeliveryZipCode] = useState(props.data.deliveryZipCode);
	const [deliveryCity, setDeliveryCity] = useState(props.data.deliveryCity);
	const [invoiceStreet, setInvoiceStreet] = useState(props.data.invoiceStreet);
	const [invoiceZipCode, setInvoiceZipCode] = useState(props.data.invoiceZipCode);
	const [invoiceCity, setInvoiceCity] = useState(props.data.invoiceCity);

	const [deliveryStreetTooltip, setDeliveryStreetTooltip] = useState(!IsFieldEmpty(props.data.deliveryStreet));
	const [deliveryZipCodeTooltip, setDeliveryZipCodeTooltip] = useState(IsZipCodeCorrect(props.data.deliveryZipCode));
	const [deliveryCityTooltip, setDeliveryCityTooltip] = useState(!IsFieldEmpty(props.data.deliveryCity));
	const [invoiceStreetTooltip, setInvoiceStreetTooltip] = useState(!IsFieldEmpty(props.data.invoiceStreet));
	const [invoiceZipCodeTooltip, setInvoiceZipCodeTooltip] = useState(IsZipCodeCorrect(props.data.invoiceZipCode));
	const [invoiceCityTooltip, setInvoiceCityTooltip] = useState(!IsFieldEmpty(props.data.invoiceCity));

	const [checkboxState, setCheckboxState] = useState(props.data.sameAddresses);

	function IsAllCorrect() {
		return (!IsFieldEmpty(deliveryStreet) && !IsFieldEmpty(deliveryCity) && IsZipCodeCorrect(deliveryZipCode)
			&& !IsFieldEmpty(invoiceStreet) && !IsFieldEmpty(invoiceCity) && IsZipCodeCorrect(invoiceZipCode));
	}

	return (
		<div>
			<h3>Address Step</h3>

			<h4>Delivery address</h4>
			<form>
				<label>Street:</label><br />
				<input type="text" placeholder="Street" value={deliveryStreet} onChange={e => {
					setDeliveryStreet(e.target.value);
					props.changeData("deliveryStreet", e.target.value);
					if (checkboxState) {
						setInvoiceStreet(e.target.value);
						props.changeData("invoiceStreet", e.target.value);
					}
					if (!deliveryStreetTooltip)
						setDeliveryStreetTooltip(true);
				}}></input><br />

				{(IsFieldEmpty(deliveryStreet) && deliveryStreetTooltip) ?
					<div><span style={{ color: 'red' }}>Delivery street cannot be empty!</span><br /></div> :
					''}

				<label>Zip code:</label><br />
				<input type="text" placeholder="Zip-Code" value={deliveryZipCode} onChange={e => {
					setDeliveryZipCode(e.target.value);
					props.changeData("deliveryZipCode", e.target.value);
					if (checkboxState) {
						setInvoiceZipCode(e.target.value);
						props.changeData("invoiceZipCode", e.target.value);
					}
					if (!deliveryZipCodeTooltip)
						setDeliveryZipCodeTooltip(true);
				}}></input><br />

				{(!IsZipCodeCorrect(deliveryZipCode) && deliveryZipCodeTooltip) ?
					<div><span style={{ color: 'red' }}>Incorrect delivery zip code!</span><br /></div> :
					''}

				<label>City:</label><br />
				<input type="text" placeholder="City" value={deliveryCity} onChange={e => {
					setDeliveryCity(e.target.value);
					props.changeData("deliveryCity", e.target.value);
					if (checkboxState) {
						setInvoiceCity(e.target.value);
						props.changeData("invoiceCity", e.target.value);
					}
					if (!deliveryCityTooltip)
						setDeliveryCityTooltip(true);
				}}></input><br />

				{(IsFieldEmpty(deliveryCity) && deliveryCityTooltip) ?
					<div><span style={{ color: 'red' }}>Delivery city cannot be empty!</span><br /></div> :
					''}
			</form><br />

			<h4>Invoice address</h4>
			<input checked={checkboxState} name="sameAddresses" type="checkbox" onClick={e => {
				setCheckboxState(!checkboxState);
				props.changeData("sameAddresses", !checkboxState);
				setInvoiceStreet(deliveryStreet);
				props.changeData("invoiceStreet", deliveryStreet);
				setInvoiceZipCode(deliveryZipCode);
				props.changeData("invoiceZipCode", deliveryZipCode);
				setInvoiceCity(deliveryCity);
				props.changeData("invoiceCity", deliveryCity);
				if (!deliveryStreetTooltip)
					setDeliveryStreetTooltip(true);
				if (!deliveryZipCodeTooltip)
					setDeliveryZipCodeTooltip(true);
				if (!deliveryCityTooltip)
					setDeliveryCityTooltip(true);
				if (!invoiceStreetTooltip)
					setInvoiceStreetTooltip(true);
				if (!invoiceZipCodeTooltip)
					setInvoiceZipCodeTooltip(true);
				if (!invoiceCityTooltip)
					setInvoiceCityTooltip(true);
			}} /><label>the same as delivery address</label><br />
			<form>
				<label>Street:</label><br />
				<input disabled={checkboxState} type="text" placeholder="Street" value={invoiceStreet} onChange={e => {
					setInvoiceStreet(e.target.value);
					props.changeData("invoiceStreet", e.target.value);
					if (!invoiceStreetTooltip)
						setInvoiceStreetTooltip(true);
				}}></input><br />

				{(IsFieldEmpty(invoiceStreet) && invoiceStreetTooltip) ?
					<div><span style={{ color: 'red' }}>Invoice street cannot be empty!</span><br /></div> :
					''}

				<label>Zip code:</label><br />
				<input disabled={checkboxState} type="text" placeholder="Zip-Code" value={invoiceZipCode} onChange={e => {
					setInvoiceZipCode(e.target.value);
					props.changeData("invoiceZipCode", e.target.value);
					if (!invoiceZipCodeTooltip)
						setInvoiceZipCodeTooltip(true);
				}}></input><br />

				{(!IsZipCodeCorrect(invoiceZipCode) && invoiceZipCodeTooltip) ?
					<div><span style={{ color: 'red' }}>Incorrect invoice zip code!</span><br /></div> :
					''}

				<label>City:</label><br />
				<input disabled={checkboxState} type="text" placeholder="City" value={invoiceCity} onChange={e => {
					setInvoiceCity(e.target.value);
					props.changeData("invoiceCity", e.target.value);
					if (!invoiceCityTooltip)
						setInvoiceCityTooltip(true);
				}}></input><br />

				{(IsFieldEmpty(invoiceCity) && invoiceCityTooltip) ?
					<div><span style={{ color: 'red' }}>Invoice city cannot be empty!</span><br /></div> :
					''}
			</form><br />

			<button onClick={e => props.changeStep(-1)}>Back to Name Step</button>
			<button disabled={!IsAllCorrect()} onClick={e => props.changeStep(1)}>Summary Step</button>
		</div>
	)
}