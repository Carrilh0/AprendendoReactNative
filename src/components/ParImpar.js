import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import Padrao from '../estilo/padrao'


const Teste = (props) => {
    return props.numero == 0 ? <Text>Insira um numero</Text> : props.numero % 2 == 0 ? <Text>Par</Text> : <Text>Impar</Text>;
}

class ParImpar extends Component{

    constructor(props){
        super(props);
        this.state = {
            numero: 0,
        }
    }

    alterarTexto = (numero) => {
        this.setState({numero})
    }

    render(){
    return (
        <View>
            {
                <Teste numero={this.state.numero}></Teste>
            }
            <TextInput style={Padrao.ex} numeric value={`${this.state.numero}`} keyboardType={'numeric'} onChangeText={this.alterarTexto}></TextInput>
        </View>
    );
    }
}

export default ParImpar;