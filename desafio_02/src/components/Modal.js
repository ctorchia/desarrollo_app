import { Modal as RNmodal, StyleSheet, Text, View } from "react-native";

import Button from "./Button";
import React from "react";

const Modal = ({
  modalVisible,
  selectedItem,
  onCancelModal,
  onDeleteModal,
  onItemDone
}) => {
  return (
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Acciones</Text>
          <Text style={styles.modalText}>
            ¿Que acción desea realizar con el item{" "}
            <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
          </Text>
          <View style={styles.modalActions}>
            <Button
              styleButtonType={styles.buttonDone}
              title="Realizada"
              onPress={() => {
                onItemDone(selectedItem.id);
              }}
            />
            <Button
              styleButtonType={styles.buttonDelete}
              title="Eliminar"
              onPress={() => {
                onDeleteModal(selectedItem.id);
              }}
            />
              <Button
                styleButtonType={styles.buttonCancel}
                title="Cancelar"
                onPress={onCancelModal}
              />
          </View>
        </View>
      </View>
    </RNmodal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonDone: {
    backgroundColor: "#04AA6D",
  },
  buttonDelete: {
    backgroundColor: "red",
  },
  buttonCancel: {
    backgroundColor: "blue",
  },
});
