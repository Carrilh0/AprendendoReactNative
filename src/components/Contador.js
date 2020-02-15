import React , {Component} from 'react';
import { View , Text, TouchableHighlight } from 'react-native';

class Contador extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            contador: props.numero
        }

    this.adicionar = this.adicionar.bind(this);
    }

    adicionar = () => {
        this.setState({contador: this.state.contador + 1});
    }

    zerar = () => {
        this.setState({contador: 0});

    }
    
    render() {
        return (
            <View>
                <Text>{this.state.contador}</Text>
                <TouchableHighlight onPress={this.adicionar} onLongPress={this.zerar}>
                <Text>Adcionar/Zerar</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Contador;