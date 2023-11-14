import {Dimensions, StyleSheet} from 'react-native';
import {
  inputBackColor,
  primary,
  secondary,
  tertiary,
  white,
} from '../../Stylings/Colors';
import {Bold, Medium, Regular} from '../../Stylings/Font.Family';

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: white,
  },

  title: {
    fontSize: 16,
    fontFamily: Medium,
    color: primary,
    marginTop: 10,
  },
  drawsing: {
    backgroundColor: inputBackColor,
    marginHorizontal: 20,
    width: Dimensions.get('screen').width / 1.2,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
});
export default styles;
