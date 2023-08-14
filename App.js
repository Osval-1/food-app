// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import Login from "./src/pages/AuthScreens/Login";
import Button from "./src/components/ui/Button";
import { colors } from "./src/styles/colors";
import Signup from "./src/pages/AuthScreens/Signup";
import Customer from "./src/pages/AuthScreens/Customer";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      {/* <Login/> */}
      {/* <Signup /> */}
      <Customer />
      <ActivityIndicator style={styles.center} animating={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
