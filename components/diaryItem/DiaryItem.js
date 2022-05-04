import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";

export default function DiaryItem({ item }) {
  const { text, date, emotion } = item;
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", justifyContent: "space-between" }}
    >
      <Text>Entry on {moment(date).format("MMMM Do YYYY")}</Text>
      <Text>{emotion === 0 ? "Negative" : "Positive"}</Text>
    </TouchableOpacity>
  );
}
