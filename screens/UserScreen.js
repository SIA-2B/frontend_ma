import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";

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
      margin: 15,
      padding: 10,
      borderRadius: 20,
    },
    password: {
      height: 40,
      width: 250,
      borderWidth: 1,
      margin: 15,
      padding: 10,
      borderRadius: 20,
    },
    button: {
      width:100,
      backgroundColor: "#000000",
      borderRadius: 20,
      color: "white",
      alignItems: "center",
      margin: 15,
    },
  });

  return (
    //Pantalla central...
    <ScrollView>
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

          <Pressable //Nos sirve para desestilizar un componente de react
            style={styles.button}
            onPress={() =>
              props.navigation.navigate("User", { username: username })
            }
          >
            <Text style={{ color: "white", padding: 10 }}>Ingresar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const HeaderButtonComponent = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color="#FFFFFF"
    {...props}
  />
);

User.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("username"),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Home"
          iconName="close-outline"
          onPress={() => navData.navigation.navigate("Home")}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Setting"
          iconName="ios-settings-outline"
          onPress={() => navData.navigation.navigate("Setting")}
        />
      </HeaderButtons>
    ),
  };
};

export default User;
