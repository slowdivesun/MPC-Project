import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";

export default function DiaryItem({ item }) {
  const { text, date, emotion } = item;
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: 300,
        backgroundColor: "white",
        opacity: 0.7,
      }}
    >
      <Text>{moment(date).format("MMMM Do YYYY")}</Text>
      <Text>{emotion === 0 ? "Negative" : "Positive"}</Text>
    </TouchableOpacity>
  );
}
