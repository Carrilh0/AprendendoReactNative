import React from 'react';
import {View, Text} from 'react-native';
import Padrao from '../estilo/padrao'


const Teste = (numero) => {
    
    return numero % 2 == 0 ? <Text>Par</Text> : <Text>Impar</Text>;
}

const ParImpar = (props) => {
    
    return (
        <View>
            {
                Teste(props.numero)
            }
        </View>
    );
}

export default ParImpar;