import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ColorFondo() {
  const [color, setColor] = useState("white");

  const cambiarColor = () => {
    setColor(color === "white" ? "lightblue" : "white");
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <TouchableOpacity style={styles.button} onPress={cambiarColor}>
        <Text style={styles.text}>Cambiar Color</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
});
