import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Diary from "./pages/Diary";

export default function App() {
  return (
    <View style={styles.container}>
      <Diary />
      {/* <Text>How was your Day?</Text>
      <StatusBar style='auto' />
      <TextInput style={styles.textInput} />
      <TouchableOpacity style={styles.button}>
        <Text>Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    backgroundColor: "#D36C55",
    padding: 10,
  },
});
