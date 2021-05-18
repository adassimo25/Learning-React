import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './styles';
// @refresh reset

const CountryDetails = ({ route, navigation }) => {
	const { item } = route.params;

	useEffect(() => {
		navigation.setOptions({ title: `${item.name}` });
		navigation.addListener('beforeRemove', rotateBack);
		rotate();
	});

	const rotateAnim = useRef(new Animated.Value(0)).current;

	const rotate = () => {
		Animated.timing(rotateAnim, {
			useNativeDriver: true,
			toValue: 1,
			duration: 1000
		}).start();
	};

	const rotateY = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['270deg', '360deg']
	})

	const rotateBack = (e) => {
		e.preventDefault();
		Animated.timing(rotateAnim, {
			useNativeDriver: true,
			toValue: 0,
			duration: 1000
		}).start(() => navigation.dispatch(e.data.action));
	};

	return (
		<Animated.View style={{ transform: [{ rotateY: rotateY }] }}>
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
		</Animated.View>
	);
}

export default CountryDetails;