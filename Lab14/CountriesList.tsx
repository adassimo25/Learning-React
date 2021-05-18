import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Text, Image, TextInput, RefreshControl, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
// @refresh reset

const CountriesList = ({ navigation }) => {
	const [isLoading, setLoading] = useState(true);
	const [countries, setCountries] = useState([]);
	const [lastPattern, setLastPattern] = useState('');

	useEffect(() => {
		navigation.addListener('focus', () => rotateBack());
		getAllCountries();
	}, []);

	const onChangeInputText = (text) => {
		if (text.length >= 3 || (lastPattern.length === 3 && text.length === 2))
			getCountries(text);
	}

	const getCountries = (name) => {
		setLoading(true);
		setCountries([]);
		fadeInAnim.setValue(0);
		name.length >= 3 ? getCountriesByName(name) : getAllCountries();
	}

	const getCountriesByName = (name) => {
		setLastPattern(name);
		fetch(`https://restcountries.eu/rest/v2/name/${name}`)
			.then((response) => response.json())
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.then(() => setLoading(false))
			.finally(() => fadeIn());
	}

	const getAllCountries = () => {
		setLastPattern('');
		fetch('https://restcountries.eu/rest/v2/all')
			.then((response) => response.json())
			.then((json) => setCountries(json))
			.catch((error) => console.error(error))
			.then(() => setLoading(false))
			.finally(() => fadeIn());
	}

	const fadeInAnim = useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
		Animated.timing(fadeInAnim, {
			useNativeDriver: true,
			toValue: 1,
			duration: 1000
		}).start();
	};

	const rotateAnim = useRef(new Animated.Value(0)).current;

	const rotate = (item) => {
		Animated.timing(rotateAnim, {
			useNativeDriver: true,
			toValue: 1,
			duration: 1000
		}).start(() => navigation.navigate('Details', { item }));
	};

	const rotateY = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '90deg']
	})

	const rotateBack = () => {
		Animated.timing(rotateAnim, {
			useNativeDriver: true,
			toValue: 0,
			duration: 1000
		}).start();
	};

	const renderListItem = ({ item }) => (
		<TouchableOpacity style={styles.item} onPress={() => rotate(item)}>
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
		<Animated.View style={[styles.container, { transform: [{ rotateY: rotateY }] }]}>
			<TextInput style={styles.searchInput} placeholder='Type country name (at least 3 characters)...' onChangeText={text => onChangeInputText(text)} />
			{isLoading ? <Text>Loading...</Text> :
				<View>
					<Text>Found {countries.length > 0 ? countries.length : 0} countries</Text>
					<Animated.View style={{ opacity: fadeInAnim }}>
						<FlatList
							data={countries.length > 0 ? countries.slice(0, countries.length) : null}
							renderItem={renderListItem}
							keyExtractor={item => item.name}
							refreshControl={<RefreshControl onRefresh={() => getCountries(lastPattern)} refreshing={isLoading} />}
						/>
					</Animated.View>
				</View>}
		</Animated.View>
	);
}

export default CountriesList;