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
import { GRADE_QUERY } from "../gql/Query";
import logoUnal from "../images/logoUnal.png";
import welcome from "../images/welcome.jpg";
import {
  Item,
  HeaderButton,
  HeaderButtons,
} from "react-navigation-header-buttons";

const Home = (props) => {
  const [input, setInput] = useState("");

  let { data, loading } = useQuery(GRADE_QUERY);

  if (data === undefined) {
    data = "";
  }

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

  const GradeItem = ({ grade }) => {
    const { courseName, gradeFinal } = grade;

    return (
      <Pressable>
        <Text>{courseName}</Text>
      </Pressable>
    );
  };
  if (loading) {
    return <Text>Fetching data...</Text>;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          backgroundColor: "black",
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
          backgroundColor: "black",
          marginVertical: 20,
          marginHorizontal: 10,
          borderRadius: 20,
        }}
      >
        <Image
          style={{
            alignContent: "center",
            marginHorizontal: 10,
            marginVertical: 10,
            width: 300,
            height: 250,
            borderRadius: 10,
          }}
          source={welcome}
        />
      </View>
      <FlatList
        data={data.allGrades}
        renderItem={({ item }) => <GradeItem grade={item} />}
        keyExtractor={(item, index) => index}
      />
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

export default Home;
