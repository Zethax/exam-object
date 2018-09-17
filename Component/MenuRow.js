import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';


export default class MenuRow extends React.Component{//qui setto on press per gestire details oltre al render
    render(){
        return(
          <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Details')}}>

            <View style={styles.containerLista}>
            <Image source={{uri:this.props.data.image}} style={styles.imgLista}/>
              <View style={styles.textContainer}>
                <Text style={styles.testoTitoloLista}> {this.props.data.name} </Text>
                <Text style={styles.testoSubLista}> {this.props.data.info} </Text>
                <Text style={styles.prezzoLista}> {this.props.data.price} € </Text>
            </View>
  
          </View>
          </TouchableHighlight>
        )
    }
}

//CSS
  const styles= StyleSheet.create({
   
    containerLista:{
      padding:5,
      borderBottomWidth:1,
      flexDirection:'row',
      height: 150,
      justifyContent: 'flex-start',
      alignItems: 'center',

    },

    imgLista:{
      width: 100,
      height: 100,
      borderRadius:100,
      borderWidth:1,
      borderColor:'black',
      marginRight:10,
      
    },
    

    textContainer:{
      flexDirection:'column',
      justifyContent:'flex-start',
            //marginRight :10,
     // height: 140,
     // marginLeft: 10,
     // marginRight : 10,
     // padding: 10,

      

    },
    testoTitoloLista:{
      
      fontWeight:'bold',
      fontSize: 20,
    },
    testoSubLista:{
        color: 'gray',

    },
    prezzoLista:{
      fontWeight:'bold',

    },
  });
