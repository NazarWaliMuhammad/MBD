import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
import styles from './Profile.Styles';
import Header from '../../Components/Header/Header';
import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';
import Phone_Icon from '../../../assets/SvgIcons/Phone.Icon';
import Message_Icon from '../../../assets/SvgIcons/Message.Icon';
import Property_Icon from '../../../assets/SvgIcons/Property.Icon';
import {primary} from '../../Stylings/Colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Text_Input from '../../Components/TextInput/TextInput';
import RNPickerSelect from 'react-native-picker-select';
import {Circle} from 'react-native-svg';
import CitiesModal from '../../Components/CitiesModal/CitiesModal';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';

const Profile_Screen = props => {
  const [showModal, setShowModal] = useState(false);
  const [workPhone, setWorkPhone] = useState(null);
  const [homePhone, setHomePhone] = useState(null);
  const [emergencyPhone, setEmergencyPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [city, setCity] = useState(null);
  const [name, setName] = useState(null);
  const [state, setState] = useState(false);
  const [cities, setCities] = useState(null);
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const placeholder = {
    label: 'Select an option...',
    value: null,
  };

  const updatedCity = newData => {
    setCity(newData);
  };

  useEffect(() => {
    setLoading(true);
    const getCollections = async () => {
      const getCollection = firestore().collection('Cities');
      const getData = await getCollection.get();
      const Cities = getData.docs.map(doc => doc.id);
      setCities(Cities);
      setLoading(false);
    };

    const getData = async () => {
      const user = await firestore()
        .collection('userDetails')
        .doc(auth().currentUser?.uid)
        .get();
      setCity(user._data.city);
      setEmergencyPhone(user._data.emergencyPhone);
      setWorkPhone(user._data.workPhone);
      setHomePhone(user._data.homePhone);
      setEmail(user._data.email);
      setName(user._data.firstName + ' ' + user._data.lastName);
      setLoading(false);
    };

    getData();
    getCollections();
    setLoading(false);
  }, [state]);

  const updatedData = () => {
    if ((workPhone && homePhone && city && emergencyPhone) !== null) {
      setLoading(prev => !prev);
      setState(true);

      firestore()
        .collection('userDetails')
        .doc(auth().currentUser.uid)
        .update({
          workPhone: workPhone,
          homePhone: homePhone,
          city: city,
          emergencyPhone: emergencyPhone,
          state: true,
        })
        .then(() => {
          setLoading(true);
        });
    } else {
      alert('Enter full details');
      setLoading(false);
    }
  };

  const Notifications = [
    {
      name: 'Work Phone',
      contact: workPhone,
      icon: <Phone_Icon />,
    },
    {
      name: 'Home Phone',
      contact: homePhone,
      icon: <Phone_Icon />,
    },
    {
      name: 'Email',
      contact: email,
      icon: <Message_Icon />,
    },
    {
      name: 'Cities',
      contact: city,
      icon: <Property_Icon />,
    },
    {
      name: 'Emergency Contact',
      contact: emergencyPhone,
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
                  <TouchableOpacity style={styles.notification_container1}>
                    <View style={styles.name_Container}>
                      <Text style={styles.title}>{item.name}</Text>
                      {item.contact !== null && state === true ? (
                        <View style={{width: '80%'}}>
                          {index === 3 ? (
                            <Text style={styles.time}> Selected </Text>
                          ) : (
                            <Text style={styles.time}> {item.contact} </Text>
                          )}
                        </View>
                      ) : (
                        <View
                          style={{
                            width: '83%',
                            height: 40,
                            backgroundColor: 'white',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 5,
                          }}>
                          {index === 3 ? (
                            <TouchableOpacity
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                              onPress={() => {
                                setShowModal(true);
                              }}>
                              {city !== null ? (
                                <Text>Selected</Text>
                              ) : (
                                <Text>Select Option</Text>
                              )}
                            </TouchableOpacity>
                          ) : (
                            <TextInput
                              value={item.contact}
                              placeholder="Tap to write"
                              style={{
                                height: 30,
                                color: 'black',
                                width: '100%',
                              }}
                              onChangeText={txt => {
                                if (index === 0) setWorkPhone(txt);
                                else if (index === 1) setHomePhone(txt);
                                else if (index === 3) setCity(txt);
                                else if (index === 4) setEmergencyPhone(txt);
                              }}
                            />
                          )}
                        </View>
                      )}
                    </View>
                    <View
                      style={[
                        styles.icon_con,
                        {
                          backgroundColor:
                            item.name === 'City' || item.name === 'Email'
                              ? primary
                              : '#53A16D',
                        },
                      ]}>
                      {item.icon}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
          <View style={{flex: 1, paddingBottom: 40}}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('W9Form');
              }}
              style={{
                width: '90%',
                backgroundColor: primary,
                height: 50,
                borderRadius: 14,
                alignSelf: 'center',
                margin: 10,

                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
                Sign W9Form
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Licience_Screen', {
                  item: 'licience',
                });
              }}
              style={{
                width: '90%',
                backgroundColor: primary,
                height: 50,
                borderRadius: 14,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
                Upload License
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={updatedData}
              style={{
                width: '90%',
                backgroundColor: primary,
                height: 50,
                borderRadius: 14,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <Text style={{fontSize: 18, color: 'white', fontWeight: '600'}}>
                Update Data
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <CitiesModal
        selectedCities={city}
        items={cities}
        onPressDone={() => {
          props.visible(false);
          setShowModal(false);
        }}
        updateData={updatedCity}
        visible={showModal}
      />
    </View>
  );
};

export default Profile_Screen;
