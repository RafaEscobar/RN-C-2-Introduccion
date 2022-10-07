import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={ styles.container } >
        <Text style={ styles.box1 } >Caja 1</Text>
        <Text style={ styles.box2 } >Caja 2</Text>
        <Text style={ styles.box3 } >Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aqua',
        flexDirection: 'row'
    },
   box1:{
        flex: 4,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'black',
   },
   box2:{
        flex: 4,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'black',
   },
   box3:{
        flex: 2,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'black',
   }
});