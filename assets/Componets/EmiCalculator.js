import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

 const EmiCalculator = () => {
  return (
    <SafeAreaView style={styles.container}>
     <Text style = {styles.Header}>EMI Calculator</Text>
     <View style = {styles.smallContainer} >
     <Text style = {{ fontWeight : 'bold',color : 'grey'}}>Principle Amount   </Text>
      <Text style = {{ fontWeight : 'bold',color : 'grey'}}>Interest Payable   </Text>
       <Text style = {{ fontWeight : 'bold',color : 'grey'}}>Total Payment   </Text> 
     </View>
     <View style = {styles.moneys}>
      <Text style = {styles.priceText}>₹ 27,345 </Text><Text style = {styles.RedText}>5% </Text>
      <Text style = {styles.priceText}> |  ₹ 8,394 </Text><Text style = {styles.RedText}>14%</Text>
      <Text style = {styles.priceText}> |  ₹ 59,144</Text>
     </View>
     <View style = {styles.fragments}>
       <Text style = {{
         fontWeight : 'bold',
         top : 20,
         left : 30,
         fontSize : 20,
         color : 'white',
       }}>Monthly Loan EMI</Text>
       <View style = {{
         flex : 1,
         flexDirection : 'row',
       }}>
         <Text style = {{
           fontSize : 25,
           color : 'white',
           top : 35,
           left : 30,
         }}>
         ₹  
         </Text>
       <Text style = {{
         fontSize : 40,
         color : 'white',
         top : 20,
         left : 20,
       }}> 1,622</Text>
       <Text style = {{
         right : -50,
         top :50,
         color : 'white',
         fontSize : 16,
         fontWeight : 'bold',
         textDecorationLine : 'underline',
       }}>Close Year breakup</Text>
       <Text style = {{
         right : -50,
         top : 53,
         color : 'white'
       }}> ▲ </Text>
       </View>
       <View
        style={{
        top : -80,
        left : 30,
        width : 300,
        height : 40,
        // backgroundColor : 'green', for debugging
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        flexDirection : 'row',
      }}
    ><Text style = {styles.fragmentHeader}>Year    </Text>
    <Text style = {styles.fragmentHeader}>Principle    </Text>
    <Text style = {styles.fragmentHeader}>Interest   </Text>
    <Text style = {styles.fragmentHeader}>Total</Text>
    </View>
     
    <View
        style={{
        top : -60,
        left : 30,
        width : 300,
        height : 40,
        // backgroundColor : 'green', for debugging
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        flexDirection : 'row',
      }}
    ><Text style = {styles.fragmentHeader}>1 yr    </Text>
    <Text style = {styles.fragmentHeader}>₹ 14,879    </Text>
    <Text style = {styles.fragmentHeader}>₹ 4,586    </Text>
    <Text style = {styles.fragmentHeader}>₹ 19,465</Text>
    </View>

    <View
        style={{
        top : -40,
        left : 30,
        width : 300,
        height : 40,
        // backgroundColor : 'green', for debugging
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        flexDirection : 'row',
      }}
    ><Text style = {styles.fragmentHeader}>2 yr    </Text>
    <Text style = {styles.fragmentHeader}>₹ 16,600    </Text>
    <Text style = {styles.fragmentHeader}>₹ 2,865    </Text>
    <Text style = {styles.fragmentHeader}>₹ 19,465</Text>
    </View>
    <View
        style={{
        top : -20,
        left : 30,
        width : 300,
        height : 40,
        // backgroundColor : 'green', for debugging
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        flexDirection : 'row',
      }}
    ><Text style = {styles.fragmentHeader}>3 yr    </Text>
    <Text style = {styles.fragmentHeader}>₹ 16,899    </Text>
    <Text style = {styles.fragmentHeader}>₹ 944       </Text>
    <Text style = {styles.fragmentHeader}>₹ 17,843</Text>
    </View>
     
     </View>
     <Text style ={{
         bottom : -110,
     }} >Note : This is a static page </Text>
      
    </SafeAreaView>
  
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor : '#5c6df2',
    borderWidth : 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header : {
    flex: 1,
    top : 50,
    position : 'absolute',
    left : 30,
    fontSize : 30,
    fontWeight : 'bold',
    color : '#2f2f7c',
  },
  smallContainer : {
    flex : 1,
    left : 30,
    top : 130,
    // backgroundColor : 'red',
    position : 'absolute',
    flexDirection : 'row',
    justifyContent : 'space-around',
    
  },
  moneys: {
    flex : 1,
    left : 30,
    top : 160,
    position : 'absolute',
    flexDirection : 'row',
    justifyContent : 'space-around',
  },
  priceText: {
    fontWeight : 'bold',
    color : '#1d1d75',
    fontSize : 19,
  },
  RedText : {
    color : 'red',
    fontWeight : 'bold',
    top : 1,
    fontSize : 18,
    opacity : 0.4,
  },
  fragments : {
    top : 90,
    left : 0,
    borderRadius : 5,
    width : 345,
    height : 350,
    marginBottom : 30,
    // flexDirection : 'row',
    backgroundColor : '#63a1e8',
    
  },
  fragmentHeader : {
    fontSize : 18,
    color : 'white',
    marginRight : 10,
  }
});

export default EmiCalculator;