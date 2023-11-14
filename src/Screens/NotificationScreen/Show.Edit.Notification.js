// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   SafeAreaView,
//   FlatList,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
// import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
// import styles from './Notification.Styles';
// import Header from '../../Components/Header/Header';
// import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
// import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';
// import {inputBackColor, white} from '../../Stylings/Colors';

// const Show_Edit_Notification_Screen = (props: any) => {
//   const {item} = props.route.params;

//   return (
//     <View style={[styles.Main_Container, {backgroundColor: inputBackColor}]}>
//       <Header
//         Header_Title={'Notification'}
//         onPress={() => props.navigation.navigate('Notification_Screen')}
//       />
//       <ScrollView>
//         <View style={{marginTop: 30}}>
//           <View
//             style={[
//               styles.notification_container,
//               {marginHorizontal: 10, backgroundColor: white, borderRadius: 10},
//             ]}>
//             <TouchableOpacity>
//               <View>
//                 <View style={styles.notification_category}>
//                   <Lite_Profile_Icon />
//                 </View>
//                 <Text style={styles.title}>Name</Text>
//                 <Text style={[styles.title, {marginTop: 30}]}>{item.name}</Text>
//               </View>
//             </TouchableOpacity>
//             <TextInput
//               style={[
//                 styles.time,
//                 {
//                   marginHorizontal: 10,
//                   marginTop: 0,
//                 },
//               ]}
//               multiline={true}
//               defaultValue={item.message}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
// export default Show_Edit_Notification_Screen;
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
import styles from './Notification.Styles';
import Header from '../../Components/Header/Header';
import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';
import {inputBackColor, white} from '../../Stylings/Colors';

const Show_Edit_Notification_Screen = props => {
  const {item} = props.route.params;

  return (
    <View style={[styles.Main_Container, {backgroundColor: inputBackColor}]}>
      <Header
        Header_Title={'Notification'}
        onPress={() => props.navigation.navigate('Notification_Screen')}
      />
      <ScrollView>
        <View style={{marginTop: 30}}>
          <View
            style={[
              styles.notification_container,
              {marginHorizontal: 10, backgroundColor: white, borderRadius: 10},
            ]}>
            <TouchableOpacity>
              <View>
                <View style={styles.notification_category}>
                  <Lite_Profile_Icon />
                </View>
                <Text style={styles.title}>Name</Text>
                <Text style={[styles.title, {marginTop: 30}]}>{item.name}</Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={[
                styles.time,
                {
                  marginHorizontal: 10,
                  marginTop: 0,
                },
              ]}
              multiline={true}
              defaultValue={item.message}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Show_Edit_Notification_Screen;
