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
    <View>
      {diary.map((entry) => (
        <DiaryItem item={entry} />
      ))}
    </View>
  );
};

export default Diary;
