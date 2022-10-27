import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import SettingScreen from "./screens/SettingScreen";
import PersonalInfoScreen from "./screens/PersonalInfoScreen";
import AcademicInfoScreen from "./screens/AcademicInfoScreen";
import MenuScreen from "./screens/MenuScreen";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://d751-200-118-61-100.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Menu: MenuScreen,
    User: UserScreen,
    Setting: SettingScreen,
    PersonalInfo: PersonalInfoScreen,
    AcademicInfo: AcademicInfoScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#000000",
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

