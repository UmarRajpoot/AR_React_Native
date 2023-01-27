import React, { Component, useState } from 'react';
import { Modal,View, ImageBackground, Image, Text, StyleSheet ,Pressable,TouchableNativeFeedback,TouchableOpacity, BackHandler,useeff, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import handleBackPress from './Welcome';


const Home = ({navigation}) => {

    const [showAbout,SetshowAbout] = useState(false);
    const [showComponents,SetshowComponents]= useState(false);
    
    return (
        <ImageBackground source={require("../Images/orange.jpg")}>
            {/* // <View style={{ flex: 1, backgroundColor: "#ffffff"/*#E0D1EB*/ }
        <Modal
        visible={showComponents}
        onRequestClose={()=>SetshowComponents(false)}
        animationType={'fade'}
        transparent={true}
        >
            <View style={styles.modal}>
                <View style={styles.navBar}>
                    <Text style={{fontSize: 25,fontWeight:'bold',width:'100%',color:'#F9703B',paddingLeft:80}}>Components of SD</Text>
                 </View>
                 <Image source={require('../Images/component.png')} style={{height:600,width:400}}></Image>
                 <TouchableOpacity style={{backgroundColor: '#F9703B', marginTop:"5%", height:"6%",width:"80%",justifyContent:'center', borderColor:'black', borderRadius:10,opacity:0.9,paddingLeft:5,alignItems:'center'}} onPress={()=>SetshowComponents(false)}>
                    <Text style={styles.font}>Done</Text>
                 </TouchableOpacity>
            </View>
        </Modal>
        <Modal
        visible={showAbout} 
        onRequestClose={()=>SetshowAbout(false)}
        animationType={'fade'}
        
        >
            <View style={styles.modal}>
                 <View style={styles.navBar}>
                    <Text style={{fontSize: 25,fontWeight:'bold',width:'100%',color:'#F9703B',paddingLeft:110}}>About Us</Text>
                 </View>
                 <View style={styles.container}>
                    <Text style={{fontWeight:'bold',fontSize:25,color:'white'}}>Convention we are following and the rules are:</Text>
                 </View>
                 <TouchableOpacity style={{backgroundColor: '#F9703B', marginTop:"5%", height:"6%",width:"80%",justifyContent:'center', borderColor:'black', borderRadius:10,opacity:0.9,paddingLeft:5,alignItems:'center'}} onPress={()=>SetshowAbout(false)}>
                    <Text style={styles.font}>Done</Text>
                 </TouchableOpacity>
            </View>
            
        </Modal>

            <View style={styles.headerContainer}>
                <Image style={styles.img}></Image>
                <Text style={{fontSize:35,fontWeight:'bold',paddingLeft:'5%',color:'#242a40'}}>SEQAR</Text>
            </View>
          
            <View style={styles.body}>

            <TouchableOpacity style={styles.Buttons} onPress={()=>{
                navigation.navigate('SequenceDiagrams')
            }}>
            <View style={{position:'absolute',flexDirection:'row',paddingLeft:5}}>
                <Image source={require('../Images/icon1.png')}></Image>
                <Text style={styles.font}>Sequence Diagrams</Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.Buttons} onPress={()=>SetshowComponents(true)}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../Images/icon2.png')}></Image>
                <Text style={styles.font}>Components of SD</Text>
               
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.Buttons} onPress={()=>{navigation.navigate('Quiz')}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../Images/icon3.png')}></Image>
                <Text style={styles.font}>Quiz</Text>
            </View>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.Buttons} onPress={()=>{navigation.navigate('Suggestion')}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../Images/icon4.png')}></Image>
                <Text style={styles.font}>Suggest Us</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Buttons} onPress={()=>SetshowAbout(true)}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../Images/icon5.png')}></Image>
                <Text style={styles.font}>About Us</Text>
            </View>
            </TouchableOpacity>
            
            </View>
        
            </ImageBackground>
        
            
       

    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%" /*,#D57EEA*/ , height: "25%",justifyContent:'center',alignItems:'center'
    },
    Buttons: {
        backgroundColor: '#F9703B', marginTop:"5%", height:"6%",width:"80%",justifyContent:'center', borderColor:'black', borderRadius:10,opacity:0.9,paddingLeft:5
    },
    body:{
        alignItems:'center',width:'100%',backgroundColor:'white',height:'100%',borderTopLeftRadius:30,borderTopRightRadius:30,paddingTop:40  //backgroundColor:'#E8F3D6'
    },
    font:{
        fontSize:25, fontWeight:'bold',position:'relative',color:'#242a40',paddingLeft:10
    },
    modal:{
        backgroundColor:'#242a40',height:'100%',alignItems:'center'
    },
    navBar:{
        backgroundColor:'white',height:'7%',justifyContent:'center',paddingLeft:'5%',width:"100%",borderBottomLeftRadius:30,borderBottomRightRadius:30,alignItems:'center'
    },
    container:{
        marginTop:70,backgroundColor:"#F9703B",height:"30%",justifyContent:'center',paddingLeft:20,borderRadius:20,width:'90%',marginBottom:50
    }
})

export default Home;