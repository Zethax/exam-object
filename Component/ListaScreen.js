import React from 'react';
import {StyleSheet, Text, FlatList, Button, View, Alert} from 'react-native';
//import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Constants } from 'expo';
import { SearchBar } from 'react-native-elements'


import MenuRow from './MenuRow'


export default class ListaScreen extends React.Component{

    static navigationOptions={
        headerTitle:'Menù',
        headerRight:(
            <Button title='Filtra' onPress={()=>{Alert.alert('pressed')}} />
        )
   
    }
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



    //get array
    getData(){
        if(this.state.searchText=='')//nessuna modifica nella searchBar
            return this.state.dataSource;

        else{
        let key = this.state.searchText.toLowerCase();
        return this.state.dataSource.filter(item => {
        let name = item.name.toLowerCase();
        let category = item.category.toLowerCase();
        let info=item.info.toLowerCase(); 
        return (name.search(key) !== -1 || info.search(key)!==-1 || category.search(key) !== -1);
        });
    }
    }

    //creo questo comp apparte per poter gestire onPress a details
    renderRow=({item})=>{
        return (
        <MenuRow data={item} navigation={this.props.navigation}/>
    )
    }

    render(){
        return (
            <View style={styles.container}>

             
    <View style={{width:350}}>
        <SearchBar
          lightTheme
          onChangeText={(text)=>{this.setState({searchText:text})}} 
          onClear={()=>{this.setState({searchText:''})}}
          placeholder='Cerca...' />
    </View>

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
