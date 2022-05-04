import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryItem from "../components/diaryItem/DiaryItem";

const Diary = () => {
  const [diary, setDiary] = useState([]);
  useEffect(() => {
    const getEntries = async () => {
      const res = await axios.get(
        "http://localhost:3004/api/entry/user/6269219ebbc7b3b228b888a1"
      );
      setDiary(res.data);
    };
    getEntries();
  }, []);
  return (
    <View>
      {diary.map((entry) => {
        <Text>Hello</Text>;
        // <DiaryItem item={entry} />;
      })}
    </View>
  );
};

export default Diary;
