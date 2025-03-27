import React from "react";
import { View, Text } from "react-native";
import ColorFondo from "./ColorFondo";
import ModificarTextos from "./ModificarTextos";
import ValidarNumero from "./ValidarNumero";
import MostrarObjeto from "./MostrarObjeto";
import MostrarLista from "./MostrarLista";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Prueba Técnica</Text>
      <ColorFondo />
      <ModificarTextos />
      <ValidarNumero />
      <MostrarObjeto />
      <MostrarLista />
    </View>
  );
}
