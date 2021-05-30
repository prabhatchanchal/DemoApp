import React, { useEffect ,useState}  from 'react';
import { SafeAreaView,StyleSheet,TouchableOpacity, Image,Text,View, FlatList, TextInput} from 'react-native';
import {BackHandler, Alert} from 'react-native';
// import { listUsers } from './Controler';
const axios = require('axios');
function HomePage( {navigation}) {
    const [arr,setArr] = useState([]);
    const [pageId,setPageId] = useState(0)
async function handleClick() {
        try {
            const res = await axios.get('https://reqres.in/api/users?page='+pageId.toString());
            setArr(res.data.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "This action will close this app", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
      
      return (
          <SafeAreaView>
              <View>
              <TouchableOpacity style = {{
                    top : 10,
                    borderRadius : 40,
                    backgroundColor : '#9be6f7',
                    height : 50,
                    left : 15,
                    width : 360,
                    paddingTop : 4,
                    paddingLeft : 40,
                    marginBottom : 20,
                 }} 
                  ><Text onPress = {() => navigation.navigate('EMI Calculator') }
                  style = {{
                    left : 40,
                    top:4,
                    fontSize : 24,
                    color : 'black',
                    fontWeight : 'bold',
                  }}>View EMI Calculator</Text></TouchableOpacity>
                  <TextInput style = {{
                      top : 10,
                      borderRadius : 40,
                      backgroundColor : '#9be6f7',
                      height : 50,
                      left : 15,
                      width : 360,
                      paddingTop : 4,
                      fontSize : 30,
                      paddingLeft : 100,
                      color : 'black',
                      fontWeight : 'bold',
                      marginBottom : 20,
                  }} placeholder= 'Enter page id'
                  onChangeText = {(text) => setPageId(text)}
                  ></TextInput>
                 <TouchableOpacity style = {{
                    top : 10,
                    borderRadius : 40,
                    backgroundColor : '#9be6f7',
                    height : 50,
                    left : 15,
                    width : 360,
                    paddingTop : 4,
                    paddingLeft : 110,
                    marginBottom : 20,
                 }} 
                  onPress = {() => handleClick()}><Text 
                  style = {{
                    fontSize : 30,
                    color : 'black',
                    fontWeight : 'bold',
                  }}>List Users</Text></TouchableOpacity>
                  <Text style = {{left : 40,width : 300}}>Https://reqres.in have only two pages of profile. So Enter value from [1,2]</Text>
                  <FlatList 
                  contentContainerStyle={{ paddingBottom: 500,paddingTop: 30, }}
                  data = {arr}
                  keyExtractor = {(item,idx) => item.id.toString()}
                  renderItem = {({item}) =>
                    <View style={styles.Profiles}>
                    <Image
                     style = {styles.ProfImg}
                    source = {{uri:item.avatar}}/>
                    <Text style = {styles.texts}>{item.email}</Text>
                    <Text style = {styles.texts}>{item.first_name} {item.last_name}</Text>
                    </View>
                  } >
                  </FlatList>
              </View>
          </SafeAreaView>
      )
  }
const styles = StyleSheet.create({
    Profiles : {
        flex: 1,
        backgroundColor : '#d7edf2',
        // borderBottomWidth : 1,
        marginBottom : 10,
        alignItems : 'center',
        width : 300,
        height : 150,
        borderRadius : 30,
        left : 45,
    },
    ProfImg : {
        width : 60,
        height : 80,
        borderRadius : 70,
        // left : 150,
    },
    texts : {
        fontSize : 20,
        color : 'grey',
        fontWeight : 'bold'
        
    }
})

export default HomePage;