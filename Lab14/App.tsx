import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={CountriesList}
					options={{ title: 'Home' }}
				/>
				<Stack.Screen
					name="Details"
					component={CountryDetails}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;