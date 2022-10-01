import React, { useState } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';

export const ContadorScreen = () => {

    const [conteo, setConteo] = useState(10);

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
    }}>
        <Text style={{
            fontSize: 30,
            color: 'black',
            textAlign: 'center',
        }}>Contador: {conteo}</Text>
        {/* <Button 
            title='+'
            onPress={ () => setConteo(conteo+1) } 
        /> */}

        <TouchableOpacity
            onPress={ () => setConteo( conteo + 1 ) }
        >
            <View style={{
                backgroundColor: 'aqua',
                borderRadius: 100,
            }}>
                <Text style={{
                    fontSize: 20,
                    color: 'black',
                    textAlign: 'center',
                }}>+1</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}
