import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function DiaryItem({ item }) {
  const { text, date, emotion } = item;
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", justifyContent: "space-betwen" }}
    >
      <Text>Entry on {date}</Text>
      <Text>{emotion === 0 ? "Negative" : "Positive"}</Text>
    </TouchableOpacity>
  );
}
