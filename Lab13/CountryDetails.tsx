import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

const CountryDetails = ({ route, navigation }) => {
	const { item } = route.params;
	useEffect(() => {
		navigation.setOptions({ title: `${item.name}` });
	});
	return (
		<ScrollView>
			<View style={styles.detail}>
				<Text style={styles.detailText}>Subregion: {item.subregion}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.detailText}>Capital: {item.capital}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.detailText}>Area: {item.area}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.detailText}>Population: {item.population}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.detailText}>Demonym: {item.demonym}</Text>
			</View>
		</ScrollView>
	);
}

export default CountryDetails;