import React from 'react'
import { Text, View } from 'react-native'

export const HelloWordScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'gray',
            justifyContent: 'center',
        }}>
        <Text style={{
            fontSize: 25,
            textAlign: 'center',
            color: 'white'
        }}>
              Hola soy Rafa!! I love me
        </Text>
        </View>
    )
}
