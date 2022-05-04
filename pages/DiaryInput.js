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


const DiaryInput = () => {
  return (
    <View style={stylesdiarylist.container}>
      <Text style={stylesdiarylist.heading}>Whats on your mind? </Text>
       <Image
        style={stylesdiarylist.tinyLogo}
        source={require('../butterfly.png')}
      />

         <TextInput
        style={stylesdiarylist.input}
        
        placeholder="Enter your thoughts.."
       
      />
      <Button
        title="Submit"
        style={stylesdiarylist.button}
      />
     
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
    fontFamily: 'kalam-light',
    backgroundColor: "#c2cae3",
    marginVertical: 8,
    fontSize: 18,
    lineHeight: 25,
    padding: 50,
    width: '70%',
    height: 100,
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
export default DiaryInput;
