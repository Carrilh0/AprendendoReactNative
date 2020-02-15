import React , {Component} from 'react';
import { View, Text, FlatList} from 'react-native';

const alunos = [
    {id:1, nome: "Vitor", nota: 10},
    {id:2, nome: "Joao", nota: 7},
    {id:3, nome: "Eric", nota: 9},
    {id:4, nome: "Fagner", nota: 8},
    {id:5, nome: "Matheus", nota: 7},
    {id:6, nome: "Sabrina", nota: 7},
    {id:7, nome: "Abner", nota: 10},
    {id:8, nome: "Fabio", nota: 6},
    {id:9, nome: "Marcia", nota: 7},
    {id:10, nome: "Josie", nota: 9},
    {id:11, nome: "Sabrina", nota: 9},
    {id:12, nome: "Juliana", nota: 7},
    {id:13, nome: "Paulo", nota: 8},
    {id:14, nome: "Jefferson", nota: 8},
    {id:15, nome: "Gabrielle", nota: 7},
    {id:16, nome: "Pamela", nota: 10},
    {id:17, nome: "Julia", nota: 7},
    {id:18, nome: "Miguel", nota: 9},
    {id:18, nome: "Laila", nota: 10},
    {id:19, nome: "Vitor", nota: 9},
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    
   //FLEX 
    flexDirection: 'row', // Direção do main axis
    alignItems: 'center', // Vertical
    justifyContent: 'space-between', // Horizontal
};

const Aluno = (props) => {
    return (
        <View style={itemEstilo}>
            <Text>Nome: {props.nome}</Text>
            <Text style={{fontWeight: 'bold'}}>Notas: {props.nota}</Text>
        </View>
    );
};

const ListaFlex = props => {
    const renderItem = ({item}) => {
        
        return( 
            <Aluno {...item} />
        );
    }
    
    return (
     
            <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()}/>
       
    );
}

export default ListaFlex;