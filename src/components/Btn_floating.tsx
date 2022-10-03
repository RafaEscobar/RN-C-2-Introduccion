import React from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';


// PASO #1 --> Generamos nuestra interfaz
interface Props{
    // Regla para la propiedad para el texto del btn
    title: string;
    // Regla para la propiedad que establece la posicion del btn, el signo (?) es para que esta propiedad sea opcionalmente pasada como parametro
    position?: 'left' | 'right'
    // Regla para la propiedad que llama al establecimiento del evento -onPress-, generado en otro lado
    onPress: () => void;

}

// PASO #2: Generamos la solicitud del prop (que puede contener mas de un valor), en este caso es: 'title, onPress y position' A su ves decimos que dicho parametro debe estar sujeto a las normativas de la interfaz -Props-
    // PASO #2.1: Desestructuramos las propiedades: title, onPress y position
    // PASO #2.2: Establecemos la posicion 'derecha(right)' como la posicion por defecto para un btn
export const Btn_floating = ({ title, onPress, position='right' }: Props) => {
  return (
    <TouchableOpacity
        // PASO #9: Creamos un array de estilos para poder establecer mas de una propiedad-estilo -->
        // Creamos un operador ternario el cual establece que: si la propiedad-parametro 'position' es igual a -left- se llame al estilo de -left-, de lo contraio al de -rigth-
        style = { [
            
            style.btn_location_end,
            (position === 'left') ? style.btn_left : style.btn_right,
        ] }
        // PASO #2.3: Hacemos mencion de la propiedad onPress para mandar a llamar aqui el evento contruido en el llamado a este componente
            onPress={ onPress }
        >
            <View style={ style.btn_view }>
                {/* PASO #3: Mandamos a llamar a la propiedad desestructurada: 'title', recibida como parametro */}
                <Text style={ style.btn_text }> { title } </Text>
            </View>
        </TouchableOpacity>
  )
}

const style = StyleSheet.create({
    // PASO #7: Generamos unn  unico estilo para la posicion al final de la pantalla
    btn_location_end: {
        position: 'absolute',
        bottom: 30,
    },
    // PASO #8: Generamos una propiedad de estilos para cada lado de la posicion del btn. derecha/izquierda
    btn_right: {
        right: 30
    },
    btn_left: {
        left: 30,
    },
    btn_view: {
        backgroundColor: 'aqua',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
    },
    btn_text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    }

});