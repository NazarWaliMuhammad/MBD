import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Modal,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import Text_Input from '../TextInput/TextInput';
import {primary} from '../../Stylings/Colors';

const W9FormModal = props => {
  const {visible, onPressDone, obData} = props;
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  useEffect(() => {
    const ob = {contractName: name, contractEmail: email};
    obData(ob);
  }, [name, email]);
  return (
    <Modal visible={props.visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{width: '100%'}}>
            <Text style={{fontSize: 18, fontWeight: '600', margin: 8}}>
              Name :
            </Text>
            <TextInput
              value={name}
              onChangeText={txt => {
                setName(txt);
              }}
              placeholder="Name"
              style={{
                marginStart: 10,
                marginBottom: 10,
                paddingStart: 5,

                paddingVertical: 10,
                borderRadius: 10,
                width: '80%',
                backgroundColor: '#d3d3d3',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600', margin: 8}}>
              Mailing Address :
            </Text>
            <TextInput
              value={email}
              placeholder="Email"
              style={{
                marginStart: 10,
                marginBottom: 10,
                paddingStart: 5,
                paddingVertical: 10,
                borderRadius: 10,
                width: '80%',
                backgroundColor: '#d3d3d3',
              }}
              onChangeText={txt => {
                setEmail(txt);
              }}
            />
          </View>
          <View style={{width: '100%'}}>
            <TouchableOpacity
              onPress={() => {
                onPressDone();
              }}
              style={{
                width: '80%',
                backgroundColor: primary,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                paddingVertical: 10,
                alignSelf: 'center',
                marginTop: 20,
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
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
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 15,
    borderBottomStartRadius: 0,
    alignItems: 'center',
    borderStartEndRadius: 0,
  },
});

export default W9FormModal;
