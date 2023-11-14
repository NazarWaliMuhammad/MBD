import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import styles from './Login.Styles';
import {primary, white} from '../../Stylings/Colors';
import Text_Input from '../../Components/TextInput/TextInput';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButtonComponents';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';
import MessageBox from '../../Components/DialogBox/MessageBoxComponent';
import Main_Logo from '../../../assets/SvgIcons/Main.Logo';
import auth from '@react-native-firebase/auth';

const Login_Screen = props => {
  const [dialogVisible, setdialogVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [whatopen, setwhatopen] = useState('');
  const [loading, setLoading] = useState(false);

  const [email, setemail] = useState('');
  const [emailError, setEmailerror] = useState(false);
  const [EmailFocus, setEmailFocus] = useState(false);

  const [password, setpassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const Sign_in_press = () => {
    setLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.replace('Home_Screen');
        setLoading(true);
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          setLoading(false);
          alert('That Username is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          setLoading(false);
          alert('That Username is invalid!');
        } else if (error.code === 'auth/weak-password') {
          setLoading(false);
          alert('Password should be greater than 6 characters');
        } else {
          setLoading(false);
          alert(error.code);
        }
      });
  };

  return (
    <View style={styles.Main_Container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={white} />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="royalblue" />
        </View>
      ) : (
        <SafeAreaView style={{flex: 1}}>
          <MessageBox
            visible={dialogVisible}
            icon={whatopen == 'done' ? 'Success' : 'Error'}
            onPress={() => {
              whatopen == 'done'
                ? props.navigation.navigate('Login_Screen') &&
                  setdialogVisible(false)
                : setdialogVisible(false);
            }}
            Message={message}
            buttonTitle={whatopen == 'done' ? 'Continue' : 'Try Again'}
          />
          <ScrollView keyboardShouldPersistTaps={'handled'}>
            <View style={styles.Logo_Container}>
              <Main_Logo />
            </View>
            <View style={styles.Input_Container}>
              <Text_Input
                autoCapitalize="none"
                value={email}
                input_Title={'Email'}
                placeholder={'Email Address'}
                onChangeText={text => {
                  setemail(text);
                }}
                error={emailError}
                IsFocus={EmailFocus}
                onFocus={() => {
                  setEmailFocus(true);
                }}
                onBlur={() => {
                  setEmailFocus(false);
                }}
              />
              <Text_Input
                value={password}
                placeholder={'Password'}
                onChangeText={text => {
                  setpassword(text);
                }}
                error={passwordError}
                IsFocus={passwordFocus}
                onFocus={() => {
                  setPasswordFocus(true);
                }}
                onBlur={() => {
                  setPasswordFocus(false);
                }}
                secureTextEntry={true}
              />
            </View>

            <View style={{alignSelf: 'center'}}>
              <Primary_Button
                Button_Title={'Login'}
                backgroundColor={primary}
                onPress={() => {
                  Sign_in_press();
                }}
                Text_color={white}
              />
            </View>

            <View
              style={[
                styles.Resend_Code_Container,
                {alignSelf: 'center', marginTop: 10},
              ]}>
              <Text style={styles.Auth_text}>Don’t have an account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Signup_Screen')}>
                <Text style={styles.Resend_text}>Register</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
};

export default Login_Screen;
