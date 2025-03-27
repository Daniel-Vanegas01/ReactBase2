import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MostrarObjeto() {
  const [objeto, setObjeto] = useState(null);

  const mostrarDatos = () => {
    setObjeto({ nombre: "Jose", edad: 19, ciudad: "Bogotá" });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={mostrarDatos}>
        <Text style={styles.buttonText}>Mostrar Datos</Text>
      </TouchableOpacity>
      {objeto && (
        <View>
          <Text>Nombre: {objeto.nombre}</Text>
          <Text>Edad: {objeto.edad}</Text>
          <Text>Ciudad: {objeto.ciudad}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});
