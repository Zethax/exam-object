import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Constants } from 'expo';


export default class CarrelloScreen extends React.Component{
    render(){
        return( <Text style={styles.paragraph}> carrello </Text>)
    }
}


const styles= StyleSheet.create({
    paragraph:{
        fontSize:30,
    }
})