import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { GRADE_QUERY } from "../gql/GradesQuery";

const Grades = (props) => {
  const { data, loading } = useQuery(GRADE_QUERY); //execute query

  const GradeItem = ({ grade }) => {
    const { courseName, gradeFinal, gradePeriod } = grade; //get the name of continent
    return (
      <View style={styles.item}>
        <Text style={styles.title}>Nombre:    {courseName}</Text>
        <Text style={styles.title}>Calificación:    {gradeFinal}</Text>
        <Text style={styles.title}>Periodo:   {gradePeriod}</Text>
      </View>
    );
  };

  if (loading) {
    return <Text>Fetching data...</Text> //while loading return this
  }
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data.allGradesByStudent}
          renderItem={({ item }) => <GradeItem grade={item} />}
          keyExtractor={(item, index) => index}
        />
      </SafeAreaView>
    );
};

Grades.navigationOptions = (navData) => {
  return {
    headerTitle: "Calificaciones",
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#76232f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  title2: {
    fontSize: 15,
    color: "#FFFFFF",
  },
});

export default Grades;