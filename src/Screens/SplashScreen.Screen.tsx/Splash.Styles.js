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
  Detail_Message_Text: {
    fontSize: 13,
    marginHorizontal: 50,
    textAlign: 'center',
    fontFamily: Medium,
    color: light_grey,
  },
  Bottom_Container: {
    position: 'absolute',
    bottom: 10,
  },
});
export default styles;
