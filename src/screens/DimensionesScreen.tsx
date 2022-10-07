import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();

  return (
    <View>
        <View style={ styles.container }>
            <View style={ {
            ...styles.box1, 
            width: width * 0.50,
            }} />
            <View style={ styles.box2 } />
        </View>
        <Text style={styles.tag_dimensions}>W: {width} | H: {height} </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    
    container: {
        backgroundColor: 'red',
        height: '50%',
    },
    box1: {
        backgroundColor: 'blue',
        height: '30%'
    },
    box2: {
        backgroundColor: 'yelow',
    },
    tag_dimensions:{
        fontSize:20,
        color: 'black',
        textAlign: 'center',
    }

});