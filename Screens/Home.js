import React, { Component, useState } from 'react';
import { Modal, View, ImageBackground, Image, Text, StyleSheet, Pressable, TouchableNativeFeedback, TouchableOpacity, BackHandler, useeff, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import handleBackPress from './Welcome';


const Home = ({ navigation }) => {

    const [showAbout, SetshowAbout] = useState(false);
    const [showComponents, SetshowComponents] = useState(false);

    return (
        <ImageBackground source={require("../Images/orange.jpg")}>
            
            {/* Components Of SequenceDiagrams */}
            <Modal
                visible={showComponents}
                onRequestClose={() => SetshowComponents(false)}
                animationType={'fade'}
                transparent={true}
            >
                <View style={styles.modal}>
                    <View style={styles.navBar}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', width: '100%', color: '#F9703B', paddingLeft: 80 }}>Components of SD</Text>
                    </View>
                    {/* <Image source={require('../Images/component.png')} style={{height:600,width:400}}></Image> */}
                    <ScrollView style={styles.ScrollView}>

                        <View style={styles.components}>
                            <Text style={styles.fontHeading}>Class Roles Or Participants</Text>
                            <Text style={styles.fontPara}>Class roles describe the way an object will behave in context. Use the UML object symbol to illustrate class roles, but don't list object attributes.</Text>
                            <Image source={require('../Images/comp1.png')} style={{ borderRadius: 10 }} />
                        </View>

                        <View style={styles.components}>
                            <Text style={styles.fontHeading}>Activation</Text>
                            <Text style={styles.fontPara}>Activation boxes represent the time an object needs to complete a task. When an object is busy executing a process or waiting for a reply message, use a thin gray rectangle placed vertically on its lifeline.</Text>
                            <Image source={require('../Images/comp2.png')} style={{ width: 320, borderRadius: 10 }} />
                        </View>

                        <View style={styles.components}>
                            <Text style={styles.fontHeading}>Messages</Text>
                            <Text style={styles.fontPara}>Messages are arrows that represent communication between objects. Use half-arrowed lines to represent asynchronous messages. Asynchronous messages are sent from an object that will not wait for a response from the receiver before continuing its tasks. For message types, see below. </Text>
                            <Image source={require('../Images/comp3.png')} style={{ width: 320, borderRadius: 10 }} />
                        </View>

                        <View style={styles.components}>
                            <Text style={styles.fontHeading}>Lifelines</Text>
                            <Text style={styles.fontPara}>Lifelines are vertical dashed lines that indicate the object's presence over time.  </Text>
                            <Image source={require('../Images/comp4.png')} style={{ width: 320, borderRadius: 10 }} />
                        </View>

                        <View style={styles.components}>
                            <Text style={styles.fontHeading}>Loops</Text>
                            <Text style={styles.fontPara}> A repetition or loop within a sequence diagram is depicted as a rectangle. Place the condition for exiting the loop at the bottom left corner in square brackets [ ]. </Text>
                        </View>

                        <View style={styles.components}>
                            <Text style={styles.fontHeading}>Destroyin Objects</Text>
                            <Text style={styles.fontPara}> Objects can be terminated early using an arrow labeled {"<< destroy >>"} that points to an X. This object is removed from memory. When that object's lifeline ends, you can place an X at the end of its lifeline to denote a destruction occurrence. </Text>
                        </View>

                        <Text style={styles.fontHeading}>Types of Messages in Sequence Diagrams</Text>

                        <View style={styles.components}>
                            <Text style={styles.fontHeading}>Synchronous Message</Text>
                            <Text style={styles.fontPara}>A synchronous message requires a response before the interaction can continue. It's usually drawn using a line with a solid arrowhead pointing from one object to another</Text>
                            <Image source={require('../Images/comp5.png')} style={{ width: 320, borderRadius: 10 }} />

                            <Text style={styles.fontHeading}>Asynchronous Message</Text>
                            <Text style={styles.fontPara}>Asynchronous messages don't need a reply for interaction to continue. Like synchronous messages, they are drawn with an arrow connecting two lifelines; however, the arrowhead is usually open and there's no return message depicted. </Text>
                            <Image source={require('../Images/comp6.png')} style={{ width: 320, borderRadius: 10 }} />

                            <Text style={styles.fontHeading}>Reply or Return Message</Text>
                            <Text style={styles.fontPara}>A reply message is drawn with a dotted line and an open arrowhead pointing back to the original lifeline.  </Text>
                            <Image source={require('../Images/comp7.png')} style={{ width: 320, borderRadius: 10 }} />

                            <Text style={styles.fontHeading}>Self Message</Text>
                            <Text style={styles.fontPara}>A message an object sends to itself, usually shown as a U shaped arrow pointing back to itself.   </Text>
                            <Image source={require('../Images/comp8.png')} style={{ width: 320, borderRadius: 10 }} />

                            <Text style={styles.fontHeading}>Create Message</Text>
                            <Text style={styles.fontPara}>This is a message that creates a new object. Similar to a return message, it's depicted with a dashed line and an open arrowhead that points to the rectangle representing the object created..   </Text>
                            <Image source={require('../Images/comp9.png')} style={{ width: 320, borderRadius: 10 }} />

                            <Text style={styles.fontHeading}>Delete Message</Text>
                            <Text style={styles.fontPara}>This is a message that destroys an object. It can be shown by an arrow with an x at the end.    </Text>
                            <Image source={require('../Images/comp10.png')} style={{ width: 320, borderRadius: 10 }} />

                            <Text style={styles.fontHeading}>Found Message</Text>
                            <Text style={styles.fontPara}>A message sent from an unknown recipient, shown by an arrow from an endpoint to a lifeline.</Text>
                            <Image source={require('../Images/comp11.png')} style={{ width: 320, borderRadius: 10 }} />

                            <Text style={styles.fontHeading}>Lost Message</Text>
                            <Text style={styles.fontPara}>A message sent to an unknown recipient. It's shown by an arrow going from a lifeline to an endpoint, a filled circle or an x.</Text>
                            <Image source={require('../Images/comp12.png')} style={{ width: 320, borderRadius: 10 }} />
                        </View>

                    </ScrollView>
                    <TouchableOpacity style={{ backgroundColor: '#F9703B', marginTop: "5%", height: "6%", width: "80%", justifyContent: 'center', borderColor: 'black', borderRadius: 10, opacity: 0.9, paddingLeft: 5, alignItems: 'center' }} onPress={() => SetshowComponents(false)}>
                        <Text style={styles.font}>Done</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* About Modal */}
            <Modal
                visible={showAbout}
                onRequestClose={() => SetshowAbout(false)}
                animationType={'fade'}

            >
                <View style={styles.modal}>
                    <View style={styles.navBar}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', width: '100%', color: '#F9703B', paddingLeft: 110 }}>About Us</Text>
                    </View>
                    <View style={styles.container}>
                        <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>Convention we are following and the rules are:</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#F9703B', marginTop: "5%", height: "6%", width: "80%", justifyContent: 'center', borderColor: 'black', borderRadius: 10, opacity: 0.9, paddingLeft: 5, alignItems: 'center' }} onPress={() => SetshowAbout(false)}>
                        <Text style={styles.font}>Done</Text>
                    </TouchableOpacity>
                </View>

            </Modal>

            {/* headerContainer */}
            <View style={styles.headerContainer}>
                <Image style={styles.img}></Image>
                <Text style={{ fontSize: 35, fontWeight: 'bold', paddingLeft: '5%', color: '#242a40' }}>SEQAR</Text>
            </View>

            <View style={styles.body}>

                <TouchableOpacity style={styles.Buttons} onPress={() => {
                    navigation.navigate('SequenceDiagrams')
                }}>
                    <View style={{ position: 'absolute', flexDirection: 'row', paddingLeft: 5 }}>
                        <Image source={require('../Images/icon1.png')}></Image>
                        <Text style={styles.font}>Sequence Diagrams</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.Buttons} onPress={() => SetshowComponents(true)}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../Images/icon2.png')}></Image>
                        <Text style={styles.font}>Components of SD</Text>

                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.Buttons} onPress={() => { navigation.navigate('Quiz') }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../Images/icon3.png')}></Image>
                        <Text style={styles.font}>Quiz</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.Buttons} onPress={() => { navigation.navigate('Suggestion') }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../Images/icon4.png')}></Image>
                        <Text style={styles.font}>Suggest Us</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Buttons} onPress={() => SetshowAbout(true)}>
                    <View style={{ flexDirection: 'row' }}>
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
        width: "100%" /*,#D57EEA*/, height: "25%", justifyContent: 'center', alignItems: 'center'
    },
    Buttons: {
        backgroundColor: '#F9703B', marginTop: "5%", height: "6%", width: "80%", justifyContent: 'center', borderColor: 'black', borderRadius: 10, opacity: 0.9, paddingLeft: 5
    },
    body: {
        alignItems: 'center', width: '100%', backgroundColor: 'white', height: '100%', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingTop: 40  //backgroundColor:'#E8F3D6'
    },
    font: {
        fontSize: 25, fontWeight: 'bold', position: 'relative', color: '#242a40', paddingLeft: 10
    },
    modal: {
        backgroundColor: '#242a40', height: '100%', alignItems: 'center'
    },
    navBar: {
        marginBottom: 50, backgroundColor: 'white', height: '7%', justifyContent: 'center', paddingLeft: '5%', width: "100%", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, alignItems: 'center'
    },
    container: {
        marginTop: 70, backgroundColor: "#F9703B", height: "30%", justifyContent: 'center', paddingLeft: 20, borderRadius: 20, width: '90%', marginBottom: 50
    },
    components: {
        backgroundColor: '#F9703B', borderRadius: 8, marginBottom: 15, alignItems: 'center', paddingBottom: 5
    },
    fontHeading: {
        fontSize: 22, fontWeight: 'bold', color: 'white'
    },
    messages: {
        fontSize: 18, fontWeight: 'bold', color: 'white'
    },
    fontPara: {
        fontSize: 15, color: '#242a40', marginBottom: 10, paddingLeft: 5, paddingRight: 5
    },
    ScrollView: {
        width: '95%'
    }
})

export default Home;