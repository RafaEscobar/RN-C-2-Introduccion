import React, { useState } from 'react'
import { Text, View, Button } from 'react-native';

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
        <Button 
            title='+'
            onPress={ () => setConteo(conteo+1) }
        
        />
    </View>
  )
}
