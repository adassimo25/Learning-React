import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: '#00bfff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 24,
	},
	detail: {
		backgroundColor: '#fffb00',
		padding: 15,
		marginVertical: 6,
		marginHorizontal: 12,
	},
	detailText: {
		fontSize: 18,
	},
	flag: {
		height: 64,
		width: 64
	},
	searchInput: {
		backgroundColor: 'white',
		borderColor: 'gray',
		borderWidth: 1,
		fontSize: 16
	}
});