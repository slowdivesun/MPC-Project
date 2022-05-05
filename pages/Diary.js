import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryItem from "../components/diaryItem/DiaryItem";
import { ImageBackground } from "react-native-web";

// background image source
const image = {
  uri: "https://preview.redd.it/ecls76uo6cw81.png?width=2560&format=png&auto=webp&s=f71cb08160ddb83451172f9ffed5d6340283a480",
};

const Diary = ({ navigation }) => {
  const [diary, setDiary] = useState([]);
  useEffect(() => {
    const getEntries = async () => {
      try {
        const res = await axios.get(
          "https://mpc-project3-9gsppksen-slowdivesun.vercel.app/api/entry/user/6269219ebbc7b3b228b888a1/"
        );
        setDiary(res.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getEntries();
  }, []);
  return (
    <View style={stylesdiarylist.container}>
      <Text style={stylesdiarylist.heading}> Diary Entries </Text>
      <Image style={stylesdiarylist.tinyLogo} source={require("../cat.png")} />
      <ScrollView
        style={stylesdiarylist.scrollView}
        contentContainerStyle={stylesdiarylist.container}
      >
        {diary.map((entry) => (
          <View>
            <View style={stylesdiarylist.paragraph}>
              <DiaryItem
                onPress={() =>
                  navigation.navigate("Entry", {
                    item: entry,
                  })
                }
                item={entry}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const stylesdiarylist = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    paddingBottom: 50,
    backgroundColor: "#fff",
    width: "100%",
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
    fontFamily: "kalam-light",
    backgroundColor: "#c2cae3",
    marginVertical: 8,
    fontSize: 18,
    lineHeight: 25,
    padding: 50,
    width: "70%",
    height: 100,
    borderRadius: 5,
  },
  scrollView: {
    height: "90%",
    width: "100%",
    margin: 20,
    alignSelf: "center",
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: "transparent",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
export default Diary;
