import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import firebase from "../database/firebase";

const UserList = (props) => {
  const [loading, setLoading] = useState(true);
  const initialState = {
    id: "",
    name: "",
    email: "",
    phone: "",
  };
  const [state, setState] = useState(initialState);
  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("user").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setState({
      ...user,
      id: doc.id,
    });
    setLoading(false);
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);
  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };
  const deleteUser = async () => {
    const dbRef = firebase.db.collection("user").doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate("UserList");
  };
  const updateUser = async () => {
    const dbRef = firebase.db.collection("user").doc(state.id);
    await dbRef.set({
      name: state.name,
      email: state.email,
      phone: state.phone,
    });
    setState(initialState);
    props.navigation.navigate("UserList");
  };
  const openConfirmatcionDelete = () => {
    Alert.alert("Remove User?", "Are You Suer?", [
      { text: "yes", onPress: () => deleteUser() },
      { text: "no", onPress: () => console.log(false) },
    ]);
  };
  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="User Name"
          onChangeText={(value) => handleChangeText("name", value)}
          value={state.name}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email Name"
          onChangeText={(value) => handleChangeText("email", value)}
          value={state.email}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone Name"
          onChangeText={(value) => handleChangeText("phone", value)}
          value={state.phone}
        />
      </View>
      <View style={styles.inputGroup}>
        <View>
          <Button
            color="green"
            title="Save User"
            onPress={() => updateUser()}
          />
        </View>
        <View>
          <Button
            color="red"
            title="Delete User"
            onPress={() => openConfirmatcionDelete()}
          />
        </View>
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
