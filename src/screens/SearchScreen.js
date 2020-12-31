import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		// price == '£' || '££' || '£££'
		return results.filter(results => {
			return results.price === price;
		})
	}

	return (
		<>
			<SearchBar 
				term={term} 
				onTermChange={setTerm} 
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<Text>We have found {results.length} results</Text>
			<ResultsList 
				results={filterResultsByPrice('£')}
				title="Cost Effective"
				navigation={navigation}
			/>
			<ResultsList 
				results={filterResultsByPrice('££')}
				title="Bit Pricier"
				navigation={navigation}
			/>
			<ResultsList 
				results={filterResultsByPrice('£££')}
				title="Big Spender"
				navigation={navigation}
			/>
		</>
	);
};

const styles = StyleSheet.create({
});

export default SearchScreen;