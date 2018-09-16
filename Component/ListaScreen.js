import React from 'react';
import {StyleSheet, Text, FlatList, Button, View} from 'react-native';
//import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Constants } from 'expo';

import MenuRow from './MenuRow'


export default class ListaScreen extends React.Component{

    //default state
    state={dataSource:[], searchText:''}

    //fetching
    componentDidMount(){
        return fetch('http://www.dmi.unict.it/~calanducci/LAP2/food.json')
        .then((response)=> response.json())
        .then((responseJson)=> {
            this.setState({dataSource:responseJson.data})
        })
    }

    //TODO: create bar search
    
    getData(){
        if(this.state.searchText=='')//nessuna modifica nella searchBar
            return this.state.dataSource;

            //else applica il filtraggio
    }

    //creo questo comp apparte per poter gestire onPress a details
    renderRow=({item})=>{
        return (
        <MenuRow data={item} />
    )
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}> Menù </Text>

                <FlatList 
                    data={this.getData()}
                    renderItem={this.renderRow}
                    keyExtractor={item => item.id}/>


            </View>
        )
    }
}

//CSS
const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph:{
        margin: 24,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
  
    }
})
