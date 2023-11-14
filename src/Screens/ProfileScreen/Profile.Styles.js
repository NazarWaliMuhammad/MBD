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
    marginBottom: 10,
    backgroundColor: inputBackColor,
    width: Dimensions.get('screen').width / 1.1,
    alignSelf: 'center',
    borderRadius: 10,

    padding: 20,
  },
  name_Container: {},
  notification_category: {
    width: 80,

    height: 80,
    borderRadius: 60,
    backgroundColor: inputBackColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    // width: '80%',
    fontSize: 20,
    fontFamily: Medium,
    marginBottom: 7,
    color: secondary,
    width: Dimensions.get('screen').width / 1.6,
  },
  main_title: {
    fontSize: 20,
    fontFamily: Medium,
    marginBottom: 7,
    alignSelf: 'center',
    color: secondary,
  },
  time: {
    fontSize: 16,
    // width: '80%',
    fontFamily: Regular,
    color: secondary,
  },
  icon_con: {
    width: '20%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 60,
    // marginEnd: 20,
  },
});
export default styles;
