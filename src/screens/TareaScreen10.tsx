import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen10 = () => {
  return (
    <View style={ styles.container }>
        <View  style={ styles.boxMorada } />
        <View  style={ styles.boxNaranja } />
        <View  style={ styles.boxAzul } />
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#28425B',
   },
   boxMorada: {
    width: 100,
    height: 100, 
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
   },
   boxNaranja: {
    width: 100,
    height: 100, 
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
   },
   boxAzul: {
    width: 100,
    height: 100, 
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
   },

});
