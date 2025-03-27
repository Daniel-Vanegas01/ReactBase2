import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ValidarNumero() {
  const [numero, setNumero] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un número"
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Text>
        {numero &&
          (parseInt(numero) > 10 ? "Es mayor a 10" : "Es menor o igual a 10")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
});
