import React from 'react'
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import {getResultDetails} from '../hooks/useResults'

const ResultsShowScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const result = getResultDetails(id)

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.img} source={{uri: item}} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 220
  }
})

export default ResultsShowScreen