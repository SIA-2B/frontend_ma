import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useQuery, useMutation } from "@apollo/client";
import logoUnal from "../images/logoUnal.png";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";
import * as SecureStore from "expo-secure-store";
import { AUTH_QUERY } from "../gql/AuthQuery";

const setUserName = (userName) => {
  return SecureStore.setItemAsync("user", userName);
};

const setToken = (token) => {
  return SecureStore.setItemAsync("secure_token", token);
};

const getUserName = () => {
  return SecureStore.getItemAsync("user");
};

const getToken = () => {
  return SecureStore.getItemAsync("secure_token");
};

const Home = (props) => {
  setUserName("");
  setToken("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [getAPIToken] = useMutation(AUTH_QUERY);

  const state = {
    isLoading: false,
  };

  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      margin: 20,
      padding: 10,
      borderRadius: 20,
    },
    username: {
      height: 40,
      width: 250,
      borderWidth: 1,
      marginTop: 10,
      margin: 15,
      padding: 10,
      borderRadius: 10,
      borderColor: "#3c3d3d",
    },
    password: {
      height: 40,
      width: 250,
      borderWidth: 1,
      margin: 15,
      padding: 10,
      borderRadius: 10,
      borderColor: "#3c3d3d",
    },
    button: {
      width: 100,
      backgroundColor: "#3c3d3d",
      borderRadius: 10,
      color: "white",
      alignItems: "center",
      margin: 15,
    },
  });

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "#76232f",
            marginTop: 20,
            marginHorizontal: 10,
            borderRadius: 20,
          }}
        >
          <Image
            style={{
              marginHorizontal: 40,
              marginTop: 30,
            }}
            source={logoUnal}
          />
          <Text
            style={{
              color: "white",
              textAlign: "center",
              marginTop: 30,
              marginBottom: 30,
              marginHorizontal: 30,
              fontSize: 26,
            }}
          >
            Bienvenido al Sistema de Información Académica
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            marginHorizontal: 100,
            marginVertical: 50,
          }}
        >
          <Text style={{ color: "#3c3d3d", fontSize: 15, textAlign: "left" }}>
            Usuario:
          </Text>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.username}
              placeholder="Usuario"
              username={username}
              onChangeText={(value) => setUsername(value)}
            />
          </View>
          <Text style={{ color: "#3c3d3d", fontSize: 15, textAlign: "left" }}>
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
            onPress={async (e) => {
              try {
                console.log("\nHaciendo petición...");

                const a = await getAPIToken({
                  variables: { username: username, password: password },
                });

                setUserName(username);
                setToken(a.data.createAuth.token);

                getUserName().then((userName) => console.log(userName));
                getToken().then((token) => console.log(token));

                state.isLoading = false;
              } catch (error) {
                console.log("Upps... Persona no encontrada; \n" + error);
              }
            }}
          >
            <Text style={{ color: "white", padding: 10 }}>Ingresar</Text>
          </Pressable>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {state.isLoading && <ActivityIndicator color={"#76232f"} />}
          </View>
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

Home.navigationOptions = (navData) => {
  return {
    headerTitle: "SIA UNAL",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Menu"
          iconName="menu-outline"
          onPress={() => navData.navigation.navigate("Menu")}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="PersonalInfo"
          iconName="person-outline"
          onPress={() => navData.navigation.navigate("PersonalInfo")}
        />

        <Item
          title="Setting"
          iconName="exit-outline"
          onPress={() => navData.navigation.navigate("Setting")}
        />
      </HeaderButtons>
    ),
  };
};

export default Home;
