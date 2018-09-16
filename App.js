import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import ListaScreen from './component/ListaScreen';
import CarrelloScreen from './component/CarrelloScreen';

StatusBar.setHidden(true);

//add stack navigator
const Navigazione= createStackNavigator({
  Lista:{ //nome da richiamare nella navigazione, ps pagina main quindi value anche in roostack
    screen: ListaScreen,  //nome da dare come titolo alla classe/componente
    navigationOption:{
      title:'Menù'
    }
  },

  //add new stack navigator
})

//tab navigation
const RootStack= createBottomTabNavigator({
  Lista:{
    screen:ListaScreen
  },
  Carrello:{
    screen: CarrelloScreen
  }
})

export default class App extends React.Component{
  render(){
    return( <RootStack />)
  }
}