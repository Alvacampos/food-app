import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return(
    <View style={styles.background}>
      <Feather style={styles.icon} name="search"/>
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle} 
        placeholder="Search" 
        onChangeText={onTermChange}
        value={term}
        onEndEditing={onTermSubmit}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 5
  },
  icon: {
    margin: 10,
    fontSize: 25,
    alignSelf: "center",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  }
})

export default SearchBar;
