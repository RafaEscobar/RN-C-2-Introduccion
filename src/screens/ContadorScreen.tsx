import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Btn_floating } from '../components/Btn_floating';

export const ContadorScreen = () => {

    const [conteo, setConteo] = useState(10);

  return ( 
    <View style={ style.conainer }>
        <Text style={ style.etiqueta_con }>Contador: {conteo}</Text>

        {/* PASO #4: Mandamos a llamar al componente 'Btn_floating' */}
            {/* PASO #5: Le pasamos el valor de la propiedad 'title' solicitada como parte de la
                          solicitud de parametro en base a la interfaz -Props- */}
        <Btn_floating 
            title='+1'
            onPress= { () => setConteo(conteo+1) } 
        />
        {/* PASO #6: Generamos un nuevo llamado */}
            {/* BTN IZQUIERDO */}
        <Btn_floating 
            title='-1'
            onPress= { () => setConteo(conteo-1) } 
            position='left'
        />
        {/* <Button 
            title='+'
            onPress={ () => setConteo(conteo+1) } 
        /> */}

        {/* <TouchableOpacity
        style = { style.btn_locationL }
            onPress={ () => setConteo( conteo - 1 ) }
        >
            <View style={ style.btn_view }>
                <Text style={ style.btn_text }>-1</Text>
            </View>
        </TouchableOpacity> */}
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

    // btn: {
    //     backgroundColor: 'aqua',
    //     borderRadius: 100,
    // },
    // btn_font: {
    //     fontSize: 20,
    //     color: 'black',
    //     textAlign: 'center',
    // }

})