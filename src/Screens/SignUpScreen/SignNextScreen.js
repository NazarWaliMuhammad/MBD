import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SignatureCapture from 'react-native-signature-capture';
import RNFS from 'react-native-fs';
import {primary} from '../../Stylings/Colors';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
const SignNextScreen = props => {
  //   const {visible, signUrl, onPressDone} = props;
  const [url, setUrl] = useState(null);

  const sign = useRef(null);
  const _onSaveEvent = async result => {
    // setLoading(true);
    const imageBase64 = result.encoded;
    const filePath = `${RNFS.DocumentDirectoryPath}/signature.png`;

    RNFS.writeFile(filePath, imageBase64, 'base64')
      .then(() => {
        // // Replace 'pdfs' with the storage path where you want to store the PDF

        const storageRef = storage().ref(
          `Signature/${auth().currentUser.email}/signature.png`,
        );

        storageRef.putFile(filePath).then(async snapshot => {
          const reference = storage().ref(`${snapshot.metadata.name}`);
          const imageUrl = await reference.getDownloadURL();
          //   setUrl(imageUrl);
          signUrl(imageUrl);

          //   })
          //   .catch(error => {
          //     // setLoading(false);
          //     console.error('Error uploading image to Firebase Storage:', error);
        });
      })
      .catch(error => {
        console.error('Error saving image:', error);
      });
    // setLoading(false);
  };
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        //   alignItems: 'center',
        //   justifyContent: 'center',
      }}>
      <View
        style={{
          // height: 300,
          // flex: 1,
          justifyContent: 'center ',
          alignItems: 'center',
          // width: '100%',
          marginTop: 40,
        }}>
        <Text style={{fontSize: 24, color: primary}}>
          Sign here your signature{' '}
        </Text>
      </View>
      <SignatureCapture
        style={{flex: 0.2, marginTop: 30}}
        ref={sign}
        onSaveEvent={result => {
          _onSaveEvent(result);
        }}
        showNativeButtons={true}
        showTitleLabel={false}
        backgroundColor="white"
        strokeColor="black"
        minStrokeWidth={4}
        maxStrokeWidth={4}
        viewMode={'landscape'}
      />
    </View>
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
    flex: 1,
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default SignNextScreen;
