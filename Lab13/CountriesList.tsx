import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text, Image, TextInput, RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

const CountriesList = ({ navigation }) => {
	const [isLoading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);
	const [lastPattern, setLastPattern] = useState('');

	useEffect(() => {
		getAllCountries();
	}, []);

	const getCountries = (name) => {
		setLoading(true);
		setCountries([]);
		if (name.length >= 3) {
			getCountriesByName(name);
			return;
		}
		getAllCountries();
	}

	const getCountriesByName = (name) => {
		setLastPattern(name);
		fetch(`https://restcountries.eu/rest/v2/name/${name}`)
			.then((response) => response.json())
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}

	const getAllCountries = () => {
		setLastPattern('');
		fetch('https://restcountries.eu/rest/v2/all')
			.then((response) => response.json())
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}

	const onChangeInputText = (text) => {
		if (text.length >= 3 || (lastPattern.length === 3 && text.length === 2))
			getCountries(text);
	}

	const renderListItem = ({ item }) => (
		<TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Details', { item })}>
			<Text style={styles.title}>{item.name}</Text>
			<Image
				style={styles.flag}
				source={{
					uri: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
				}}
			/>
		</TouchableOpacity>
	);

	return (
		<SafeAreaView style={styles.container}>
			<TextInput style={styles.searchInput} placeholder='Type country name (at least 3 characters)...' onChangeText={text => onChangeInputText(text)} />
			{ isLoading ? <Text>Loading...</Text> :
				<View>
					<Text>Found {countries.length > 0 ? countries.length : 0} countries</Text>
					<FlatList
						data={countries.length > 0 ? countries.slice(0, countries.length) : null}
						renderItem={renderListItem}
						keyExtractor={item => item.name}
						refreshControl={<RefreshControl onRefresh={() => getCountries(lastPattern)} refreshing={isLoading} />}
					/>
				</View>}
		</SafeAreaView>
	);
}

export default CountriesList;