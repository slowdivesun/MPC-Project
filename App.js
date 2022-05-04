import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
} from "react-native";
import Diarypage from "./pages/Diarypage";


export default function App() {
  return (
    <View style={styles.container}>
      <Diarypage />
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
    backgroundColor: "#C1CAE3",
    padding: 10,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
