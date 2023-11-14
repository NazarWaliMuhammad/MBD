// import React from 'react';
// import {Text, TouchableOpacity, View} from 'react-native';
// import styles from './PrimaryButton.Styles';
// const Primary_Button = ({
//   Button_Title,
//   backgroundColor,
//   Text_color,
//   onPress,
// }: any) => {
//   return (
//     <TouchableOpacity
//       style={[styles.Main_Container, {backgroundColor: backgroundColor}]}
//       onPress={onPress}>
//       <Text style={[styles.Button_Title, {color: Text_color}]}>
//         {Button_Title}
//       </Text>
//     </TouchableOpacity>
//   );
// };
// export default Primary_Button;
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './PrimaryButton.Styles';

const Primary_Button = ({
  Button_Title,
  backgroundColor,
  Text_color,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.Main_Container, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Text style={[styles.Button_Title, {color: Text_color}]}>
        {Button_Title}
      </Text>
    </TouchableOpacity>
  );
};

export default Primary_Button;
