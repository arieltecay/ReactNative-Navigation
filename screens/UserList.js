import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../database/firebase";
import { ListItem, Avatar } from "react-native-elements";

const UserList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("user").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,
        });
      });
      setUsers(users);
    });
  }, []);
  console.log(users);

  return (
    <ScrollView>
      <Button
        title="Create User"
        name="Create User"
        onPress={() => props.navigation.navigate("CraeteUserList")}
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() =>
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              })
            }
          >
            <ListItem.Chevron />
            <Avatar
              rounded
              source={{
                uri:
                  "https://reactnativeelements.com/img/avatar/avatar--photo.jpg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UserList;
