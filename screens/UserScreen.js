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
import { GRADE_QUERY } from "../gql/Query";

const User = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const styles = StyleSheet.create({
    username: {
      height: 40,
      width: 250,
      borderWidth: 1,
      marginTop: 10,
      margin: 2,
      padding: 10,
      borderRadius: 20,
    },
    password: {
      height: 40,
      width: 250,
      borderWidth: 1,
      margin: 2,
      padding: 10,
      borderRadius: 20,
    },
    button: {
      backgroundColor: "#000000",
      color: "white",
    },
  });

  return (
    //Pantalla central...
    <View style={{ flex: 1 }}>
      {/*<Ionicons name="ios-person-circle-outline" size={80} color="#000000" />*/}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 30,
          padding: 20,
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 30, textAlign: "center" }}>
          Bienvenido a la APP de Servicios Académicos
        </Text>
        <Text style={{ color: "#FFFFFF", fontSize: 20, textAlign: "center" }}>
          A continuación por favor ingrese sus credenciales de acceso:
        </Text>
      </View>
      <View style={{ marginHorizontal: 100, marginVertical: 100 }}>
        <Text style={{ fontSize: 15, textAlign: "left" }}>Usuario:</Text>
        <View style={{ alignItems: "center" }}>
          <TextInput
            style={styles.username}
            placeholder="Usuario"
            username={username}
            onChangeText={(value) => setUsername(value)}
          />
        </View>
        <Text style={{ color: "#000000", fontSize: 15, textAlign: "left" }}>
          Contraseña:
        </Text>
        <View style={{ alignItems: "center" }}>
          <TextInput
            style={styles.password}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </View>

        <Button
          style={styles.button}
          title="Login"
          color="#000"
          onPress={() =>
            props.navigation.navigate("User", { username: username })
          }
        />
      </View>
    </View>
  );
};

User.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("username"),
  };
};

export default User;
