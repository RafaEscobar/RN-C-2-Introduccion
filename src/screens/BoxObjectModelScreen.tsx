import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    // View general de la vista
    <View style={ styles.container }>
        {/* Titulo */}
        <Text style={ styles.title1 }> Box Object Model </Text>
        <Text style={ styles.title2 }> Box Object Model </Text>
    </View>
  )
}

const styles = StyleSheet.create({

    // Para el -View- de la vista
    container: {
        flex: 1,
        backgroundColor: 'red',
    },

    // Para el -titulo. de la vista
   title1: {
    // Ancho del componente
    width: 300,
    // Alto del componente
    height: 200,
    // Espaciado interno --> NO EMPUJA HACIA ADENTRO ASI <--
    padding: 10,
    // Espaciado externo --> NO EMPUJA HACIA ADENTRO ASI <-- 
    margin: 20,
    // Borde a todos lados --> NO EMPUJA HACIA ADENTRO ASI <--
    borderWidth: 5,
    ////////////////////////////////////////////////////////////
    fontSize: 20,
    backgroundColor: 'yellow',
    color: 'black',
   },
   title2: {
    width: 200,
    height: 50,
    fontSize: 20,
    backgroundColor: 'aqua',
    color: 'black',
   }
});