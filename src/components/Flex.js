import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },

    norte:{
        flex: 1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center'
    },

    centro:{
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#f2f9bd',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

    sul:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd'
    },

    circulo:{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#f47f61'
    }
});

const Circulo = (props) => {
    return( <View style={styles.circulo}></View> );
}

const Flex = () => {
    return ( 
        <View style={styles.container}>
            
            <View style={styles.norte}>
                <Circulo/>
            </View>
            
            <View style={styles.centro}>
                <Circulo/>
                <Circulo/>
                <Circulo/>
            </View>
            
            <View style={styles.sul}>
                <Circulo/>
            </View>

    </View>
    );
}

export default Flex;