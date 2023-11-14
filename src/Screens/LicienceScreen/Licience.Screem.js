import React, {useEffect, useState} from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
  Dimensions,
  StatusBar,
} from 'react-native';
import styles from './Licience.Styles';
import Header from '../../Components/Header/Header';
import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
import {inputBackColor, primary, white} from '../../Stylings/Colors';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButtonComponents';
import Clipboard from '@react-native-clipboard/clipboard';
import Up_Arrow_Icon from '../../../assets/SvgIcons/Up.Arrow.Icon';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Text_Input from '../../Components/TextInput/TextInput';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';
import MessageBox from '../../Components/DialogBox/MessageBoxComponent';
import Main_Logo from '../../../assets/SvgIcons/Main.Logo';
import RNFS from 'react-native-fs';
import storage from '@react-native-firebase/storage';
import DocumentPicker from 'react-native-document-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Pdf from 'react-native-pdf';
import {useIsFocused} from '@react-navigation/native';

const Licence_Screen = props => {
  const {item} = props.route.params;
  const [croppedImage, setCroppedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [massageLicense, setMassageLicense] = useState(null);
  const [loaded, setLoaded] = useState(null);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const user = await firestore()
        .collection('userDetails')
        .doc(auth().currentUser?.uid)
        .get();
      setMassageLicense(user._data.massageLicense);
      // console.log(user._data.massageLicense);
    };
    getData();

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loaded, isFocused]);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      if (result) {
        setLoading(true);
      }

      const dataName = result.map(doc => {
        return doc.name;
      });

      const reference = storage().ref(
        `License/${auth().currentUser?.email}/License.png`,
      );
      const pathToFile = `${result[0].uri}`;

      await reference.putFile(pathToFile);
      const url = await reference.getDownloadURL();

      firestore()
        .collection('userDetails')
        .doc(auth().currentUser?.uid)
        .update({
          massageLicense: url,
        })
        .then(() => {
          setLoaded(1);
          setLoading(false);
          console.log('User added!');
        });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        alert('Document Picking is canceled');
        setLoading(false);
      } else {
        setLoading(false);
        throw err;
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={primary} />
      <LoaderModel isVisible={loading} color={primary} />
      <Header onPress={() => props.navigation.navigate('Home_Screen')} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {massageLicense != null ? (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 24}}>License Uploaded</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              paddingTop: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              pickDocument();
            }}>
            <Up_Arrow_Icon />
            <Text style={{paddingVertical: 20}}>
              Upload a Picture of Massage License
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Licence_Screen;
