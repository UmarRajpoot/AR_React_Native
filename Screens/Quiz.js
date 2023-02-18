import React, { Component, useEffect, useState } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet ,TouchableOpacity,Pressable} from 'react-native';




const Quiz = ({navigation})=>{
    return(
        <View style={{flex:1,position:'relative',backgroundColor:'#242A40'}}>
            <View style={styles.navbar}>
                <Text style={{fontWeight:'bold',color:'#F9703B',fontSize:25}}>Quiz</Text>
            </View>
            <View style={styles.mainView}>
                
                    <View style={{paddingTop:130,alignItems:'center'}}>
                        <Text  style={styles.text}>Welcome To The Quiz</Text>
                    </View>

                    <View style={{paddingTop:30,alignItems:'center',justifyContent:'center',alignItems:'center'}}>
                        <Text  style={styles.text}>Select your expertise to Get Started!</Text>
                    </View>

                    <View style={styles.buttonContainer}> 
                        <TouchableOpacity style={styles.buttons} onPress={()=>(navigation.navigate('StartQuiz'))}>
                            <Text style={styles.buttonText}>Beginner</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttons}>
                            <Text style={styles.buttonText}>Intermediate</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttons}>
                            <Text style={styles.buttonText}>Advance</Text>
                        </TouchableOpacity>
                       
                    </View>
               
                
               
                  
                   
                
            
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar:{height:'8%',justifyContent:'center',paddingLeft:10,backgroundColor:'white',width:'100%',borderBottomLeftRadius:30,borderBottomRightRadius:30,alignItems:'center'},
    mainView:{width:'100%'},
    text:{fontWeight:'bold',color:'#CADAE7',fontSize:25},
    img:{height:'100%',alignItems:'center'},
    buttons:{backgroundColor:"#F9703B",width:'70%',height:'15%',marginBottom:20,borderRadius:25,alignItems:'center',justifyContent:'center'},
    buttonContainer:{paddingTop:50,alignItems:'center',width:'100%'},
    buttonText:{fontWeight:'bold',color:'white',fontSize:25}
})
export default Quiz;