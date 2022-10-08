import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
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
    /*
    FLEX: 1, hace que este componente abarque todo el espacio sobrante, respetando el espacio de los otros
    componentes
    */
    flex: 1,
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
