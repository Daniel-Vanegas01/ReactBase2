import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function MostrarLista() {
  const [lista, setLista] = useState([]);

  const cargarLista = () => {
    setLista([
      { id: "1", nombre: "Yamaha R1" },
      { id: "2", nombre: "Panigale V4" },
      { id: "3", nombre: "BMW S1000RR" },
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={cargarLista}>
        <Text style={styles.buttonText}>Cargar Lista</Text>
      </TouchableOpacity>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.nombre}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },
});
