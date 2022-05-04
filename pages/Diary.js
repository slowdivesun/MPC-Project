import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DiaryItem from "../components/diaryItem/DiaryItem";
import { ImageBackground } from "react-native-web";

// background image source
const image = {
  uri: "https://preview.redd.it/ecls76uo6cw81.png?width=2560&format=png&auto=webp&s=f71cb08160ddb83451172f9ffed5d6340283a480",
};

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
