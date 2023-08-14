import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { colors, parameters } from "../../styles/colors";
import Button from "../../components/ui/Button";
import logo from "../../assets/images/download.png";

export default function Login() {
  // const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.button}>
        <Button text={'Get Started'} color={colors.white} background={colors.black} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: "25%",
    left: "25%",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom:100
  },
  button: {
    marginTop: 100,
  },
});
