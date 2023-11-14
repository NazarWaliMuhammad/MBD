import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Home.Styles';
import {primary, tertiary, white} from '../../Stylings/Colors';
// import Notification_Icon from '../../../assets/SvgIcons/Notification.Icon';
// import Search_Icon from '../../../assets/SvgIcons/Search.Icon';
// // import Filter_Icon from '../../../assets/SvgIcons/Filter.Icon';
// import Dots_Icon from '../../../assets/SvgIcons/Dots.Icon';
// import Bluetooth_Icon from '../../../assets/SvgIcons/Bluetooth.Icon';
// import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';
// import Crown_Icon from '../../../assets/SvgIcons/Crown.Icon';
// import Primary_Button from '../../Components/PrimaryButton/PrimaryButtonComponents';
// import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
import Profile_Icon from '../../../assets/SvgIcons/Profile.Icon';
import Announcement_icon from '../../../assets/SvgIcons/Anouncmenet.Icon';
import City_Icon from '../../../assets/SvgIcons/City.Icon';
import Admin_icon from '../../../assets/SvgIcons/Admin.Icon';
import Header from '../../Components/Header/Header';
// import File_Icon from '../../../assets/SvgIcons/File.Icon';
import File_Bigg_Icon from '../../../assets/SvgIcons/File.Bigg.Icon';
import auth from '@react-native-firebase/auth';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';

const Home_Screen = props => {
  const [selectbtn, setSelectbtn] = useState('Announcement');
  const [UserName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);

  const signOut = () => {
    setLoading(true);
    auth()
      .signOut()
      .then(() => props.navigation.navigate('Login_Screen'));
    setLoading(false);
  };

  const data = [
    {
      name: 'Profile',
      icon: <Profile_Icon />,
    },
    {
      name: 'Announcement',
      icon: <Announcement_icon />,
    },
    {
      name: 'Select City',
      icon: <City_Icon />,
    },
    {
      name: 'Invite Admin',
      icon: <Admin_icon />,
    },
    {
      name: 'Files',
      icon: <File_Bigg_Icon />,
    },
    {
      name: 'Payment',
      icon: <File_Bigg_Icon />,
    },
    {
      name: 'Edit Profile',
      icon: <File_Bigg_Icon />,
    },
    {
      name: 'Contract',
      icon: <File_Bigg_Icon />,
    },
    {
      name: 'W9Form',
      icon: <File_Bigg_Icon />,
    },
    {
      name: 'Licience',
      icon: <File_Bigg_Icon />,
    },
  ];

  return (
    <View style={styles.Main_Container}>
      <StatusBar backgroundColor={primary} barStyle={'light-content'} />
      <LoaderModel isVisible={loading} color={primary} />

      <Header />
      <ScrollView contentContainerStyle={{paddingBottom: 150}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[styles.Count_container]}
                onPress={() => {
                  console.log('Button pressed for', item.name);

                  if (item.name === 'Profile') {
                    console.log('Navigating to Profile_Screen');
                    props.navigation.navigate('Profile_Screen');
                  } else if (item.name === 'Announcement') {
                    console.log('Navigating to Notification_Screen');
                    props.navigation.navigate('Notification_Screen');
                  } else if (item.name === 'Select City') {
                    console.log('Navigating to City_Screen');
                    props.navigation.navigate('City_Screen');
                  } else if (item.name === 'Invite Admin') {
                    console.log('Navigating to InviteAdmin_Screen');
                    props.navigation.navigate('Invite_Screen');
                  } else if (item.name === 'Files') {
                    console.log('Navigating to InviteAdmin_Screen');
                    props.navigation.navigate('File_Screen');
                  } else if (item.name === 'Payment') {
                    console.log('Navigating to InviteAdmin_Screen');
                    props.navigation.navigate('Payment_Screen');
                  } else if (item.name === 'Edit Profile') {
                    console.log('Navigating to InviteAdmin_Screen');
                    props.navigation.navigate('Edit_Profile_Screen');
                  } else if (item.name === 'Contract') {
                    console.log('Navigating to InviteAdmin_Screen');
                    props.navigation.navigate('Contract');
                  } else if (item.name === 'W9Form') {
                    console.log('Navigating to InviteAdmin_Screen');
                    props.navigation.navigate('W9Form');
                  } else if (item.name === 'Licience') {
                    console.log('Navigating to InviteAdmin_Screen');
                    props.navigation.navigate('Licience_Screen', {
                      item: 'licience',
                    });
                  } else {
                    console.log('Selecting', item.name);
                  }

                  setSelectbtn(item.name);
                }}>
                <View>{item.icon}</View>
                <Text style={[styles.Count_Text]}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <TouchableOpacity
          onPress={signOut}
          style={{marginTop: 10, marginHorizontal: 20}}>
          <Text style={[styles.Count_Text, {fontSize: 16, color: 'red'}]}>
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home_Screen;
