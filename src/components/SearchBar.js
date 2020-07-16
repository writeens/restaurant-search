import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
	const { onTermChange, term, onTermSubmit } = props;
	return (
		<View style={styles.backgroundStyle}>
			<Feather 
				name="search" 
				style={styles.iconStyle}
			/>
			<TextInput 
				placeholder="Search"
				style={styles.inputStyle}
				value={term}
				onChangeText={onTermChange}
				autoCapitalize='none'
				autoCorrect={false}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle:{
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius:5,
		marginHorizontal:15,
		flexDirection:'row',
		marginTop: 10,
		marginBottom: 10
	},
	inputStyle: {
		fontSize:18,
		flex: 1
	},
	iconStyle: {
		fontSize:35,
		alignSelf:'center',
		marginHorizontal:15
	}
});

export default SearchBar;