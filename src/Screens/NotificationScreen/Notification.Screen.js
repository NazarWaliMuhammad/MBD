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
import styles from './Notification.Styles';
import Header from '../../Components/Header/Header';
import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';

const Notification_Screen = props => {
  const Notifications = [
    {
      name: 'Announcement Title',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title ',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title ',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title ',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
    {
      name: 'Announcement Title',
      message: `We're excited to announce our upcoming annual company picnic! Join us for a day of fun, games, and delicious food`,
    },
  ];
  return (
    <View style={styles.Main_Container}>
      <Header
        Header_Title={'Notification'}
        onPress={() => props.navigation.navigate('Home_Screen')}
      />
      <ScrollView>
        <View style={{marginTop: 30}}>
          <FlatList
            data={Notifications}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.notification_container}
                  onPress={() =>
                    props.navigation.navigate('Show_Edit_Notification_Screen', {
                      item: item,
                    })
                  }>
                  <TouchableOpacity style={styles.notification_container1}>
                    <View style={styles.name_Container}>
                      <View style={styles.notification_category}>
                        <Lite_Profile_Icon />
                      </View>
                      <Text style={styles.title}>{item.name}</Text>
                    </View>
                    <Text>
                      <Left_Arrow_Icon />
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.time}>{item.message}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification_Screen;
