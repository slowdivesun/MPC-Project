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
import Diary from "./pages/Diary";
import Write from "./pages/Write";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Diary /> */}
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Write} />
        <Stack.Screen name='Diary' component={Diary} />
        <Stack.Screen name='Entry' component={Diarypage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
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
