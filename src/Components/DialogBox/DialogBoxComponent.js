// import React from 'react';

// import {
//   Dimensions,
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import Dialog from 'react-native-dialog';
// import {Medium, Regular, SemiBold} from '../../Stylings/Font.Family';
// import {secondary, white, primary} from '../../Stylings/Colors';

// const Dialog_Box = ({rendertItem, icon, visible, onPress, buttonTitle}) => {
//   return (
//     <Dialog.Container
//       visible={visible}
//       contentStyle={{
//         borderRadius: 10,
//         backgroundColor: white,
//         width: Dimensions.get('screen').width / 1.2,
//       }}>
//       {rendertItem}
//     </Dialog.Container>
//   );
// };

// export default Dialog_Box;
import React from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Dialog from 'react-native-dialog';
import {Medium, Regular, SemiBold} from '../../Stylings/Font.Family';
import {secondary, white, primary} from '../../Stylings/Colors';

const DialogBox = ({rendertItem, icon, visible, onPress, buttonTitle}) => {
  return (
    <Dialog.Container
      visible={visible}
      contentStyle={{
        borderRadius: 10,
        backgroundColor: white,
        width: Dimensions.get('screen').width / 1.2,
      }}>
      {rendertItem}
    </Dialog.Container>
  );
};

export default DialogBox;
