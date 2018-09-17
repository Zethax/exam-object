import React from 'react';
import {StyleSheet, StatusBar,View,Text, Image, Button} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { Badge } from 'react-native-elements'
//show immagine, nome, lista ingredienti, descrizione prezzo del piatto.
//TODO:Tasti - e + e tasto for add to chart


export default class DetailScreen extends React.Component{

    static navigationOptions={
        headerTitle:'details',
        
   
    }
    constructor(props){
        super(props)
        const tempItem = this.props.navigation.getParam('currentItem')
        //console.log(tempItem)
        this.state={item:tempItem, cont:0}
        console.log(this.state.cont)

    }
    render(){



    
    // nome, lista ingredienti, descrizione prezzo del piatto
        return(
            <View style={styles.container}>
            <View style={styles.chart}>
                        <Badge value='+' onPress={()=>{this.setState({cont:this.state.cont+1})}}   />
                        <Text> {this.state.cont} </Text>
                        <Badge value='-' onPress={()=>{if(this.state.cont>0)
                          this.setState({cont:this.state.cont-1})}}   />
         
                </View>
                            <Button title='prova'
                                   onPress={()=>{null}} />

                <Image style={styles.img} source={{uri: this.state.item.image}} />
                <Text style={styles.textTitle}> {this.state.item.name} </Text>
               
                <View style={styles.textContainer}>
                <Text> {this.state.item.ingredients} </Text>
                <Text> {this.state.item.info} </Text>
                <Text style={{fontWeight:'500'}}> {this.state.item.price} </Text>
                </View>
                        
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
   //  flex: 1,
   //  justifyContent: 'flex-start',
   flexDirection:'column',
   //  alignItems: 'stretch',
    //backgroundColor: "yellow",
     padding: 20,
    },
    img:{
        width: '100%',
        height: '50%',

    },
    textContainer:{
            height : 20,
            width : "100%",
            flexDirection : "column"
    },
    textTitle:{
        fontSize: 20,
        fontWeight: '500',
    },
    chart:{
        flexDirection:'row',
        justifyContent:'flex-end',
       alignItems:'center',
       
    }
})
