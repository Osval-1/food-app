import { StyleSheet, Text, View, TextInput } from "react-native";
import { colors } from "../../styles/colors";

import React from "react";

export default function FormInput() {
  return (
    <View>
      <View style={styles.container}>
        <Text>Search</Text>
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={(value) => handleChange(value)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.grey,
    height: 60,
    marginHorizontal: 20,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
  },
});
