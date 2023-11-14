// import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  Image,
} from 'react-native';
import {primary} from '../../Stylings/Colors';

const ImageShowModal = props => {
  return (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image
            style={{
              width: '90%',
              height: 200,
              alignSelf: 'center',
              borderRadius: 20,
              marginVertical: 10,
            }}
            source={{
              uri: `${props.uri}`,
            }}
          />
          <TouchableOpacity
            onPress={props.onPressDone}
            style={{
              width: '90%',
              height: 30,
              alignItems: 'center',
              backgroundColor: primary,
              justifyContent: 'center',
              borderRadius: 20,
              marginVertical: 10,
            }}>
            <Text style={{color: 'white'}}>Done</Text>
          </TouchableOpacity>
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
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default ImageShowModal;
