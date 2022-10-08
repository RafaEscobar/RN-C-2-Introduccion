import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native';

export const TareaScreen4 = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View style={ styles.container }>
        <View  style={ styles.boxMorada } />
        {/* Top y left para centrar con precisión, con ayuda del useWindowDimensions() */}
          {/* top y left = ((el 50% exacto del width y height) - 50 unidades que toma la caja */}
        <View  style={{ 
          ...styles.boxNaranja,
          top: ((height*0.50)-50),
          left: ((width*0.50)-50),
          }} />
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
    // Posicion absoluta para posicionamiento en alguna esquina
    position: 'absolute',
    // lo mandamos pegado a la derecha
    right:0
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
    // Posicion absoluta para posicionamiento en alguna esquina
    position: 'absolute',
    // Lo mandamos pegado al fondo
    bottom: 0,
   },

});
