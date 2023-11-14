import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import styles from './ForgotPassword.Styles';
import Header from '../../Components/Header/Header';
import MessageBox from '../../Components/DialogBox/MessageBoxComponent';
import Text_Input from '../../Components/TextInput/TextInput';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButtonComponents';
import {primary, white} from '../../Stylings/Colors';
import LoaderModel from '../../Components/DialogBox/LoaderBoxComponent';

const ForgotPassword_Screen = props => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setemail] = useState('');
  const [emailError, setEmailerror] = useState(false);
  const [EmailFocus, setEmailFocus] = useState(false);
  const [dialogVisible, setdialogVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [whatopen, setwhatopen] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (email !== '') {
      setEmailerror(false);
    }
  }, [email]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={primary} />
      <LoaderModel isVisible={loading} color={primary} />

      <MessageBox
        visible={dialogVisible}
        icon={whatopen == 'done' ? 'Success' : 'Error'}
        onPress={() => {
          whatopen == 'done'
            ? props.navigation.navigate('Login_Screen') &&
              setdialogVisible(false) &&
              setemail('')
            : setdialogVisible(false);
        }}
        Message={message}
        buttonTitle={whatopen == 'done' ? 'Continue' : 'Try Again'}
      />
      <Header
        Header_Title={'Forgot Password'}
        onPress={() =>
          props.navigation.navigate('Login_Screen') & setIsEmailSent(false)
        }
      />

      <View style={{marginTop: 30, alignSelf: 'center'}}>
        <View>
          {isEmailSent === false ? null : (
            <Text style={styles.emailsent}>
              Email sent successfully on your {email} please check it.
            </Text>
          )}
        </View>
        <Text_Input
          placeholder={'Email Address'}
          onChangeText={text => {
            setemail(text);
          }}
          error={emailError}
          IsFocus={EmailFocus}
          onFocus={() => {
            setEmailFocus(true);
          }}
          onBlur={event => {
            setEmailFocus(false);
          }}
        />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Primary_Button
          Button_Title={'Sign in'}
          backgroundColor={primary}
          // onPress={() => handleForgotPassword()}
          // onPress={() => props.navigation.navigate('Tab_Navigation')}
          Text_color={white}
        />
      </View>
    </View>
  );
};

export default ForgotPassword_Screen;
