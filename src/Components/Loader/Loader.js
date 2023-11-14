// import React from 'react';
import {View, Modal, StyleSheet, ActivityIndicator} from 'react-native';

import {primary} from '../../Stylings/Colors';

const Loader = props => {
  return (
    <Modal visible={props.visible} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="small" color="#D9D9D9" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '10%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 30,
  },
});

export default Loader;
