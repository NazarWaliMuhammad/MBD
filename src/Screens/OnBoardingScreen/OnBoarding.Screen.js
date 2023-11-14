// import React from 'react';
// import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
// import Onboading_Iocn from '../../../assets/SvgIcons/Onboarding.Icon';
// import Primary_Button from '../../Components/PrimaryButton/PrimaryButtonComponents';
// import {green, primary, white} from '../../Stylings/Colors';
// import styles from './Onboarding.Styles';
// import Main_Logo from '../../../assets/SvgIcons/Main.Logo';
// const OnBoarding_Screen = (props: any) => {
//   return (
//     <View style={styles.Main_Container}>
//       <StatusBar backgroundColor={white} barStyle={'dark-content'} />
//       <View>
//         <Main_Logo />
//       </View>
//       <View style={styles.Bottom_Container}>
//         <View style={styles.Botton_Container}>
//           <Primary_Button
//             Text_color={white}
//             Button_Title={'Login'}
//             backgroundColor={primary}
//             onPress={() => props.navigation.navigate('Login_Screen')}
//           />
//         </View>
//         <View>
//           <Primary_Button
//             Text_color={white}
//             Button_Title={'Sign Up'}
//             backgroundColor={green}
//             onPress={() => props.navigation.navigate('Signup_Screen')}
//           />
//         </View>
//         <TouchableOpacity
//           style={{alignSelf: 'center', marginTop: 10}}
//           onPress={() => props.navigation.navigate('ForgotPassword_Screen')}>
//           <Text style={styles.forgot_Password}>Forgot Password</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{alignSelf: 'center', marginTop: 10}}
//           onPress={() => props.navigation.navigate('ForgotPassword_Screen')}>
//           <Text
//             style={[
//               styles.forgot_Password,
//               {color: '#000', textDecorationLine: 'underline'},
//             ]}>
//             Admin
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// export default OnBoarding_Screen;
import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
// import Onboading_Iocn from '../../../assets/SvgIcons/Onboarding.Icon';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButtonComponents';
import {green, primary, white} from '../../Stylings/Colors';
import styles from './Onboarding.Styles';
import Main_Logo from '../../../assets/SvgIcons/Main.Logo';

const OnBoarding_Screen = props => {
  return (
    <View style={styles.Main_Container}>
      <StatusBar backgroundColor={white} barStyle={'dark-content'} />
      <View>
        <Main_Logo />
      </View>
      <View style={styles.Bottom_Container}>
        <View style={styles.Botton_Container}>
          <Primary_Button
            Text_color={white}
            Button_Title={'Login'}
            backgroundColor={primary}
            onPress={() => props.navigation.navigate('Login_Screen')}
          />
        </View>
        <View>
          <Primary_Button
            Text_color={white}
            Button_Title={'Sign Up'}
            backgroundColor={green}
            onPress={() => props.navigation.navigate('Signup_Screen')}
          />
        </View>
        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 10}}
          onPress={() => props.navigation.navigate('ForgotPassword_Screen')}>
          <Text style={styles.forgot_Password}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 10}}
          onPress={() => props.navigation.navigate('ForgotPassword_Screen')}>
          <Text
            style={[
              styles.forgot_Password,
              {color: '#000', textDecorationLine: 'underline'},
            ]}>
            Admin
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding_Screen;
