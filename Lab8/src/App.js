import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Employees from './Employees';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Redirect to="/employees" />
				</Route>
				<Route path="/employees">
					<Employees />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;