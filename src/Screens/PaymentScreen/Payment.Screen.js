//
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
} from 'react-native';
import styles from './Payment.Styles';
import {primary, white, secondary, inputBackColor} from '../../Stylings/Colors';
import {Black, Medium} from '../../Stylings/Font.Family';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Text_Input from '../../Components/TextInput/TextInput';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButtonComponents';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';
import MessageBox from '../../Components/DialogBox/MessageBoxComponent';
import Main_Logo from '../../../assets/SvgIcons/Main.Logo';
import Header from '../../Components/Header/Header';
// import {primary, secondary} from '../../Stylings/Colors';
// import textInputStyles from '../../Components/TextInput/TextInput.Styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Payment_Screen = props => {
  // ****************************LOGIN STATES**********************
  const [isCheck, setIsCheck] = useState(false);
  const [dialogVisible, setdialogVisible] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [whatopen, setwhatopen] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [email, setemail] = React.useState('');
  const [emailError, setEmailerror] = React.useState(false);
  const [EmailFocus, setEmailFocus] = React.useState(false);

  const [number, setNumber] = React.useState('');
  const [numberError, setnumberError] = React.useState(false);
  const [numberFocus, setnumberFocus] = React.useState(false);
  const [password, setpassword] = React.useState('');
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const [verificationId, setVerificationId] = useState('');
  const [code, setCode] = useState('');
  const [bankName, setBankName] = useState(null);
  const [accNumber, setAccNumber] = useState(null);
  const [accType, setAccType] = useState(null);
  const [accHolder, setAccHolder] = useState(null);
  const [routeNumber, setRouteNumber] = useState(null);
  const [confirmRouteNumber, setConfirmRouteNumber] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(null);
  useEffect(() => {
    setLoading(true);
    console.log(bankName);
    const getData = async () => {
      const user = await firestore()
        .collection('bankDetails')
        .doc(auth().currentUser?.uid)
        .get();
      console.log(user._data.bankName);
      setAccType(user._data.accType);
      setAccHolder(user._data.accHolder);
      setAccNumber(user._data.accNumber);
      setBankName(user._data.bankName);
      setRouteNumber(user._data.routeNumber);
      setIsSubmitted(user._data.isSubmitted);
      setLoading(false);
    };
    getData();
  }, [isSubmitted]);
  const submitPaymentetails = () => {
    setLoading(true);

    if (
      (bankName ||
        accType ||
        accHolder ||
        accNumber ||
        routeNumber ||
        confirmRouteNumber) != null &&
      routeNumber === confirmRouteNumber &&
      isSubmitted === false
    ) {
      firestore()
        .collection('bankDetails')
        .doc(auth().currentUser?.uid)
        .update({
          bankName: bankName,
          accType: accType,
          accHolder: accType,
          accNumber: accNumber,
          routeNumber: routeNumber,
          isSubmitted: true,
          check: isCheck,
        })
        .then(() => {
          console.log('User added!');
        });
      setLoading(false);

      setIsSubmitted(true);
    } else if (routeNumber != confirmRouteNumber) {
      alert('Routing Number and Confirm Routing Number are not same ');
      setLoading(false);
    } else if (
      (bankName ||
        accType ||
        accHolder ||
        accNumber ||
        routeNumber ||
        confirmRouteNumber) === null
    ) {
      alert('Fill the remaining data');
      setLoading(false);
    }
  };
  // React.useEffect(() => {
  //   if (email !== '') {
  //     setEmailerror(false);
  //   }
  // }, [email]);
  // React.useEffect(() => {
  //   if (password !== '') {
  //     setPasswordError(false);
  //   }
  // }, [password]);
  // const Sign_in_press = async () => {
  //   if (email === '' || password === '') {
  //     if (email === '') {
  //       setEmailerror(true);
  //     }
  //     if (password === '') {
  //       setPasswordError(true);
  //     }
  //   } else {
  //     // User not found in Firestore, handle accordingly
  //     setLoading(false);
  //   }
  // };

  return (
    <View style={styles.Main_Container}>
      <StatusBar barStyle={'light-content'} backgroundColor={primary} />
      <LoaderModel isVisible={loading} color={primary} />
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
      <Header onPress={() => props.navigation.navigate('Home_Screen')} />
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        {isSubmitted != true ? (
          <View style={styles.Input_Container}>
            <Text_Input
              value={bankName}
              input_Title={'Bank'}
              placeholder={'Bank Name'}
              onChangeText={text => {
                setBankName(text);
              }}
              // error={emailError}
              // IsFocus={EmailFocus}
              // onFocus={() => {
              //   setEmailFocus(true);
              // }}
              // onBlur={event => {
              //   setEmailFocus(false);
              // }}
            />
            <Text_Input
              value={accType}
              input_Title={'Account Type'}
              placeholder={'Account Type'}
              onChangeText={text => {
                setAccType(text);
              }}
              // error={passwordError}
              // IsFocus={passwordFocus}
              // onFocus={() => {
              //   setPasswordFocus(true);
              // }}
              // onBlur={event => {
              //   setPasswordFocus(false);
              // }}
              // secureTextEntry={true}
            />
            <Text_Input
              value={accHolder}
              input_Title={'Account Holder'}
              placeholder={'Account Holder'}
              onChangeText={text => {
                setAccHolder(text);
              }}
              // error={passwordError}
              // IsFocus={passwordFocus}
              // onFocus={() => {
              //   setPasswordFocus(true);
              // }}
              // onBlur={event => {
              //   setPasswordFocus(false);
              // }}
              // secureTextEntry={true}
            />
            <Text_Input
              value={accNumber}
              input_Title={'Account Number'}
              placeholder={'Account Number'}
              onChangeText={text => {
                setAccNumber(text);
              }}
              // error={passwordError}
              // IsFocus={passwordFocus}
              // onFocus={() => {
              //   setPasswordFocus(true);
              // }}
              // onBlur={event => {
              //   setPasswordFocus(false);
              // }}
              // secureTextEntry={true}
            />
            <Text_Input
              value={routeNumber}
              input_Title={'Routing Number'}
              placeholder={'Routing Number'}
              onChangeText={text => {
                setRouteNumber(text);
              }}
              // error={passwordError}
              // IsFocus={passwordFocus}
              // onFocus={() => {
              //   setPasswordFocus(true);
              // }}
              // onBlur={event => {
              //   setPasswordFocus(false);
              // }}
              // secureTextEntry={true}
            />
            <Text_Input
              value={confirmRouteNumber}
              input_Title={'Confirm Routing Number'}
              placeholder={'Confirm Routing Number'}
              onChangeText={text => {
                setConfirmRouteNumber(text);
              }}
              // error={passwordError}
              // IsFocus={passwordFocus}
              // onFocus={() => {
              //   setPasswordFocus(true);
              // }}
              // onBlur={event => {
              //   setPasswordFocus(false);
              // }}
              // secureTextEntry={true}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
                alignItems: 'center',
              }}>
              <Text style={{width: '80%', fontSize: 18, fontWeight: '600'}}>
                I would like to recieve my payments via check
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setIsCheck(prev => !prev);
                }}>
                {isCheck ? (
                  <Fontisto
                    name="checkbox-active"
                    size={28}
                    color="royalblue"
                  />
                ) : (
                  <Fontisto name="checkbox-passive" size={28} color="#d3d3d3" />
                )}
                <Text></Text>
              </TouchableOpacity>
            </View>
            {/* <Text_Input
            value={bankName}
            input_Title={'Bank'}
            placeholder={'Bank Name'}
            onChangeText={text => {
              setBankName(text);
            }}
            error={emailError}
            IsFocus={EmailFocus}
            onFocus={() => {
              setEmailFocus(true);
            }}
            onBlur={event => {
              setEmailFocus(false);
            }}
          /> */}
            {/* <Text_Input
            value={accType}
            input_Title={'Account Type'}
            placeholder={'Account Type'}
            onChangeText={text => {
              setAccType(text);
            }}
            error={passwordError}
            IsFocus={passwordFocus}
            onFocus={() => {
              setPasswordFocus(true);
            }}
            onBlur={event => {
              setPasswordFocus(false);
            }}
            secureTextEntry={true}
          />
          <Text_Input
            value={accHolder}
            input_Title={'Account Holder'}
            placeholder={'Account Holder'}
            onChangeText={text => {
              setAccHolder(text);
            }}
            error={passwordError}
            IsFocus={passwordFocus}
            onFocus={() => {
              setPasswordFocus(true);
            }}
            onBlur={event => {
              setPasswordFocus(false);
            }}
            secureTextEntry={true}
          />
          <Text_Input
            value={accNumber}
            input_Title={'Account Number'}
            placeholder={'Account Number'}
            onChangeText={text => {
              setAccNumber(text);
            }}
            error={passwordError}
            IsFocus={passwordFocus}
            onFocus={() => {
              setPasswordFocus(true);
            }}
            onBlur={event => {
              setPasswordFocus(false);
            }}
            secureTextEntry={true}
          />
          <Text_Input
            value={routeNumber}
            input_Title={'Routing Number'}
            placeholder={'Routing Number'}
            onChangeText={text => {
              setRouteNumber(text);
            }}
            error={passwordError}
            IsFocus={passwordFocus}
            onFocus={() => {
              setPasswordFocus(true);
            }}
            onBlur={event => {
              setPasswordFocus(false);
            }}
            secureTextEntry={true}
          />
          <Text_Input
            value={confirmRouteNumber}
            input_Title={'Confirm Routing Number'}
            placeholder={'Confirm Routing Number'}
            onChangeText={text => {
              setConfirmRouteNumber(text);
            }}
            error={passwordError}
            IsFocus={passwordFocus}
            onFocus={() => {
              setPasswordFocus(true);
            }}
            onBlur={event => {
              setPasswordFocus(false);
            }}
            secureTextEntry={true}
          /> */}
          </View>
        ) : (
          <View style={styles.Input_Container}>
            <View>
              <Text style={textInputStyles.title}>Bank</Text>
              <Text
                style={[
                  textInputStyles.textInput,
                  {borderBottomColor: primary},
                ]}>
                {bankName}
              </Text>
            </View>
            <View>
              <Text style={textInputStyles.title}>Account Type</Text>
              <Text
                style={[
                  textInputStyles.textInput,
                  {borderBottomColor: primary},
                ]}>
                {accType}
              </Text>
            </View>
            <View>
              <Text style={textInputStyles.title}>Account Holder</Text>
              <Text
                style={[
                  textInputStyles.textInput,
                  {borderBottomColor: primary},
                ]}>
                {accHolder}
              </Text>
            </View>
            <View>
              <Text style={textInputStyles.title}>Account Number</Text>
              <Text
                style={[
                  textInputStyles.textInput,
                  {borderBottomColor: primary, alignSelf: 'center'},
                ]}>
                {accNumber}
              </Text>
            </View>
            <View>
              <Text style={textInputStyles.title}>Routing Number</Text>
              <Text
                style={[
                  textInputStyles.textInput,
                  {borderBottomColor: primary},
                ]}>
                {routeNumber}
              </Text>
            </View>
          </View>
        )}
        {/* <View style={styles.Input_Container}> */}
        {/* <Text_Input






        //     value={bankName}
        //     input_Title={'Bank'}
        //     placeholder={'Bank Name'}
        //     onChangeText={text => {
        //       setBankName(text);
        //     }}
        //     error={emailError}
        //     IsFocus={EmailFocus}
        //     onFocus={() => {
        //       setEmailFocus(true);
        //     }}
        //     onBlur={event => {
        //       setEmailFocus(false);
        //     }}
        //   /> 
        //            <Text_Input
        //     value={accType}
        //     input_Title={'Account Type'}
        //     placeholder={'Account Type'}
        //     onChangeText={text => {
        //       setAccType(text);
        //     }}
        //     error={passwordError}
        //     IsFocus={passwordFocus}
        //     onFocus={() => {
        //       setPasswordFocus(true);
        //     }}
        //     onBlur={event => {
        //       setPasswordFocus(false);
        //     }}
        //     secureTextEntry={true}
        //   />
        //   <Text_Input
        //     value={accHolder}
        //     input_Title={'Account Holder'}
        //     placeholder={'Account Holder'}
        //     onChangeText={text => {
        //       setAccHolder(text);
        //     }}
        //     error={passwordError}
        //     IsFocus={passwordFocus}
        //     onFocus={() => {
        //       setPasswordFocus(true);
        //     }}
        //     onBlur={event => {
        //       setPasswordFocus(false);
        //     }}
        //     secureTextEntry={true}
        //   />
        //   <Text_Input
        //     value={accNumber}
        //     input_Title={'Account Number'}
        //     placeholder={'Account Number'}
        //     onChangeText={text => {
        //       setAccNumber(text);
        //     }}
        //     error={passwordError}
        //     IsFocus={passwordFocus}
        //     onFocus={() => {
        //       setPasswordFocus(true);
        //     }}
        //     onBlur={event => {
        //       setPasswordFocus(false);
        //     }}
        //     secureTextEntry={true}
        //   />
        //   <Text_Input
        //     value={routeNumber}
        //     input_Title={'Routing Number'}
        //     placeholder={'Routing Number'}
        //     onChangeText={text => {
        //       setRouteNumber(text);
        //     }}
        //     error={passwordError}
        //     IsFocus={passwordFocus}
        //     onFocus={() => {
        //       setPasswordFocus(true);
        //     }}
        //     onBlur={event => {
        //       setPasswordFocus(false);
        //     }}
        //     secureTextEntry={true}
        //   />
        //   <Text_Input
        //     value={confirmRouteNumber}
        //     input_Title={'Confirm Routing Number'}
        //     placeholder={'Confirm Routing Number'}
        //     onChangeText={text => {
        //       setConfirmRouteNumber(text);
        //     }}
        //     error={passwordError}
        //     IsFocus={passwordFocus}
        //     onFocus={() => {
        //       setPasswordFocus(true);
        //     }}
        //     onBlur={event => {
        //       setPasswordFocus(false);
        //     }}
        //     secureTextEntry={true}
        //   /> 
     
        //   {/* <Text_Input
        //     value={bankName}
        //     input_Title={'Bank'}
        //     placeholder={'Bank Name'}
        //     onChangeText={text => {
        //       setBankName(text);
        //     }}
        //     error={emailError}
        //     IsFocus={EmailFocus}
        //     onFocus={() => {
        //       setEmailFocus(true);
        //     }}
        //     onBlur={event => {
        //       setEmailFocus(false);
        //     }}
        //   /> */}

        {/* <Text_Input
        //     value={accType}
        //     input_Title={'Account Type'}
        //     placeholder={'Account Type'}
        //     onChangeText={text => {
        //       setAccType(text);
        //     }}
        //     error={passwordError}
        //     IsFocus={passwordFocus}
        //     onFocus={() => {
        //       setPasswordFocus(true);
        //     }}
        //     onBlur={event => {
        //       setPasswordFocus(false);
        //     }}
        //     secureTextEntry={true}
        //   />
        //   <Text_Input
        //     value={accHolder}
        //     input_Title={'Account Holder'}
        //     placeholder={'Account Holder'}
        //     onChangeText={text => {
        //       setAccHolder(text);
        //     }}
        //     error={passwordError}
        //     IsFocus={passwordFocus}
        //     onFocus={() => {
        //       setPasswordFocus(true);
        //     }}
        //     onBlur={event => {
        //       setPasswordFocus(false);
        //     }}
        //     secureTextEntry={true}
        //   />
        //   <Text_Input
        //     value={accNumber}
        //     input_Title={'Account Number'}
        //     placeholder={'Account Number'}
        //     onChangeText={text => {
        //       setAccNumber(text);
        //     }}
        //     error={passwordError}
        //     IsFocus={passwordFocus}
        //     onFocus={() => {
        //       setPasswordFocus(true);
        //     }}
        //     onBlur={event => {
        //       setPasswordFocus(false);
        //     }}
        //     secureTextEntry={true}
        //   />
        //   <Text_Input
        //     value={routeNumber}
        //     input_Title={'Routing Number'}
        //     placeholder={'Routing Number'}
        //     onChangeText={text => {
        //       setRouteNumber(text);
        //     }}
        //     error={passwordError}
        //     IsFocus={passwordFocus}
        //     onFocus={() => {
        //       setPasswordFocus(true);
        //     }}
        //     onBlur={event => {
        //       setPasswordFocus(false);
        //     }}
        //     secureTextEntry={true}
        //   />
        //   <Text_Input
        //     value={confirmRouteNumber}
        //     input_Title={'Confirm Routing Number'}
        //     placeholder={'Confirm Routing Number'}
        //     onChangeText={text => {
        //       setConfirmRouteNumber(text);
        //     }}
        //     error={passwordError}
        //     IsFocus={passwordFocus}
        //     onFocus={() => {
        //       setPasswordFocus(true);
        //     }}
        //     onBlur={event => {
        //       setPasswordFocus(false);
        //     }}
        //     secureTextEntry={true}
        //   /> */}
        <View style={{alignSelf: 'center'}}>
          {isSubmitted != true ? (
            <Primary_Button
              Button_Title={'Submit'}
              backgroundColor={primary}
              // onPress={Sign_in_press}
              onPress={submitPaymentetails}
              Text_color={white}
            />
          ) : (
            <Text style={styles.Resend_text}>The Bank Data is Submitted</Text>
          )}
        </View>
        <View
          style={[
            styles.Resend_Code_Container,
            {alignSelf: 'center', marginTop: 10},
          ]}>
          <TouchableOpacity>
            <Text style={styles.Resend_text}>
              **Reminder this can only be done once if changes are needed
              contact admin
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const textInputStyles = StyleSheet.create({
  textInput: {
    width: Dimensions.get('screen').width / 1.1,
    fontSize: 16,
    fontFamily: Medium,
    height: 40,
    backgroundColor: inputBackColor,
    borderRadius: 10,
    color: secondary,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: Medium,
    color: Black,

    // marginHorizontal: 10,
    marginBottom: 6,
  },
});
export default Payment_Screen;
