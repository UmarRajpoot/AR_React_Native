import React, { Component, useEffect, useState } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet ,TouchableOpacity, TextInput, Keyboard,TouchableWithoutFeedback, BackHandler,Alert} from 'react-native';
import handleBackPress from './Welcome';
const Suggestion = ()=>{
    
    
    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss();}}>
            
        <View style={{flex:1,backgroundColor:'#242a40'}}>
        
            <View style={styles.header}>
                <Text style={{color:'#F9703B',fontWeight:'bold',fontSize:30}}>
                    SUGGEST US
                </Text>
            </View>
            
            <View style={styles.body}>

            <View style={styles.bottom}>
                <Text style={{fontWeight:'bold',fontSize:25,color:'#242a40'}}>How Can We Improve!</Text>
                <Text style={{marginTop:8,fontSize:20,color:'white',opacity:0.8}}>Help us getting know how can we improve by suggesting us</Text>
            </View>

            {/* <View style={{marginTop:30,paddingLeft:15,paddingBottom:5}}>
                <Text style={{fontSize:15,paddingLeft:20,color:'black'}}>How was Your Experience, Let Us Know...</Text>
            </View> */}

            <View style={styles.textInput}>
                
                <TextInput maxLength={500} placeholder='Enter Your Suggestions Here' style={{fontStyle:'italic',fontSize:15,paddingLeft:20,color:'black'}}/>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontSize:20,color:'white',fontWeight:"bold"}}>Submit</Text>
                </TouchableOpacity>
            </View>
        
        </View>  
        
        </View>
        
        </TouchableWithoutFeedback>
    )


}

const styles= StyleSheet.create({
    header:{height:'7%',alignItems:'center',justifyContent:'center',backgroundColor:'white',borderBottomLeftRadius:30,borderBottomRightRadius:30},
    body:{backgroundColor:'#242a40',borderTopLeftRadius:50,borderTopRightRadius:50},
    bottom:{marginTop:70,backgroundColor:"#F9703B",height:"30%",justifyContent:'center',paddingLeft:20,borderRadius:20,width:'90%',marginLeft:15,marginBottom:50},  //#77CCFF
    textInput:{height:'20%',backgroundColor:'#F8F6F0',borderRadius:20,width:'90%',marginLeft:15},
    button:{backgroundColor:'#F9703B',height:'28%',width:'92%',justifyContent:'center',alignItems:'center',borderRadius:30},
    buttonContainer:{marginTop:20,alignItems:'center'}
})

export default Suggestion;