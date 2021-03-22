import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'
import ResultsDetails from './ResultsDetails'

const ResultsList = ({title, results, navigation}) => {
  if(!results.length) {
    return (
      <View>
        <Text>No details available</Text>
      </View>
    )
  }
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
          showsHorizontalScrollIndicator={false}
          horizontal
          data={results}
          keyExtractor={result => result.id }
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('ResultsShowScreen', {id: item.id})}>
                <ResultsDetails key={item.id} result={item}/>
              </TouchableOpacity>
            )
          }}
        />  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  }
})

export default withNavigation(ResultsList)