import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native';

export const PositionRScreen = () => {

    const { width, height } = useWindowDimensions();

  return (
    <View style={ styles.container }>
        <View style={ styles.box1 } />
        <View style={{ 
            ...styles.box2,
            top: height-100,
            left: width-100,
            }} />
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'aqua',
    // justifyContent: 'center',
    // alignItems: 'center'
   },
   box1: {
    width: 100, 
    height: 100,
    backgroundColor: 'blue',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0
   },
   box2: {
    width: 100, 
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',

   }
});