import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native';

export const TareaScreen4 = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View style={ styles.container }>
        <View  style={ styles.boxMorada } />
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
    position: 'absolute',
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
    position: 'absolute',
    bottom: 0,
   },

});
