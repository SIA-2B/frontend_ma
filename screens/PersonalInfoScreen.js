import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { PERSONALINFO_QUERY } from "../gql/PersonalInfoQuery";

const PersonalInfo = (props) => {
  const [username, setUsername] = props. useState("");
  const { data, loading } = useQuery(PERSONALINFO_QUERY);

  const PersonalItem = ({ persona }) => {
    const {
      idPersona,
      nombrePersona,
      apellidoPersona,
      tipoDocumento,
      NUIPPersona,
      usernamePersona,
      lugarNacimiento,
      estadoCivil,
      sexoBio,
      etnia,
      correoPersonal,
      telefonoMovil,
      telefonoFijo,
      fechaNacimiento,
      EPS,
      grupoSangre,
      factorRH,
      dirResidencia,
      lugarResidencia,
      estratoSocioeconomico,
      libretaMilitar,
      estadoPersona,
    } = persona;

    if (usernamePersona === "developer") {
      return (
        <Pressable>
          <Text>TIUN: {idPersona}</Text>
          <Text>Nombres: {nombrePersona}</Text>
          <Text>Apellidos: {apellidoPersona}</Text>
          <Text>
            Documento: {tipoDocumento} {NUIPPersona}
          </Text>
          <Text>Username: {usernamePersona}</Text>
          <Text>Lugar de Nacimiento: {lugarNacimiento}</Text>
          <Text>Estado Civil: {estadoCivil}</Text>
          <Text>Sexo: {sexoBio}</Text>
          <Text>Etnia: {etnia}</Text>
          <Text>Correo Personal: {correoPersonal}</Text>
          <Text>Teléfono Movil: {telefonoMovil}</Text>
          <Text>Teléfono Fijo: {telefonoFijo}</Text>
          <Text>Fecha de Nacimiento: {fechaNacimiento}</Text>
          <Text>EPS: {EPS}</Text>
          <Text>
            Grupo Sangüíneo: {grupoSangre} {factorRH}
          </Text>
          <Text>Dirección de Residencia: {dirResidencia}</Text>
          <Text>Lugar de Residencia: {lugarResidencia}</Text>
          <Text>Estrato Social: {estratoSocioeconomico}</Text>
          <Text>Libreta Militar: {libretaMilitar.toString()}</Text>
          <Text>Estado Persona: {estadoPersona.toString()}</Text>
        </Pressable>
      );
    } else {
      return;
    }
  };

  if (loading) {
    return <Text>Fetching data...</Text>;
  }

  const styles = StyleSheet.create({});

  return (
    //Pantalla central...
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.allPersonas}
        renderItem={({ item }) => <PersonalItem persona={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

PersonalInfo.navigationOptions = (navData) => {
  return {
    headerTitle: "Datos Personales",
  };
};

export default PersonalInfo;