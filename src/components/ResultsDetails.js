import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

const ResultsDetails = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: result.image_url}} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.name} >{result.rating} Starts, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  img: {
    height: 100,
    width: 250,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
    width: 250,
  }
})

export default ResultsDetails