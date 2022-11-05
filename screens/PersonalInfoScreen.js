import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { PERSONALINFO_QUERY } from "../gql/PersonalInfoQuery";

const PersonalInfo = (props) => {
  const getData = async () => {
    let u;
    try {
      SecureStore.getItemAsync("user").then((userName) => {
        setUsername(userName);
        u = userName;
        //console.log("username: " + username);
      });
      return u;
    } catch (e) {
      console.log(e);
      return (u = false);
    }
  };

  const [username, setUsername] = useState(getData());
  const { navigation } = props;

  const { data, loading } = useQuery(PERSONALINFO_QUERY, {
    variables: { user: username },
  });

  function consultaPersonaByUser() {
    try {
      return data.personaByUsername;
    } catch (error) {
      console.log("\nPersona no encontrada...");
      //console.log(error);
      const a = {
        idPersona: 0,
        nombrePersona: "null",
        apellidoPersona: "null",
        tipoDocumento: "null",
        NUIPPersona: "null",
        usernamePersona: "null",
        lugarNacimiento: "null",
        estadoCivil: "null",
        sexoBio: "null",
        etnia: "null",
        correoPersonal: "null",
        telefonoMovil: "null",
        telefonoFijo: "null",
        fechaNacimiento: "null",
        EPS: "null",
        grupoSangre: "null",
        factorRH: "null",
        dirResidencia: "null",
        lugarResidencia: "null",
        estratoSocioeconomico: "null",
        libretaMilitar: "null",
        estadoPersona: "null",
      };
      return a;
    }
  }

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
          Grupo Sanguíneo: {grupoSangre} {factorRH}
        </Text>
        <Text>Dirección de Residencia: {dirResidencia}</Text>
        <Text>Lugar de Residencia: {lugarResidencia}</Text>
        <Text>Estrato Social: {estratoSocioeconomico}</Text>
        <Text>Libreta Militar: {libretaMilitar.toString()}</Text>
        <Text>Estado Persona: {estadoPersona.toString()}</Text>
      </Pressable>
    );
  };

  if (loading) {
    return <Text>Fetching data...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>
        <PersonalItem persona={consultaPersonaByUser()} />
      </Text>
    </View>
  );
};

PersonalInfo.navigationOptions = (navData) => {
  return {
    headerTitle: "Datos Personales",
  };
};

export default PersonalInfo;