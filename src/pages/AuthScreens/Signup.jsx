import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { colors, parameters } from "../../styles/colors";

export default function Signup() {
  const [password, setPassword] = useState("");
  const signUp = async () => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify(password),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (value) => {
    setPassword(value);
  };
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

const styles = StyleSheet.create({});
