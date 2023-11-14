import React, {useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {primary, secondary, white} from '../../Stylings/Colors';
import Text_Input from '../../Components/TextInput/TextInput';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButtonComponents';
import Google_icon from '../../../assets/SvgIcons/Google.Icon';
import styles from './SignUp.Styles';
import MessageBox from '../../Components/DialogBox/MessageBoxComponent';
import Main_Logo from '../../../assets/SvgIcons/Main.Logo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';
import SignModal from './SignNextScreen';
const Signup_Screen = props => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [whatOpen, setWhatOpen] = useState('');
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [signatureUrl, setSignatureUrl] = useState(null);
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [visibleSIgnModal, setSignModalVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUpPress = () => {
    if (
      (firstName !== '' ||
        lastName !== '' ||
        email !== '' ||
        password !== '' ||
        confirmPassword !== '') &&
      password === confirmPassword
    ) {
      // setLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          props.navigation.replace('SignNextScreen');
          firestore()
            .collection('bankDetails')
            .doc(auth().currentUser?.uid)
            .set({
              bankName: null,
              accType: null,
              accHolder: null,
              accNumber: null,
              routeNumber: null,
              isSubmitted: false,
              check: false,
            });

          firestore()
            .collection('userDetails')
            .doc(auth().currentUser?.uid)
            .set({
              email: email,
              firstName: firstName,
              lastName: lastName,
              workPhone: null,
              homePhone: null,
              city: null,
              emergencyPhone: null,
              state: false,
              massageLicense: null,
              city: [],
              signUrl: null,
              // workPhone : null,
            });
          firestore()
            .collection('userContracts')
            .doc(auth().currentUser?.uid)
            .set({
              downUrl: null,
              // workPhone : null,
            });
          firestore()
            .collection('fileDetails')
            .doc(auth().currentUser?.uid)
            .set({
              file: null,
            });

          // setLoading(false);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            alert('That email is invalid!');
          } else if (error.code === 'auth/weak-password') {
            alert('Password should be greater than 6 characters');
          } else if (error.code === 'auth/network-request-failed') {
            alert('Network Request Failed');
          } else {
            alert(error.code);
          }
          // setLoading(false);
        });
    } else if (password !== confirmPassword) {
      alert('Password and confirm password are not the same');
    } else if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      alert('Fill in the remaining data');
    }
  };

  return (
    <View style={styles.Main_Container}>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="royalblue" />
        </View>
      ) : (
        <SafeAreaView>
          <StatusBar barStyle={'dark-content'} backgroundColor={white} />
          <MessageBox
            visible={dialogVisible}
            icon={whatOpen === 'done' ? 'Success' : 'Error'}
            onPress={() => {
              whatOpen === 'done'
                ? props.navigation.navigate('Login_Screen') &&
                  setDialogVisible(false)
                : setDialogVisible(false);
            }}
            Message={message}
            buttonTitle={whatOpen === 'done' ? 'Continue' : 'Try Again'}
          />
          <ScrollView>
            <View style={styles.Logo_Container}>
              <Main_Logo />
            </View>
            <View style={styles.Names_Inputs_Container}>
              <View>
                <Text style={styles.title}>First Name</Text>
                <TextInput
                  value={firstName}
                  placeholder="First name"
                  style={[styles.input]}
                  placeholderTextColor={secondary}
                  onChangeText={text => {
                    setFirstName(text);
                  }}
                  IsFocus={firstNameFocus}
                  onFocus={() => {
                    setFirstNameFocus(true);
                  }}
                  onBlur={() => {
                    setFirstNameFocus(false);
                  }}
                />
              </View>
              <View>
                <Text style={styles.title}>Last Name</Text>
                <TextInput
                  value={lastName}
                  placeholder="Last name"
                  style={[styles.input]}
                  placeholderTextColor={secondary}
                  onChangeText={text => {
                    setLastName(text);
                  }}
                  IsFocus={lastNameFocus}
                  onFocus={() => {
                    setLastNameFocus(true);
                  }}
                  onBlur={() => {
                    setLastNameFocus(false);
                  }}
                />
              </View>
            </View>
            <View style={styles.Input_Container}>
              <Text_Input
                value={email}
                input_Title={'Email'}
                placeholder={'Email Address'}
                onChangeText={text => {
                  setEmail(text);
                }}
                error={emailError}
                IsFocus={emailFocus}
                onFocus={() => {
                  setEmailFocus(true);
                }}
                onBlur={() => {
                  setEmailFocus(false);
                }}
              />
              <Text_Input
                value={password}
                input_Title={'Password'}
                placeholder={'Password'}
                onChangeText={text => {
                  setPassword(text);
                }}
                error={phoneNumberError}
                IsFocus={phoneNumberFocus}
                onFocus={() => {
                  setPhoneNumberFocus(true);
                }}
                onBlur={() => {
                  setPhoneNumberFocus(false);
                }}
              />
              <Text_Input
                value={confirmPassword}
                input_Title={'Confirm Password'}
                placeholder={'Confirm Password'}
                onChangeText={text => {
                  setConfirmPassword(text);
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

            <View style={{alignSelf: 'center', marginTop: 10}}>
              <Primary_Button
                Button_Title={'Sign Up'}
                backgroundColor={primary}
                onPress={signUpPress}
                Text_color={white}
              />
            </View>

            <View
              style={[
                styles.Resend_Code_Container,
                {alignSelf: 'center', marginTop: 10},
              ]}>
              <Text style={styles.Auth_text}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login_Screen')}>
                <Text style={styles.Resend_text}>Login</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
};

export default Signup_Screen;
