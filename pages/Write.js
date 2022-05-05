import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const Write = () => {
  const [text, setText] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("hello");
    try {
      const res = await axios.post(
        "https://mpc-project3-9gsppksen-slowdivesun.vercel.app/api/entry",
        { text: text }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    setText("");
  };
  return (
    <View style={styles.container}>
      <Image
        fadeDuration={2000}
        style={styles.tinyLogo}
        source={require("../cat.png")}
      />
      <Text>How was your Day?</Text>
      <StatusBar style='auto' />
      <TextInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={(e) => onSubmit(e)} style={styles.button}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Write;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C1CAE3",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "black",
    height: 50,
    justifyContent: "flex-start",
    padding: 10,
    borderWidth: 1,
    width: 300,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#C1CAE3",
    padding: 10,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
