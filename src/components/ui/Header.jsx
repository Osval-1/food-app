import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";
import React from "react";

export default function Header({label,icon}) {
  return (
    <View style={styles.container}>
        
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: row,
    backgroundColor:colors.primary
  },
});
