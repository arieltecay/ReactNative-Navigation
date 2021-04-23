import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CraeteUserList from "./screens/CreateUserList";
import UserDetailScreen from "./screens/UserDetailScreen";
import UserList from "./screens/UserList";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserList"
        component={UserList}
        options={{ title: "Users List" }}
      />
      <Stack.Screen
        name="CraeteUserList"
        component={CraeteUserList}
        options={{ title: "Create User" }}
      />
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "User Details" }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    backgroundColor: "darkturquoise",
    fontSize: 25,
  },
});
