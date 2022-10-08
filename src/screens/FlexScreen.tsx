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
        // justifyContent: 'flex-end',
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end',
    },
   box1:{
        // flex: 4,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'black',
        // width: 100,
        // height: 100,
   },
   box2:{
        // flex: 4,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'black',
        alignSelf: 'center'
        // width: 100,
        // height: 100,
   },
   box3:{
        // flex: 2,
        fontSize: 25,
        borderWidth: 2,
        borderColor: 'black',
        // width: 100,
        // height: 100,
   }
});