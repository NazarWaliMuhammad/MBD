import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
import styles from './EditProfile.Styles';
import Header from '../../Components/Header/Header';
import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';
import Phone_Icon from '../../../assets/SvgIcons/Phone.Icon';
import Message_Icon from '../../../assets/SvgIcons/Message.Icon';
import Property_Icon from '../../../assets/SvgIcons/Property.Icon';
import {primary} from '../../Stylings/Colors';
import Up_Arrow_Icon from '../../../assets/SvgIcons/Up.Arrow.Icon';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Text_Input from '../../Components/TextInput/TextInput';
import CitiesModal from '../../Components/CitiesModal/CitiesModal';
import storage from '@react-native-firebase/storage';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';
import DocumentPicker from 'react-native-document-picker';

const Edit_Profile_Screen = props => {
  const [emergencyPhone, setEmergencyPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [city, setCity] = useState([]);
  const [name, setName] = useState(null);
  const [state, setState] = useState(false);
  const [cities, setCities] = useState(null);
  const [workPhone, setWorkPhone] = useState(null);
  const [emailState, setEmailState] = useState(null);
  const [cityState, setCityState] = useState(null);
  const [nameState, setNameState] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [workPhoneState, setWorkPhoneState] = useState(null);
  const [paymentState, setPaymentState] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [downUri , setDownUri] = useState()

  const updatedCity = newData => {
    setCity(newData);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const user = await firestore()
        .collection('userDetails')
        .doc(auth().currentUser?.uid)
        .get();

      setCity(user._data.city);
      setEmergencyPhone(user._data.emergencyPhone);
      setWorkPhone(user._data.workPhone);
      setEmail(user._data.email);
      setName(user._data.firstName + ' ' + user._data.lastName);
    };

    const getCollections = async () => {
      const getCollection = firestore().collection('Cities');
      const getData = await getCollection.get();
      const Cities = getData.docs.map(doc => doc.id);

      setCities(Cities);
    };

    const getFiles = async () => {
      const user = await firestore()
        .collection('fileDetails')
        .doc(auth().currentUser?.uid)
        .get();
      setLoading(true);

      setSelectedFile(user._data.file);
    };

    getFiles();
    getCollections();
    getData();
    setLoading(false);
  }, []);

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

      const reference = storage().ref(`${dataName}`);
      const pathToFile = `${dataUri}`;

      await reference.putFile(pathToFile);
      const url = await reference.getDownloadURL();

      // setDownUrl(url);

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
            console.log('File added!');
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
            console.log('File added!');
          });
      }

      alert('File Uploaded');
      setLoading(true);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        setLoading(true);

        alert('Document Picking is canceled');
      } else {
        setLoading(true);

        throw err;
      }
    }
  };

  const Notifications = [
    {
      name: 'Email ',
      contact: email,
      icon: <Phone_Icon />,
      pressEdit: () => {
        setEmailState(true);
      },
      pressDone: () => {
        firestore()
          .collection('userDetails')
          .doc(auth().currentUser.uid)
          .update({
            email: email,
          })
          .then(() => {
            console.log('User updated!');
          });
        setEmailState(false);
      },
      state: emailState,
      onChangetxt: txt => {
        setEmail(txt);
      },
    },
    {
      name: 'City',
      contact: city,
      icon: <Phone_Icon />,
      pressEdit: () => {
        setCityState(true);
      },
      pressDone: () => {
        firestore()
          .collection('userDetails')
          .doc(auth().currentUser.uid)
          .update({
            city: city,
          })
          .then(() => {
            console.log('User updated!');
          });
        setCityState(false);
      },
      state: cityState,
      onChangetxt: txt => {
        setCity(txt);
      },
    },
    {
      name: 'Phone',
      contact: workPhone,
      icon: <Property_Icon />,
      pressEdit: () => {
        setWorkPhoneState(true);
      },
      pressDone: () => {
        firestore()
          .collection('userDetails')
          .doc(auth().currentUser.uid)
          .update({
            workPhone: workPhone,
          })
          .then(() => {
            console.log('User updated!');
          });
        setWorkPhoneState(false);
      },
      state: workPhoneState,
      onChangetxt: txt => {
        setWorkPhone(txt);
      },
    },
    {
      name: 'Files',
      contact: 'Select File',
      icon: <Phone_Icon />,
      pressEdit: () => {
        pickDocument();
      },
      pressDone: () => {},
      state: paymentState,
    },
    {
      name: 'Payment',
      contact: '',
      icon: <Phone_Icon />,
      pressEdit: () => {
        alert(
          'The Payment Data can be submit only once in the payment section  ',
        );
      },
      pressDone: () => {},
      state: paymentState,
    },
  ];

  return (
    <View style={styles.Main_Container}>
      <LoaderModel visible={loading} color={primary} />
      <Header
        Header_Title={'Notification'}
        onPress={() => props.navigation.navigate('Home_Screen')}
      />
      <ScrollView>
        <View style={styles.notification_category}>
          <Lite_Profile_Icon />
        </View>
        <Text style={[styles.main_title]}>{name}</Text>

        <View style={{marginTop: 30}}>
          <FlatList
            data={Notifications}
            renderItem={({item, index}) => {
              return (
                <View style={styles.notification_container}>
                  {item.state ? (
                    <View style={{width: '100%', alignSelf: 'center'}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        {index === 1 ? (
                          <TouchableOpacity
                            style={
                              {
                                // flexDirection: 'row',
                                // justifyContent: 'space-between',
                                // alignItems: 'center',
                              }
                            }
                            onPress={() => {
                              setShowModal(true);
                            }}>
                            <Text style={styles.title}>{item.name}</Text>

                            {city != [] ? (
                              <View
                                style={{
                                  width: '90%',
                                  height: 25,
                                  borderRadius: 5,
                                  backgroundColor: 'white',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text>selected</Text>
                              </View>
                            ) : (
                              <View
                                style={{
                                  width: '90%',
                                  height: 25,
                                  borderRadius: 5,
                                  backgroundColor: 'white',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text style={{}}>Select Option</Text>
                              </View>
                            )}
                          </TouchableOpacity>
                        ) : (
                          <TextInput
                            value={item.contact}
                            placeholder={item.name}
                            style={{
                              backgroundColor: 'white',
                              width: '80%',
                              height: 40,
                              borderRadius: 8,
                            }}
                            onChangeText={txt => {
                              item.onChangetxt(txt);
                            }}
                          />
                        )}
                        <TouchableOpacity onPress={item.pressDone}>
                          <Image
                            style={{
                              width: 30,
                              height: 30,
                              borderRadius: 20,
                            }}
                            source={{
                              uri: 'https://png.pngtree.com/png-vector/20210212/ourmid/pngtree-green-correct-icon-png-image_2912233.jpg',
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ) : (
                    <TouchableOpacity style={styles.notification_container1}>
                      {item.name === 'Payment' ? (
                        <View style={styles.name_Container}>
                          <Text style={styles.title}>{item.name} </Text>
                        </View>
                      ) : (
                        <View style={styles.name_Container}>
                          <Text style={styles.title}>{item.name}</Text>

                          {item.contact === '' || item.contact === null ? (
                            <Text style={styles.time}>
                              Edit to add {item.name}
                            </Text>
                          ) : (
                            <View>
                              {index === 1 ? (
                                <Text style={styles.time}>
                                  Cities are Selected
                                </Text>
                              ) : (
                                <Text style={styles.time}>{item.contact} </Text>
                              )}
                            </View>
                          )}
                        </View>
                      )}

                      {item.name === 'Files' ? (
                        <TouchableOpacity
                          onPress={pickDocument}
                          style={{marginHorizontal: 20}}>
                          <Up_Arrow_Icon />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={item.pressEdit}>
                          <View style={[styles.icon_con, {}]}>
                            {item.name === 'Payment' ? (
                              <Text style={styles.edit}>Show</Text>
                            ) : (
                              <Text style={styles.edit}>Edit</Text>
                            )}
                          </View>
                        </TouchableOpacity>
                      )}
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <CitiesModal
        selectedCities={city}
        items={cities}
        onPressDone={() => {
          setShowModal(false);
        }}
        updateData={updatedCity}
        visible={showModal}
      />
    </View>
  );
};

export default Edit_Profile_Screen;
