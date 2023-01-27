import React,{Component, useEffect} from 'react';
import {View,ImageBackground,Image, Button,Text,StyleSheet,TouchableOpacity, BackHandler, Alert} from 'react-native';

const Welcome= ({navigation})=>{
   
   
    
    // const handleBackPress= ()=>{
    //             Alert.alert(
    //                 'Stop',
    //                 'Exiting Application',
    //                 [
    //                     {
    //                         text:'Cancel',
    //                         onPress:()=>{
    //                             console.log('Cancel Pressed')
    //                         }
            
    //                     },
    //                     {
    //                         text:'OK',
    //                         onPress:()=>BackHandler.exitApp()
    //                     }
    //                 ]);
    //             return true;
    //         }
    //         // BackHandler.addEventListener('hardwareBackPress',handleBackPress)
    //         useEffect(() => {
    //             BackHandler.addEventListener("hardwareBackPress", handleBackPress);
            
    //             return () =>
    //               BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    //           }, []);
    return(
        
           
           
            
        <View style={{flex:1,alignItems:'center',backgroundColor:'#F8F6F0'}}>
            <View style={styles.top}>
                    
                    <Text style={styles.font}>Welcome To</Text>
                    <Text style={{paddingRight:"15%",color:'#F9703B',fontWeight:'bold',fontSize:23}}>SeqAR</Text>
            </View>
           

            <Image source={require('../Images/welcome.jpg')}></Image>

            <View style={styles.bottom}>
                <Text style={styles.font}>Learn Sequence Diagrams with Augmented Reality</Text>
            </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} style={styles.button}>
                    <Text style={styles.font}>Get Started</Text>
            </TouchableOpacity>
            
            
        </View>
        
        
        
        
        
    )
        
        
  
    
}



   
const styles= StyleSheet.create({
    top:{marginTop:80,alignItems:'center',justifyContent:'center'},
    mid:{marginTop:80, alignItems:'center',justifyContent:'center',marginBottom:25},
    bottom:{marginTop:50,alignItems:'center',justifyContent:'center'},
    button:{backgroundColor: "#F9703B", marginTop:20, height:"7%",width:"80%",alignItems:'center',justifyContent:'center', borderColor:'black', borderRadius:10},
    font:{fontSize:23,color:'black',fontWeight:'bold'}
})

export default Welcome