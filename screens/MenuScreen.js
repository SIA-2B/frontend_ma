import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";

const Menu = (props) => {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      margin: 20,
      padding: 10,
      borderRadius: 20,
    },
    button: {
      borderRadius: 10,
      backgroundColor: "#000000",
      marginVertical: 20,
      color: "white",
    },
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#000000", fontSize: 20 }}>MENÚ PRINCIPAL</Text>
      <Pressable //Nos sirve para desestilizar un componente de react
        style={styles.button}
        onPress={() => props.navigation.navigate("PersonalInfo")} //No olvidar añadir en App.js
      >
        <Text style={{ color: "white", padding: 10 }}>Datos Personales</Text>
      </Pressable>

      <Pressable //Nos sirve para desestilizar un componente de react
        style={styles.button}
        onPress={() => props.navigation.navigate("AcademicInfo")}
      >
        <Text style={{ color: "white", padding: 10 }}>Historia Académica</Text>
      </Pressable>

      <Pressable //Nos sirve para desestilizar un componente de react
        style={styles.button}
        onPress={() =>
          props.navigation.navigate("inscriptions", { username: input })
        }
      >
        <Text style={{ color: "white", padding: 10 }}>Inscripciones</Text>
      </Pressable>

      <Pressable //Nos sirve para desestilizar un componente de react
        style={styles.button}
        onPress={() =>
          props.navigation.navigate("courses", { username: input })
        }
      >
        <Text style={{ color: "white", padding: 10 }}>Buscador de Cursos</Text>
      </Pressable>

      <Pressable //Nos sirve para desestilizar un componente de react
        style={styles.button}
        onPress={() =>
          props.navigation.navigate("financial", { username: input })
        }
      >
        <Text style={{ color: "white", padding: 10 }}>Área Financiera</Text>
      </Pressable>
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

Menu.navigationOptions = (navData) => {
  return {
    headerTitle: "Menú SIA UNAL",
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
          title="User"
          iconName="person-outline"
          onPress={() => navData.navigation.navigate("User")}
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

export default Menu;