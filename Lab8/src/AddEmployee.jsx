import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function AddEmployee(props) {
	const [isSaving, setIsSaving] = useState(false);
	useEffect(() => { }, [isSaving]);

	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [company, setCompany] = useState("");
	const [email, setEmail] = useState("");

	function AddNewEmployee() {
		let n = name, a = age, iA = isActive, c = company, e = email;
		setIsSaving(true);
		let url = "http://localhost:3004/employees";
		let requestOptions = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: n,
				age: a,
				isActive: iA,
				company: c,
				email: e
			})
		};
		fetch(url, requestOptions)
			.then(() => setIsSaving(false))
			.then(() => props.reloading(true));
	}

	return (
		<div>
			{
				isSaving ?
					<label>Saving...</label> :
					<div style={{ display: "inline-block" }}>
						<div style={{ display: "flex", maxWidth: "350px" }}>
							<div style={{ width: "100px" }}>Name:</div>
							<input onInput={e => setName(e.target.value)} type="text" style={{ width: "250px" }} />
						</div>
						<div style={{ display: "flex", width: "350px" }}>
							<div style={{ width: "100px" }}>Age:</div>
							<input onInput={e => setAge(e.target.value)} type="number" min="15" max="99" style={{ width: "250px" }} />
						</div>
						<div style={{ display: "flex", width: "350px" }}>
							<div style={{ width: "100px" }}>Is active:</div>
							<input onChange={e => setIsActive(e.target.checked)} type="checkbox" />
						</div>
						<div style={{ display: "flex", width: "350px" }}>
							<div style={{ width: "100px" }}>Company:</div>
							<input onInput={e => setCompany(e.target.value)} type="text" style={{ width: "250px" }} />
						</div>
						<div style={{ display: "flex", width: "350px" }}>
							<div style={{ width: "100px" }}>Email:</div>
							<input onInput={e => setEmail(e.target.value)} type="text" style={{ width: "250px" }} />
						</div>
						<br />
						<div style={{ display: "flex", width: "100px", marginLeft: "250px" }}>
							<button onClick={() => AddNewEmployee()} style={{ width: "50px" }}>Save</button>
							<Link to="/employees" style={{ width: "50px" }}><button>Cancel</button></Link>
						</div>
					</div>
			}
		</div>
	);
}

export default AddEmployee;