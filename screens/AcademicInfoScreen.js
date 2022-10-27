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

const AcademicInfo = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const styles = StyleSheet.create({});

  return (
    //Pantalla central...
    <View style={{ flex: 1 }}>
      <Text>AcademicInfooooooooo</Text>
    </View>
  );
};

AcademicInfo.navigationOptions = (navData) => {
  return {
    headerTitle: "Historia Académica",
  };
};

export default AcademicInfo;
