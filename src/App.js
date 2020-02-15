import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Simples from './components/Simples';
import ParImpar from './components/ParImpar';


class App extends Component {

    render() {
        return(
            
          <View style={styles.container}>
              <Simples nome="Vitor"/>
              <Text style={styles.f20}>Hello World</Text>
              <ParImpar numero={1}/>
          </View>
          
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    f20: {
        fontSize: 40
    }


});


export default App;