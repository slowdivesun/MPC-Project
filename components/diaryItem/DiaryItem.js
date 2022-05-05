import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";

export default function DiaryItem({ item, onPress }) {
  const { text, date, emotion } = item;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 300,
        height: 50,
        opacity: 0.7,
        borderColor: "white",
        borderWidth: 2,
        marginTop: 5,
      }}
    >
      <Text>{moment(date).format("MMMM Do YYYY")}</Text>
      <Text>{emotion === "positive emotion" ? "Positive" : "Negative"}</Text>
    </TouchableOpacity>
  );
}
