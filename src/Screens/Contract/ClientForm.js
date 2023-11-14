import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {primary} from '../../Stylings/Colors';
import Pdf from 'react-native-pdf';
import SignatureCapture from 'react-native-signature-capture';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import RNFS from 'react-native-fs';
import storage from '@react-native-firebase/storage';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';
import Header from '../../Components/Header/Header';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import W9FormModal from '../../Components/W9FormModal/W9FormModal';

const ClientForm = props => {
  source = {uri: `${props.route.params.pdfPath}`, cache: true};
  const [loading, setLoading] = useState();
  const onSubmit = () => {
    console.log();
    const pdfFilePath = `${props.route.params.pdfPath}`;

    // // Replace 'pdfs' with the storage path where you want to store the PDF
    const storagePath = 'pdfs';

    // // Create a reference to the storage path
    const storageRef = storage().ref(
      `Contracts/${auth().currentUser.email}_file.pdf`,
    );

    // // Upload the PDF file
    storageRef.putFile(pdfFilePath).then(async snapshot => {
      const reference = storage().ref(`${snapshot.metadata.name}`);
      const imageUrl = await reference.getDownloadURL();
      // alert('Uploaded');
      firestore()
        .collection('userContracts')
        .doc(auth().currentUser.uid)
        .set({
          downUrl: imageUrl,
        })
        .then(() => {
          alert('Form Submitted');
          props.navigation.navigate('Home_Screen');
        });
    });

    // const pdfFilePath = '/path/to/your/pdf/file.pdf';

    // // Replace 'pdfs' with the storage path where you want to store the PDF
    // const storagePath = 'pdfs';

    // // Create a reference to the storage path
    // const storageRef = storage().ref(`${storagePath}/${Date.now()}_file.pdf`);

    // // Upload the PDF file
    // const task = storageRef.putFile(pdfFilePath);
  };
  // Replace 'pdfFilePath' with the actual path to your PDF file

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={primary} />
      {/* <LoaderModel isVisible={loading} color={primary} />  */}
      <Header onPress={() => props.navigation.navigate('Home_Screen')} />
      <Text style={{textAlign: 'center', fontSize: 24}}>Your W9FORM</Text>
      <Pdf
        showsHorizontalScrollIndicator={true}
        horizontal={true}
        source={source}
        onLoadComplete={numberOfPages => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          // console.log(`Link pressed: ${uri}`);
        }}
        style={{width: '90%', height: 400, alignSelf: 'center'}}
      />
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          marginTop: 30,
          paddingVertical: 10,
          width: '40%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'darkgreen',
          borderRadius: 20,
        }}
        onPress={() => {
          onSubmit();
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClientForm;
