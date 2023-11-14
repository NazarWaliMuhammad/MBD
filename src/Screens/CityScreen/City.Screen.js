import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
import styles from './City.Styles';
import Header from '../../Components/Header/Header';
import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
import Phone_Icon from '../../../assets/SvgIcons/Phone.Icon';
import Message_Icon from '../../../assets/SvgIcons/Message.Icon';
import Property_Icon from '../../../assets/SvgIcons/Property.Icon';
import {primary} from '../../Stylings/Colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';
import {useIsFocused} from '@react-navigation/native';

const City_Screen = props => {
  const [cities, setCities] = useState(null);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getCollections = async () => {
      setLoading(true);
      const getCollection = firestore().collection('Cities');
      const getData = await getCollection.get();
      const Cities = getData.docs.map(doc => doc.id);

      setCities(Cities);
      setLoading(false);
    };

    const getData = async () => {
      setLoading(true);
      const user = await firestore()
        .collection('userDetails')
        .doc(auth().currentUser?.uid)
        .get();
      setCity(user._data.city);
      setLoading(false);
    };

    getData();
    getCollections();
  }, [loaded, isFocused]);

  return (
    <View style={styles.Main_Container}>
      <LoaderModel isVisible={loading} color={primary} />

      <Header
        Header_Title={'Notification'}
        onPress={() => props.navigation.navigate('Home_Screen')}
      />
      <ScrollView>
        <Text style={[styles.main_title]}>City</Text>

        <View style={{marginTop: 10, alignSelf: 'center'}}>
          <FlatList
            numColumns={4}
            data={cities}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    padding: 12,
                  }}>
                  <TouchableOpacity
                    style={{alignItems: 'center'}}
                    onPress={() => {
                      if (!city.includes(item)) {
                        setCity([...city, item]);
                        setLoaded(prev => !prev);

                        firestore()
                          .collection('userDetails')
                          .doc(auth().currentUser.uid)
                          .update({
                            city: [...city, item],
                          })
                          .then(() => {
                            // console.log('User updated!');
                          });
                      } else {
                        const newArray = city.filter(ob => ob !== item);
                        setCity(newArray);
                        setLoaded(prev => !prev);

                        firestore()
                          .collection('userDetails')
                          .doc(auth().currentUser.uid)
                          .update({
                            city: newArray,
                          })
                          .then(() => {
                            // console.log('User updated!');
                          });
                      }
                    }}>
                    <View style={styles.notification_category}>
                      <Lite_Profile_Icon />
                    </View>
                    <View
                      style={{flexDirection: 'column', alignItems: 'center'}}>
                      <Text style={styles.title}>{item}</Text>
                      {city.includes(item) ? (
                        <Image
                          style={{width: 30, height: 30}}
                          source={{
                            uri: 'https://png.pngtree.com/png-vector/20210212/ourmid/pngtree-green-correct-icon-png-image_2912233.jpg',
                          }}
                        />
                      ) : (
                        <Text></Text>
                      )}
                    </View>
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

export default City_Screen;
