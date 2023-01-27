import React, { Component, useEffect, useState } from 'react';
import { View, ImageBackground, Image, Text, StyleSheet ,Pressable,FlatList,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const SequenceDiagrams = ({navigation})=>{


    // const [sedd,setsedd] = useState([
    //     {
    //         name: "abc",
    //         imageUrl: require('../Images/onlineshop.jpg')
    //     },{ 
    //         name: "abc",
    //         imageUrl: require('../Images/onlineshop.jpg')
    //     },{
    //         name: "abc",
    //         imageUrl: require('../Images/onlineshop.jpg')
    //     }
    // ])

    // useEffect(() => {
    //     setsedd({
    //         name: "yyy",
    //         imageUrl: require('url')
    //     })
    // },[])

    return(
        
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#242a40'}}>

            <View style={styles.navbar}>
                <Text style={{fontSize: 25,fontWeight:'bold',width:'100%',color:'#F9703B',paddingLeft:80}}>Sequence Diagrams</Text>
            </View>
            <ScrollView >  

            
            <View style={{flexDirection:'row', flex:1,paddingTop:20}}>

                <Pressable style={styles.containers} onPress={() => navigation.navigate('ARScreen')}>
               
                    <View style={styles.img} >
                        <Image source={require("../Images/onlineshop.jpg")} style={styles.images} />
                    <Text style={styles.text} >Online Shop</Text>
                    </View>
                    
                </Pressable>

                <Pressable style={styles.containers}>
               
                    <View style={styles.img} >
                        <Image source={require("../Images/hospital.jpeg")} style={styles.images} />
                    <Text style={styles.text} >Hospital Mgt Sys</Text>
                    </View>
                    
                </Pressable>
                
               
            </View>

            <View style={{flexDirection:'row', flex:1}}>

                <Pressable style={styles.containers}>
               
                    <View style={styles.img} >
                        <Image source={require("../Images/airport.jpeg")} style={styles.images} />
                    <Text style={styles.text} >Airport Sys</Text>
                    </View>
                    
                </Pressable>

                <Pressable style={styles.containers}>
               
                    <View style={styles.img} >
                        <Image source={require("../Images/library.jpeg")} style={styles.images} />
                    <Text style={styles.text} >Library</Text>
                    </View>
                    
                </Pressable>
                
               
            </View>

            <View style={{flexDirection:'row', flex:1}}>

                <Pressable style={styles.containers}>
               
                    <View style={styles.img} >
                        <Image source={require("../Images/parking.jpeg")} style={styles.images} />
                    <Text style={styles.text} >Auto Parking</Text>
                    </View>
                    
                </Pressable>

                <Pressable style={styles.containers}>
               
                    <View style={styles.img} >
                        <Image source={require("../Images/hotel.jpeg")} style={styles.images} />
                    <Text style={styles.text} >Hotel Booking</Text>
                    </View>
                    
                </Pressable>
                
               
            </View>

            <View style={{flexDirection:'row'}}>

                <Pressable style={styles.containers}>
               
                    <View style={styles.img} >
                        <Image source={require("../Images/hotel.jpeg")} style={styles.images} />
                    <Text style={styles.text} >Railway Ticket Reservation</Text>
                    </View>
                    
                </Pressable>

                <Pressable style={styles.containers}>
               
                    <View style={styles.imgContainer} >
                        <Image source={require("../Images/school.jpeg")} style={styles.images} />
                    <Text style={styles.text} >Student Portal</Text>
                    </View>
                    
                </Pressable>
                
               
            </View>
            
                
                
            </ScrollView>
            {/* <Pressable onPress={()=>{navigation.navigate('Home')}} style={{width:82,flexDirection:'row',backgroundColor:'#77CCFF',borderRadius:10,height:40,justifyContent:'center',alignItems:'center'}}>
                <Image source={require('../Images/home.png')}></Image> 
                <Text style={{fontWeight:'bold',fontSize:17}}>Home</Text>
            </Pressable>
             */}
        
        </View>
        

    )
   
}

const selection=()=>{
    return(
        null
    )
}
const styles = StyleSheet.create({
    navbar:{
        backgroundColor:'white',height:'7%',justifyContent:'center',paddingLeft:'5%',width:"100%",borderBottomLeftRadius:30,borderBottomRightRadius:30
    },
    containers:{
        paddingBottom:10,alignItems:'center',justifyContent:'center',width:'50%'
    },
    images:{
       width:150, height:150, borderRadius:20
    },
    imgContainer:
    {
        width: '50%',alignItems: 'center',justifyContent: 'center'
    },
    text:{
        fontSize: 20,fontWeight:'bold',color:'white',justifyContent:'center',position:'relative'    }

})

export default SequenceDiagrams;