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
import {
	Item,
	HeaderButton,
	HeaderButtons,
} from "react-navigation-header-buttons";

const Home = (props) => {
	const [input, setInput] = useState("");
	const { data, loading } = useQuery(GRADE_QUERY);

	const styles = StyleSheet.create({
		input: {
		  height: 40,
		  borderWidth: 1,
		  margin: 2,
		  padding: 10,
		  borderRadius: 20,
		},
		button: {
			backgroundColor: "#000000",
			color: "white",
		}
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
			<Text style={{ color: "#000000", fontSize: 20 }}>Home Screen!</Text>
			{/* <Ionicons name="ios-home" size={80} color="#000000" /> */}
			<FlatList
				data={data.allGrades}
				renderItem={({ item }) => <GradeItem grade={item} />}
				keyExtractor={(item, index) => index}
			/>

			<TextInput
				style={styles.input}
				placeholder="Enter your username"
				value={input}
				onChangeText={(value) => setInput(value)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Enter your password"
				value={input}
				onChangeText={(value) => setInput(value)}
			/>
			<Button
				style={styles.button}
				title="Login"
				color="#000"
				onPress={() => props.navigation.navigate("User", { username: input })}
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
		headerTitle: "Sistema de servicios academicos",
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

export default Home;
