import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ModificarTextos() {
  const [textos, setTextos] = useState(["Texto 1", "Texto 2", "Texto 3"]);

  const cambiarTexto = (index) => {
    const nuevosTextos = [...textos];
    nuevosTextos[index] = `Nuevo ${textos[index]}`;
    setTextos(nuevosTextos);
  };

  return (
    <View style={styles.container}>
      {textos.map((texto, index) => (
        <View key={index} style={styles.textContainer}>
          <Text>{texto}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => cambiarTexto(index)}
          >
            <Text style={styles.buttonText}>Cambiar Texto {index + 1}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textContainer: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});
