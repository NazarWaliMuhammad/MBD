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
    color: primary,
    textDecorationLine: 'underline',
    marginLeft: 10,
    alignSelf: 'center',
  },
  time: {
    fontSize: 15,
    fontFamily: Medium,
    color: secondary,
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: white,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 100,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
export default styles;
