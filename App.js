import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import  EmiCalculator  from './assets/Componets/EmiCalculator.js'
import RegisterPage from './assets/Componets/RegisterPage.js';
import LoginPage from './assets/Componets/LoginPage.js'
import HomePage from './assets/Componets/HomePage'
const Stack = createStackNavigator();

Stack.navigationOptions = ({navigation}) => {
  return {
    headerMode: false
  }
}
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name = 'Login'
    
       component = {LoginPage}
       />
       <Stack.Screen name = 'Home'
       component = {HomePage}
       options = {{
        headerLeft: (props) => (
          <HeaderBackButton {...props} onPress={() => null} />)
       }}
       />
       <Stack.Screen name = 'Register'
       component = {RegisterPage}
       />
       <Stack.Screen name = 'EMI Calculator'
       component = {EmiCalculator}
       />
     </Stack.Navigator>
   </NavigationContainer>
  );
}


