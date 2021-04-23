import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import firebase from "../database/firebase";

const UserList = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };
  const createNewUser = async () => {
    if (state.name === "") {
      alert("Campo nombre Vacío");
    } else {
      try {
        await firebase.db.collection("user").add({
          name: state.name,
          email: state.email,
          phone: state.phone,
        });
        props.navigation.navigate("UserList");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="User Name"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email Name"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone Name"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button title="Save User" onPress={() => createNewUser()}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 5,
    borderBottomColor: "#cccccc",
  },
});

export default UserList;
