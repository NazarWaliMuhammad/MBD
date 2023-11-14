import {Dimensions, StyleSheet} from 'react-native';
import {Black, Medium} from '../../Stylings/Font.Family';
import {inputBackColor, primary, secondary} from '../../Stylings/Colors';

const styles = StyleSheet.create({
  textInput: {
    width: Dimensions.get('screen').width / 1.1,
    fontSize: 16,
    fontFamily: Medium,
    height: 60,
    backgroundColor: inputBackColor,
    borderRadius: 5,
    color: secondary,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: Medium,
    color: Black,

    // marginHorizontal: 10,
    marginBottom: 6,
  },
});
export default styles;
