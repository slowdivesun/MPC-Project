import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryItem from "../components/diaryItem/DiaryItem";

const Diary = () => {
  const [diary, setDiary] = useState([]);
  useEffect(() => {
    const getEntries = async () => {
      try {
        const res = await axios.get(
          "http://192.168.56.1:3004/api/entry/user/6269219ebbc7b3b228b888a1/"
        );
        console.log("here", res);
      } catch (err) {
        console.log("err", err);
      }
    };
    getEntries();
  }, []);
  return (
    <View>
      {diary.map((entry) => (
        <Text>Hello</Text>
      ))}
    </View>
  );
};

export default Diary;
