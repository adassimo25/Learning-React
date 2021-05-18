import React, { useState } from 'react';
import { IsEmailCorrect, IsFieldEmpty } from './CorrectnessFunctions';

export default function NameStep(props) {
	const [firstName, setFirstName] = useState(props.data.firstName);
	const [lastName, setLastName] = useState(props.data.lastName);
	const [email, setEmail] = useState(props.data.email);

	const [firstNameTooltip, setFirstNameTooltip] = useState(!IsFieldEmpty(props.data.firstName));
	const [lastNameTooltip, setLastNameTooltip] = useState(!IsFieldEmpty(props.data.lastName));
	const [emailTooltip, setEmailTooltip] = useState(IsEmailCorrect(props.data.email));

	function IsAllCorrect() {
		return (!IsFieldEmpty(firstName) && !IsFieldEmpty(lastName) && IsEmailCorrect(email));
	}

	return (
		<div>
			<h3>Name Step</h3>
			<form>
				<label>First name:</label><br />
				<input type="text" placeholder="First name" value={firstName} onChange={e => {
					setFirstName(e.target.value);
					props.changeData("firstName", e.target.value);
					if (!firstNameTooltip)
						setFirstNameTooltip(true);
				}}></input><br />

				{(IsFieldEmpty(firstName) && firstNameTooltip) ?
					<div><span style={{ color: 'red' }}>First name cannot be empty!</span><br /></div> :
					''}

				<label>Last name:</label><br />
				<input type="text" placeholder="Last name" value={lastName} onChange={e => {
					setLastName(e.target.value);
					props.changeData("lastName", e.target.value);
					if (!lastNameTooltip)
						setLastNameTooltip(true);
				}}></input><br />

				{(IsFieldEmpty(lastName) && lastNameTooltip) ?
					<div><span style={{ color: 'red' }}>Last name cannot be empty!</span><br /></div> :
					''}

				<label>Email:</label><br />
				<input type="text" placeholder="Email" value={email} onChange={e => {
					setEmail(e.target.value);
					props.changeData("email", e.target.value);
					if (!emailTooltip)
						setEmailTooltip(true);
				}}></input><br />

				{(!IsEmailCorrect(email) && emailTooltip) ?
					<div><span style={{ color: 'red' }}>Incorrect email!</span><br /></div> :
					''}
			</form>
			<br />
			<button disabled={!IsAllCorrect()} onClick={e => props.changeStep(1)}>Address Step</button>
		</div>
	)
}