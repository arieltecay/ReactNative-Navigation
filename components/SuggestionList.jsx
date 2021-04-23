import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
const list = [
  { name: "Ariel", id: 1 },
  { name: "Micaela", id: 2 },
  { name: "Malvina", id: 3 },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.name, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

const SuggestionList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems:"center"
  },
  name: {
    fontSize: 32,
  },
});

export default SuggestionList;
