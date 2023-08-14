import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { colors, parameters } from "../../styles/colors";

const Button = ({ background, color, border, action, label }) => {
  return (
    <View style={[styles.container,styles.elevation]}>
      <Pressable
        onPress={action}
        style={{
          backgroundColor:`${background}`,
          width: 250,
          height: 55,
          borderRadius: 15,
          justifyContent: "center",
          alignItems:'center',
          borderWidth: 1,
          borderColor:`${border}`,
          

        }}
      >
        <Text style={{ fontSize: 25, color:`${color}` }}>{label}</Text>
      </Pressable>
    </View>
  );
};

Button.defaultProps = {
  border: "transparent",
};
export default Button;

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        marginBottom:20,        
    },
    elevation:{
      elevation:20,
      shadowColor:'black'
    }
});
