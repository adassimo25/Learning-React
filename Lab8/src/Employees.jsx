import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AddEmployee from './AddEmployee';

function Employees() {
	const match = useRouteMatch();
	const [isLoading, setIsLoading] = useState(true);
	const [employees, setEmployees] = useState([]);
	const [deletedID, setDeletedID] = useState("");

	useEffect(() => {
		ReloadEmployees();
	}, [isLoading, employees, deletedID]);

	function ReloadEmployees() {
		let url = "http://localhost:3004/employees";
		let promise = fetch(url);
		promise.then(response => response.json())
			.then(json => setEmployees(json))
			.then(() => setIsLoading(false));
	}

	function DeleteEmployee(id) {
		setDeletedID(id);
		var url = `http://localhost:3004/employees/${id}`;
		var requestOptions = {
			method: 'DELETE',
			redirect: 'follow'
		};
		fetch(url, requestOptions)
			.then(response => response.text())
			.catch(error => console.log('error', error))
			.then(() => setDeletedID(""))
			.then(() => setIsLoading(true));
	}

	return (
		<div>
			<h2>Employees:</h2>
			{
				isLoading ?
					<label>Loading...</label> :
					<div>
						{
							employees.map(e => {
								return (deletedID !== e.id ?
									<div key={e.id} style={{ display: "flex" }}>
										<div style={{ width: "250px", marginLeft: "100px" }}>{e.name}</div>
										<button onClick={() => DeleteEmployee(e.id)}>delete</button>
									</div> :
									<div key={e.id} style={{ width: "250px", marginLeft: "100px" }}>Deleting...</div>);
							})
						}
						<br />
						<Link to={`${match.url}/addemployee`}><button>Add employee</button></Link>
					</div>
			}
			<br />
			<Switch>
				<Route path={`${match.url}/addemployee`}>
					<br />
					<AddEmployee reloading={setIsLoading} />
				</Route>
			</Switch>
		</div>
	);
}

export default Employees;