import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen5 = () => {
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
    // Cambiamos a disposicion de filas
    flexDirection: 'row',
    // Espaciado de elementos -pegados a las costados-
    justifyContent: 'space-between',

   },
   boxMorada: {
    width: 100,
    // Eliminamos el largo para que adopte por defecto todo el largo posible
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
   },
   boxNaranja: {
    width: 100,
    // height: 100, 
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
   },
   boxAzul: {
    width: 100,
    // height: 100, 
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
   },

});
