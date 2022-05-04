import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ImageBackground } from "react-native-web";

// background image source


const Diarypage = () => {
  return (
    <View style={stylesdiarylist.container}>

      <Text style={stylesdiarylist.heading}> dateofentry Comes Here </Text>

      
      
      <Image source={require('../cat.png')}/>
     
        
    
       <View style={stylesdiarylist.paragraph}>
       <Text>
       Diary entry Lorem csyuwqvduwqdhowqbdk dbwdhoiwqhdphdp1
       </Text>
       </View>

     
     
    </View>

  );
};
const stylesdiarylist = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50,
    backgroundColor: "#fff",
       width:'100%',
  },
    button: {
    marginTop: 10,
    backgroundColor: "#a99ec4",
    padding: 10,
  },
   input: {
   borderColor: "black",
    height: 50,
    justifyContent: "flex-start",
    padding: 10,
    borderWidth: 1,
    width: 300,
    margin: 30,
  },
  heading: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,

  },
   paragraph: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c2cae3",
    marginVertical: 10,
    fontSize: 20,
    padding: 5,
    width: '90%',
    height: '60%',
     borderRadius: 5,
  },
    scrollView: {
    height: '90%',
    width: '100%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'transparent',
  
  },
    tinyLogo: {
    width: 100,
    height: 100,
  },
});
export default Diarypage;
