import {Dimensions, StyleSheet} from 'react-native';
import {primary, white} from '../../Stylings/Colors';
import {Medium} from '../../Stylings/Font.Family';

const styles = StyleSheet.create({
  Main_Container: {
    width: Dimensions.get('screen').width / 2,
    height: 60,
    borderWidth: 0.5,
    borderColor: primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button_Title: {
    fontSize: 20,
    fontFamily: Medium,
    color: white,
  },
});

export default styles;
