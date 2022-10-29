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

import { 
  Menu, 
  MenuItem, 
  MenuDivider 
} from 'react-native-material-menu';

import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { ACADEMIC_STUDENT, ACADEMIC_COURSES} from "../gql/AcademicQuery";

const AcademicInfo = (props) => {

  const [username, setUsername] = useState("");
  const [visible, setVisible] = useState(false);
  const { data, loading } = useQuery(ACADEMIC_STUDENT, {
    variables: {id:"6"},
  });
  const AcademicItem = ({ academic }) => {
    const {
      student_id,
      credits_id,
      papa,
      pa,
      papi,
      study_plan_id,
      study_plan_name,
      facultad,
    } = academic;

    return (
      <Pressable>
        <Text>Id persona: {student_id}</Text>
        <Text>PAPA: {papa} | PAPI: {papi} | PA:{pa}</Text>
      </Pressable>
    );
  };

  if(loading) return <Text> Fetching data...</Text>;

  // const curso = useQuery(ACADEMIC_COURSES, {
  //   variables: {id:"6", name:"sistemas y computacion"},
  // });
  // const course = cur.data;
  // const CoursesItem = ({ academic }) => {
  //   const {
  //     datos_id,
  //     codigo_id,
  //     name,
  //     credit,
  //     periodo,
  //     nota,
  //     plan,
  //   } = courses;

  //   return (
  //     <Pressable>
  //       <Text>{codigo_id} | {name} | {credit} | {periodo} | {nota} </Text>
  //       {/*<Text>PAPA: {papa} | PAPI: {papi} | PA:{pa}</Text>*/}
  //     </Pressable>
  //   );
  // };
  // console.log(curso);
  // if(loading1) return <Text> Fetching data...</Text>;

  const styles = StyleSheet.create({});

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  let paso = 0;
  const tamanio = data.callingById.length;
  
  return (
    //Pantalla central...
    <View style={{ flex: 1 }}>
    
      <View style={{ justifyContent: 'flex-start', marginTop: 25, marginBottom:30}}>
        <Menu style = {{ marginLeft: 5, marginRight: 5, width: "93%"}}
          visible={visible}
          anchor={<Text style={{marginLeft:'40%'}} onPress={showMenu}>Estudiante</Text>}
          onRequestClose={hideMenu}>
          {data.callingById.map((person) => {
            return (
              <MenuItem style = {{}} onPress={hideMenu}>
              {person.study_plan_id} | {person.facultad} - {person.study_plan_name}</MenuItem>
            );
          })}
        </Menu>
      </View>

      <View>
        <View style={{alignItems: "center"}}><Text>INFORMACION DEL ESTUDIANTE</Text></View>
        <AcademicItem academic={data.callingById[0]} />
      </View>

     {/* <View>
        <View style={{marginTop: 20, alignItems: "center"}}><Text>INFORMACION DE LOS CURSOS</Text></View>
        {course.coursesById.callingById.map((mat) => {
          return (
            <CoursesItem courses={mat} />
          );
        })}
      </View>*/}


    </View>
  );
};

AcademicInfo.navigationOptions = (navData) => {
  return {
    headerTitle: "Historia Académica",
  };
};

export default AcademicInfo;
