import { FlatList, StyleSheet } from "react-native";

import Item from "./Item";
import React from "react";

const List = ({ items, openModal }) => {
  return (
    <FlatList
      data={items}
      renderItem={(itemData) => {
        return <Item itemData={itemData} openModal={openModal} />;
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default List;
