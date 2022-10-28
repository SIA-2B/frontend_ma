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
import { GRADE_QUERY } from "../gql/GradesQuery";

const PersonalInfo = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const PersonalItem = ({ grade }) => {
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

  const styles = StyleSheet.create({});

  return (
    //Pantalla central...
    <View style={{ flex: 1 }}>
      <Text>PersonalInfoooo</Text>
      <FlatList
        data={data.allGrades}
        renderItem={({ item }) => <GradeItem grade={item} />}
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
