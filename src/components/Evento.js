import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

class Evento extends Component {
    constructor(props){
        super(props);
        this.state = {
            texto: ''
        }
    }

    alterarTexto = (texto) => {
        this.setState({texto});
    }

    render() {
        return(
            <View>
                <Text>{this.state.texto}</Text>
                <TextInput  onChangeText={this.alterarTexto}></TextInput>
            </View>
        );
    }
}

export default Evento;