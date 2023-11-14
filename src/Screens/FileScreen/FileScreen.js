import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
import styles from './File.Styles';
import Header from '../../Components/Header/Header';
import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';
import Phone_Icon from '../../../assets/SvgIcons/Phone.Icon';
import Message_Icon from '../../../assets/SvgIcons/Message.Icon';
import Property_Icon from '../../../assets/SvgIcons/Property.Icon';
import {primary} from '../../Stylings/Colors';
import Up_Arrow_Icon from '../../../assets/SvgIcons/Up.Arrow.Icon';
import Down_Arrow_Icon from '../../../assets/SvgIcons/DownArrow.Icon';
import File_Icon from '../../../assets/SvgIcons/File.Icon';
import DocumentPicker from 'react-native-document-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import ImageShowModal from '../../Components/ImageShowModal/ImageShowModal';
import RNFS from 'react-native-fs';
import storage from '@react-native-firebase/storage';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';
import {useIsFocused} from '@react-navigation/native';

const File_Screen = props => {
  const isFocused = useIsFocused();

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageModal, setImageModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(null);
  const [downUrl, setDownUrl] = useState();

  const downloadFile = async (downUrl, fileName) => {
    try {
      setLoading(true);

      const url = `${downUrl}`;
      const localFilePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

      RNFS.downloadFile({
        fromUrl: url,
        toFile: localFilePath,
        background: true,
        discretionary: true,

        progress: res => {
          const progress = (res.bytesWritten / res.contentLength) * 100;
          console.log(`Progress: ${progress.toFixed(2)}%`);
          setLoading(false);
        },
      })
        .promise.then(response => {
          setLoading(false);
          alert('File downloaded!', response);
        })
        .catch(err => {
          setLoading(false);
          alert('Download error:', err);
        });
    } catch (error) {
      setLoading(false);
      alert('Error downloading file:', error);
    }
  };

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      const user = await firestore()
        .collection('fileDetails')
        .doc(auth().currentUser?.uid)
        .get();

      setSelectedFile(user._data.file);
    };

    getData();

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [isFocused, loaded]);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      if (result) {
        setLoading(true);
      }

      const dataName = result.map(doc => doc.name);
      const dataType = result.map(doc => doc.type);
      const dataSize = result.map(doc => doc.size);
      const dataUri = result.map(doc => doc.uri);

      const reference = storage().ref(`${auth().currentUser.uid}/${dataName}`);
      const pathToFile = `${dataUri}`;

      await reference.putFile(pathToFile);
      const url = await reference.getDownloadURL();

      setDownUrl(url);

      if (selectedFile === null) {
        firestore()
          .collection('fileDetails')
          .doc(auth().currentUser?.uid)
          .set({
            file: [
              {
                name: dataName,
                type: dataType,
                size: dataSize,
                uri: dataUri,
                downURL: url,
              },
            ],
          })
          .then(() => {
            alert('File Uploaded');
            setLoading(false);
            setLoaded(1);
          });
      } else {
        firestore()
          .collection('fileDetails')
          .doc(auth().currentUser?.uid)
          .set({
            file: [
              ...selectedFile,
              {
                name: dataName,
                type: dataType,
                size: dataSize,
                uri: dataUri,
                downURL: url,
              },
            ],
          })
          .then(() => {
            alert('File Uploaded');
            setLoading(false);
            setLoaded(1);
          });
      }
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

  const Notifications = [
    {
      name: 'File Title',
      contact: 'File Title File Size',
      icon: <Phone_Icon />,
    },
    {
      name: 'File Title',
      contact: 'File Title File Size',
      icon: <Phone_Icon />,
    },
    {
      name: 'File Title',
      contact: 'File Title File Size',
      icon: <Message_Icon />,
    },
    {
      name: 'File Title',
      contact: 'File Title File Size',
      icon: <Property_Icon />,
    },
    {
      name: 'File Title',
      contact: 'File Title File Size',
      icon: <Phone_Icon />,
    },
  ];

  return (
    <View style={styles.Main_Container}>
      <LoaderModel isVisible={loading} color={primary} />

      <Header
        Header_Title={'Notification'}
        onPress={() => props.navigation.navigate('Home_Screen')}
      />
      <ScrollView>
        <Text style={[styles.main_title]}>Files</Text>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', marginHorizontal: 30}}
          onPress={pickDocument}>
          <Up_Arrow_Icon />
        </TouchableOpacity>

        <View style={{marginTop: 30}}>
          <FlatList
            data={selectedFile}
            renderItem={({item, index}) => {
              return (
                <View style={styles.notification_container}>
                  <TouchableOpacity
                    onPress={() => {
                      const name = item.name;
                      console.log(typeof item.name);
                    }}
                    style={styles.notification_container1}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <File_Icon />
                      <View style={styles.name_Container}>
                        <Text style={styles.title}>{item.name}</Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        downloadFile(item.downURL, item.name);
                      }}>
                      <View style={[styles.icon_con]}>
                        <Down_Arrow_Icon />
                      </View>
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default File_Screen;
