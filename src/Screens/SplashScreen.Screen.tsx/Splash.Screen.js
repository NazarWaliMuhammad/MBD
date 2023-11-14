import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import styles from './Splash.Styles';
import Main_Logo from '../../../assets/SvgIcons/Main.Logo';
import {white} from '../../Stylings/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

const Splash_Screen = props => {
  const [userID, setUserID] = React.useState();
  const [hideSplash, setHideSplash] = React.useState(true);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        props.navigation.replace('Home_Screen');
      } else {
        props.navigation.replace('Login_Screen');
      }
    });
  }, []);

  return (
    <View style={styles.Main_Container}>
      <StatusBar backgroundColor={white} barStyle={'dark-content'} />
      <Main_Logo />
    </View>
  );
};

export default Splash_Screen;
