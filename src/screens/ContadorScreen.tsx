import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export const ContadorScreen = () => {

    const [conteo, setConteo] = useState(10);

  return ( 
    <View style={ style.conainer }>
        <Text style={ style.etiqueta_con }>Contador: {conteo}</Text>
        {/* <Button 
            title='+'
            onPress={ () => setConteo(conteo+1) } 
        /> */}

        <TouchableOpacity
            onPress={ () => setConteo( conteo + 1 ) }
        >
            <View style={ style.btn }>
                <Text style={ style.btn_font }>+1</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}


const style = StyleSheet.create({
    conainer: {
        flex: 1,
        justifyContent: 'center',
    },
    etiqueta_con: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    btn: {
        backgroundColor: 'aqua',
        borderRadius: 100,
    },
    btn_font: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    }

})