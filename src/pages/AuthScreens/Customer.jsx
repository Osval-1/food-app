import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../../components/ui/Button";
import FormInput from "../../components/ui/FormInput";
import InteractVector from "../../assets/images/InteractVector.jpg";
import { colors } from "../../styles/colors";

import React from "react";

export default function Customer() {
  return (
    <View style={styles.container}>
      <Image source={InteractVector} style={styles.image} />
      <View>
        <Button
          color={colors.black}
          label="Sign up as Restaurant"
          background={colors.white}
        />
        <Button
          color={colors.black}
          label="Sign up as Customer"
          background={colors.white}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1FF91B",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: "25%",
  },
  image: {
    borderRadius: 100,
    // marginTop:'25%',
  },
});
