//PANTALLA PRINCIPAL
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableHighlight,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { GRADE_QUERY } from "../gql/GradesQuery";
import logoUnal from "../images/logoUnal.png";
import welcome from "../images/welcome.jpg";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";

const Home = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          backgroundColor: "#76232f",
          marginTop: 40,
          marginHorizontal: 10,
          borderRadius: 20,
        }}
      >
        <Image
          style={{
            marginHorizontal: 40,
            marginVertical: 40,
          }}
          source={logoUnal}
        />
        <Text
          style={{
            color: "white",
            textAlign: "center",
            marginVertical: 20,
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
          onPress={() =>
            props.navigation.navigate("Menu", { username: username })
          }
        >
          <Text style={{ color: "white", padding: 10 }}>Ingresar</Text>
        </Pressable>
      </View>
    </View>
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
          iconName="ios-settings-outline"
          onPress={() => navData.navigation.navigate("Setting")}
        />
      </HeaderButtons>
    ),
  };
};

export default Home;
