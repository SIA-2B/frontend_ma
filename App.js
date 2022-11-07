import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import HomeScreen from "./screens/HomeScreen";
import SettingScreen from "./screens/SettingScreen";
import PersonalInfoScreen from "./screens/PersonalInfoScreen";
import AcademicInfoScreen from "./screens/AcademicInfoScreen";
import MenuScreen from "./screens/MenuScreen";
import GradesScreen from "./screens/GradesScreen";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://2c32-161-10-20-195.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Menu: MenuScreen, 
    Setting: SettingScreen,
    PersonalInfo: PersonalInfoScreen,
    AcademicInfo: AcademicInfoScreen,
    Grades: GradesScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#76232f",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFF",
      },
      headerTintColor: "#FFF",
    },
  },
  {
    initialRouteName: "Home",
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
return (
  <ApolloProvider client={client}>
    <Navigator>
	    <HomeScreen />
	  </Navigator>
  </ApolloProvider>
);
}

