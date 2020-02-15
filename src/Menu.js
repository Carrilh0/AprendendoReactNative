import React from 'react'; 
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import Contador from './components/Contador';
import Evento from './components/Evento';
import ListaFlex from './components/ListaFlex';
import Flex from './components/Flex';


const Menu = createDrawerNavigator({
    
    Flex: {
        screen: Flex
    },

    ListaFlex: {
        screen: ListaFlex
    },

    Evento:{
        screen: Evento
    },
    
    Contador:{
        screen: () => <Contador numero={20}/>,
        navigationOptions:{
            title: 'Contador'
        }
    },
    
    Simples:{
        screen: () => <Simples nome="Vitor Carrilho"/>,
        navigationOptions:{
            title: 'Simples'
        }
    },

    ParImpar: {
        screen: () => <ParImpar numero={4}/>,
        navigationOptions: {
            title: 'Par ou Impar',
        }
    }
}, {drawerWidth: 200 });

const AppContainer = createAppContainer(Menu);


export default AppContainer;