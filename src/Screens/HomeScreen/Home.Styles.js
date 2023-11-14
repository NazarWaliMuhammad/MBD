import {Dimensions, StyleSheet} from 'react-native';
import {
  inputBackColor,
  primary,
  secondary,
  tertiary,
  white,
} from '../../Stylings/Colors';
import {Black, Bold, Medium, Regular} from '../../Stylings/Font.Family';

const styles = StyleSheet.create({
  Main_Container: {
    flex: 1,
    backgroundColor: white,
  },
  Header_Container: {
    height: 200,
    backgroundColor: primary,
    width: '100%',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  Header_Containt_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  profile_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Hello_Text: {
    color: white,
    fontSize: 12,
    fontFamily: Regular,
  },
  Title_Text: {
    marginLeft: 7,
    color: white,
    fontSize: 15,
    fontFamily: Medium,
  },
  Basic_Container: {
    width: 'auto',
    height: 30,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#629CED',
    marginTop: 6,
  },
  Basic_Text: {
    fontSize: 15,
    fontFamily: Medium,
    color: white,
  },
  input_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 20,
    height: 60,
    backgroundColor: white,
    borderRadius: 10,
    marginTop: 40,
  },
  input_Box_contaner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: Dimensions.get('screen').width / 1.5,
    fontSize: 16,
    fontFamily: Medium,
    color: secondary,
    marginLeft: 10,
  },
  filter_container: {
    borderLeftWidth: 0.8,
    borderLeftColor: '#D9D6D6',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  Count_container: {
    height: 'auto',
    padding: 20,

    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width / 1.1,
    paddingHorizontal: 20,
    backgroundColor: inputBackColor,
    marginBottom: 20,
  },
  Count_Text: {
    fontSize: 20,
    fontFamily: Bold,
    color: '#000',
    marginHorizontal: 20,
  },
  Count_Name_Text: {
    fontSize: 18,
    fontFamily: Medium,
    textAlign: 'center',
    color: primary,
  },
});
export default styles;
