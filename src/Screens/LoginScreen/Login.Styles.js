import {Dimensions, StyleSheet} from 'react-native';
import {Bold, Medium, Regular, SemiBold} from '../../Stylings/Font.Family';
import {grey, primary, secondary, tertiary, white} from '../../Stylings/Colors';

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: white,
  },
  Logo_Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Logo_Text: {
    fontSize: 25,
    fontFamily: Bold,
    color: primary,
  },
  Input_Container: {
    alignSelf: 'center',
    marginTop: 10,
  },
  Auth_text_Container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 70,
    textAlign: 'center',
    marginTop: 10,
  },
  Auth_text: {
    fontSize: 16,
    fontFamily: Regular,
    color: tertiary,
    textAlign: 'center',
  },
  otpInput: {
    backgroundColor: grey,
    width: Dimensions.get('screen').width / 8,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: primary,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Medium,
  },
  otpInput2: {
    backgroundColor: grey,
    width: Dimensions.get('screen').width / 8,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: primary,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: Medium,
    // marginHorizontal: 2,
  },
  Resend_Code_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Resend_text: {
    fontSize: 16,
    fontFamily: SemiBold,
    color: primary,
    marginLeft: 10,
  },
  bottom_line: {
    width: Dimensions.get('screen').width / 1.2,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D6D6',
    alignSelf: 'center',
    height: 30,
    marginBottom: 20,
  },
  Button_conatiner: {
    width: Dimensions.get('screen').width / 1.1,
    height: 65,
    borderWidth: 0.5,
    marginBottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    borderColor: '#00000040',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  Button_Title: {
    fontSize: 20,
    fontFamily: Medium,
    color: secondary,
    marginLeft: 30,
  },
  forgotpassword_container: {
    alignSelf: 'flex-end',
    marginHorizontal: 20,
  },
  forgotpassword_text: {
    fontSize: 16,
    fontFamily: Medium,
    color: secondary,
  },
});
export default styles;
