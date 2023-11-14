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
  Main_Header: {
    height: 100,
    backgroundColor: primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: 'space-between',
  },
  tags_Title: {
    fontSize: 20,
    fontFamily: Bold,
    color: white,
    position: 'absolute',
    left: 0,
    right: 0,
    alignSelf: 'center',
    textAlign: 'center',
    zIndex: -1000,
  },
  notification_container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notification_container: {
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: inputBackColor,
    padding: 20,
  },
  name_Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  notification_category: {
    width: 50,

    height: 50,
    borderRadius: 60,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: Medium,
    color: secondary,
    marginLeft: 10,
    width: Dimensions.get('screen').width / 1.6,
  },
  time: {
    fontSize: 15,
    fontFamily: Regular,
    color: secondary,
    marginHorizontal: 30,
    marginTop: 10,
  },
});
export default styles;
