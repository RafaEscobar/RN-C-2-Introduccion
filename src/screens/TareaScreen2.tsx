import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen2 = () => {
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
    justifyContent: 'center'
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
    // Al quitar esta propiedad hacemos que el componente se alarge en todo lo ANCHO. (Pero solo este elemento lo hara)
    // width: 100,
    height: 100, 
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
   },

});
