import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import {getGeneralSearch} from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = getGeneralSearch(term);
  
  const termSetter = (newLocation) => {
    setTerm(newLocation)
  }

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }
console.log(errorMessage)
  return(    
    <>
      <SearchBar 
        term={term} 
        onTermChange={(newTerm) => {termSetter(newTerm)}}
        onTermSubmit={searchApi} />
      { errorMessage ? <Text>Something went wrong</Text> : <ScrollView>
        {filterResultsByPrice('$').length ? <ResultsList results={filterResultsByPrice('$')} title = "Cost Effective" /> : null}
        {filterResultsByPrice('$$').length ? <ResultsList results={filterResultsByPrice('$$')} title = "Big Pricer" /> : null}
        {filterResultsByPrice('$$$').length ? <ResultsList results={filterResultsByPrice('$$$')} title = "Big Spender" /> : null}
        {filterResultsByPrice('$$$$').length ? <ResultsList results={filterResultsByPrice('$$$$')} title = "God Tier" /> : null}        
      </ScrollView>}
      
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen;