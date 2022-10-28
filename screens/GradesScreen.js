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

const Grades = (props) => {
    const {data} = useQuery(GRADE_QUERY, { variables: { studentId: 1 } })
    if (!data || !data.User) return null;
    return (
        <ul>
        {data.allGradesByStudent.map(({ courseName, gradeFinal }) =>
          <li key={courseName}>{gradeFinal}</li>
        )}
      </ul>
    );
};

Grades.navigationOptions = (navData) => {
  return {
    headerTitle: "Calificaciones",
  };
};

export default Grades;