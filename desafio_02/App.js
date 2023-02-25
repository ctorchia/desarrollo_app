import { ItemModal, ListItem, NewItemHeader } from "./src/components";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    const newArr = [...items, { id: Date.now(), value: itemText }];
    setItems(newArr);
    setItemText("");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArray) => oldArray.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const onItemDone = (id) => {
    setModalVisible(!modalVisible);
    let indexItemSelected = items.findIndex((item) => item.id === id);
    if (!selectedItem.value.includes("✅")) {
    items[indexItemSelected].value = `${selectedItem.value} ✅`;
    } else {
      items[indexItemSelected].value = selectedItem.value.replace("✅", "");
    }
    setSelectedItem(null);
  };

  return (
    <View style={styles.screen}>
      <NewItemHeader
        onChangeText={onChangeText}
        itemText={itemText}
        addItemToState={addItemToState}
      />

      <ListItem items={items} openModal={openModal} />
      
      <ItemModal
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        onCancelModal={onCancelModal}
        onDeleteModal={onDeleteModal}
        onItemDone={onItemDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
  },
});
