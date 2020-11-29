import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput style={styles.inputStyle} placeholder="Search" />
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 15,
		// backgroundColor: '#F0EEEE',
		backgroundColor: '#FFF',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center'
	},
	inputStyle: {
		flex: 1,
		fontSize: 18
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});

export default SearchBar;