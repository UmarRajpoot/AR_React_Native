import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './Screens/Splash';
import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import SequenceDiagrams from './Screens/SequenceDiagrams';
import Quiz from './Screens/Quiz';
// import ARScreen from './Screens/ARScreen';
import Suggestion from './Screens/Suggestion';
import Ar_Screen from './Screens/Ar_Screen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Ar_Screen />
    // <NavigationContainer>
    
    //   <Stack.Navigator  screenOptions={{headerShown:false}}>
    //     <Stack.Screen
    //       name="SplashScreen"
    //       component={Splash}
          
    //     />
    //     <Stack.Screen name="Welcome" 
    //     component={Welcome}
        
    //      />
    //      <Stack.Screen name="Home" 
    //     component={Home}
        
    //      />
    //      <Stack.Screen name="SequenceDiagrams" 
    //     component={SequenceDiagrams}
        
    //      />
    //      <Stack.Screen name="Quiz" 
    //     component={Quiz}
        
    //      />
    //      <Stack.Screen name="Suggestion" 
    //     component={Suggestion}
        
    //      />
         
    //      <Stack.Screen name="ARScreen" 
    //     component={Ar_Screen}
        
    //      />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
  );
};

export default App;