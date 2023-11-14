import {StyleSheet} from 'react-native';
import {light_grey, white} from '../../Stylings/Colors';
import {Medium} from '../../Stylings/Font.Family';

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Bottom_Container: {},
  Botton_Container: {
    marginBottom: 10,
  },
  forgot_Password: {
    fontSize: 18,
    fontFamily: Medium,
    color: '#EE0000',
  },
});
export default styles;
