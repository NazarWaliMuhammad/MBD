// import React from 'react';
import {StyleSheet} from 'react-native';
import {View, TouchableOpacity} from 'react-native';
import {primary} from '../../Stylings/Colors';
import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
import Mini_Logo from '../../../assets/SvgIcons/MiniLogo.Icon';

const Header = ({onPress, Header_Title}) => {
  return (
    <View style={styles.Main_Header}>
      <TouchableOpacity
        onPress={onPress}
        style={{justifyContent: 'center', marginTop: 30}}>
        <Right_Icon />
      </TouchableOpacity>
      <View style={styles.mainlogo}>
        <Mini_Logo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Main_Header: {
    height: 120,
    backgroundColor: primary,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 40,
  },
  mainlogo: {
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Header;
