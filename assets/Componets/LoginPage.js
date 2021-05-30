import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
const axios = require('axios');
// const qs = require('qs');

function alert(msg,msg1){
    Alert.alert(msg, msg1, [
        {
          text: "Ok",
          onPress: () => null,
          style: "cancel"
        },
      
      ]);
}
const LoginPage = ({navigation}) => {
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    async function LoginHandler(){
        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexp.test(String(email).toLowerCase()))
            {// register 
                if(password.length < 8) alert("Invalid Passworld","Password must be greater than 8 character");
                else {
                    try{
                        
                    data = {
                        email : email,
                        password : password,
                    };
                    const res = await  axios.get('https://60b318cd1bec230017bf337f.mockapi.io/api/v1/users', data); 
                    if(res.data.length == 0){ 
                        alert("Error","Username or password is wrong");
                        return}
                    navigation.navigate('Home');    
                }
                    catch(error){
                        alert('Server Error',"Something went wrong.Try again");
                        console.log(error);
                    }
                }
            }
        else{
           alert("Invalid Email","Please Enter Email Correctly"); 
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.dataContainer}>
                <TextInput style = {{    
                    backgroundColor : '#f7f2ff',
                    borderRadius : 40,
                    height : 50,
                    left : 15,
                    width : 360,
                    paddingLeft : 20,
                    bottom : 5,
                }}
                    placeholder = 'username@mail.com'
                    onChangeText = {(text) => setEmail(text)}/>
                <TextInput style ={{
                    backgroundColor : '#f7f2ff',
                    borderRadius : 40,
                    height : 50,
                    left : 15,
                    width : 360,
                    paddingLeft : 20,
                }} placeholder = 'password' onChangeText = { (text) => setPassword(text)}/>
                <Text style = {{
                     top : 20,
                     borderRadius : 40,
                     backgroundColor : '#9be6f7',
                     height : 50,
                     left : 15,
                     width : 360,
                     paddingLeft : 20,
                     paddingTop : 4,
                     fontSize : 30,
                     paddingLeft : 140,
                     color : 'black',
                     fontWeight : 'bold'
                }} onPress = {LoginHandler} >Login</Text>
                <Text style = {{
                     top : 30,
                     borderRadius : 40,
                     backgroundColor : '#9be6f7',
                     height : 50,
                     left : 15,
                     width : 360,
                     paddingLeft : 20,
                     paddingTop : 10,
                     fontSize : 20,
                     paddingLeft : 50,
                     color : 'black',
                     fontWeight : 'bold'
                }} onPress = {()=> navigation.navigate('Register')} >Don't Have Account Register</Text>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : 'white',
        alignContent : 'center',
        justifyContent : 'flex-end'
    },
    dataContainer : {
        bottom : 200,
    }
})

export default LoginPage;