import React,{useRef,useEffect,Component} from 'react';
import {
    SafeAreaView,
    Image,
    Text,
    View,
    StyleSheet,
    Dimensions,
    Animated,
} from 'react-native';



const Splash = ({navigation})  => {
    setTimeout(()=>
    {
         navigation.navigate("Welcome");
    },5000)

    const moveAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.sequence([
        Animated.timing(moveAnim, {
          duration: 2000,
          toValue: Dimensions.get('window').width / 1.6,
          delay: 0,
          useNativeDriver: false,
        }),
        Animated.timing(moveAnim, {
          duration: 2000,
          toValue: 0,
          delay: 0,
          useNativeDriver: false,
        }),
      ]).start();
      Animated.timing(fadeAnim, {
        duration: 2000,
        toValue: 1,
        delay: 2000,
        useNativeDriver: false,
      }).start();
    }, [moveAnim, fadeAnim]);
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Animated.Image
            style={[styles.image, {opacity: fadeAnim}]}
            source={require('../Images/logo.png')}
          />
          <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
            <Text style={[styles.logoText]}>Seq</Text>
            <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
              AR
            </Animated.Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Splash;
  
  export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: '#F9AC66',
    },
    logoText: {
      fontSize: 35,
      marginTop: 10,
      color: 'white',
      fontWeight: '700',
    },
    contentContainer: {
      top: '40%',
      alignItems: 'center',
    },
    image: {
      width: 150,
      height: 150,
    },
    logoContainer: {
      flexDirection: 'row',
    },
  });
  

// export default class Splash extends Component
// {
    
//     constructor(props){
//         super(props);
//         setTimeout(()=>{
//             this.props.navigation.navigate("Welcome");
//         },3000)
//     }
    
//     render(){
//         const moveAnim = useRef(new Animated.Value(0)).current;
//   const fadeAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.sequence([
//       Animated.timing(moveAnim, {
//         duration: 2000,
//         toValue: Dimensions.get('window').width / 1.6,
//         delay: 0,
//         useNativeDriver: false,
//       }),
//       Animated.timing(moveAnim, {
//         duration: 2000,
//         toValue: 0,
//         delay: 0,
//         useNativeDriver: false,
//       }),
//     ]).start();
//     Animated.timing(fadeAnim, {
//       duration: 2000,
//       toValue: 1,
//       delay: 2000,
//       useNativeDriver: false,
//     }).start();
//   }, [moveAnim, fadeAnim]);
//         return(
//         <SafeAreaView style={styles.container}>
//         <View style={styles.contentContainer}>
//         <Animated.Image
//           style={[styles.image, {opacity: fadeAnim}]}
//           source={require('../Images/logo.png')}
//         />
//         <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
//           <Text style={[styles.logoText]}>Seq</Text>
//           <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
//             AR
//           </Animated.Text>
//         </Animated.View>
//       </View>
//     </SafeAreaView>
//         );
        
//     }
    
// }
// const styles = StyleSheet.create({
//     container: {
//       display: 'flex',
//       flex: 1,
//       backgroundColor: '#F9AC66',
//     },
//     logoText: {
//       fontSize: 35,
//       marginTop: 20,
//       color: 'white',
//       fontWeight: '700',
//     },
//     contentContainer: {
//       top: '40%',
//       alignItems: 'center',
//     },
//     image: {
//       width: 100,
//       height: 100,
//     },
//     logoContainer: {
//       flexDirection: 'row',
//     },
//   });