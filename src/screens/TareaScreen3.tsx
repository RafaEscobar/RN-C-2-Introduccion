import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen3 = () => {
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
    justifyContent: 'center',
   },
   boxMorada: {
    width: 100,
    height: 100,
    // Se envia pegado al lado derecho
    alignSelf: 'flex-end',
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
   },
   // Se queda pegado del lado izquierdo
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
    // Se queda al centro -horizontalmente-
    alignSelf: 'center',
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
   },

});
