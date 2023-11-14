// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   TouchableOpacity,
//   Text,
//   SafeAreaView,
//   //   FlatList,
//   ScrollView,
//   TextInput,
//   Modal,
//   StyleSheet,
//   FlatList,
//   Image,
// } from 'react-native';
// import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
// import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
// // import styles from './Profile.Styles';
// import Header from '../../Components/Header/Header';
// import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
// import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';
// import Phone_Icon from '../../../assets/SvgIcons/Phone.Icon';
// import Message_Icon from '../../../assets/SvgIcons/Message.Icon';
// import Property_Icon from '../../../assets/SvgIcons/Property.Icon';
// import {primary} from '../../Stylings/Colors';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import Text_Input from '../../Components/TextInput/TextInput';
// import RNPickerSelect from 'react-native-picker-select';
// import {Circle} from 'react-native-svg';
// import {useIsFocused} from '@react-navigation/native';
// // ModalComponent.js
// const CitiesModal = props => {
//   const cityNames = props.items;
//   const [selectedCity, setSelectedCity] = useState([]);
//   const sendDataToMainScreen = item => {
//     // Send data to MainScreen using the function passed as a prop
//     props.updateData(item);
//   };
//   const isFocused = useIsFocused();
//   useEffect(() => {
//     setSelectedCity(props.selectedCities);
//   }, [isFocused, props.selectedCities]);
//   console.log(selectedCity);
//   return (
//     <Modal visible={props.visible} transparent={true} animationType="slide">
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <View style={{paddingVertical: 10}}>
//             <Text style={{fontSize: 20}}>Select City</Text>
//           </View>
//           <FlatList
//             data={cityNames}
//             renderItem={({item, index}) => {
//               return (
//                 <TouchableOpacity
//                   onPress={() => {
//                     if (!selectedCity.includes(item)) {
//                       setSelectedCity([...selectedCity, item]);
//                     } else {
//                       const newArray = selectedCity.filter(ob => ob !== item);
//                       setSelectedCity(newArray);
//                       // setSelectedCity(newArray);
//                     }
//                   }}
//                   style={{
//                     width: '70%',
//                     height: 30,
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     // backgroundColor: 'blue',
//                     alignSelf: 'center',
//                   }}>
//                   <Text
//                     style={{
//                       color: selectedCity.includes(item) ? primary : 'black',
//                     }}>
//                     {item}
//                   </Text>
//                   <Text
//                     style={{
//                       color: selectedCity.includes(item) ? primary : 'black',
//                     }}
//                     //   style={{marginEnd: 40}}
//                   >
//                     {selectedCity.includes(item) ? 'Selected' : 'Select'}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             }}
//           />
//           <View style={{width: '100%'}}>
//             <TouchableOpacity
//               onPress={() => {
//                 props.onPressDone();
//                 sendDataToMainScreen(selectedCity);
//               }}
//               style={{
//                 width: '80%',
//                 alignSelf: 'center',
//                 paddingVertical: 10,
//                 marginVertical: 5,
//                 backgroundColor: primary,
//                 borderRadius: 20,
//               }}>
//               <Text style={{alignSelf: 'center', color: 'white'}}>Done</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '70%',
//     backgroundColor: 'white',
//     // padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
// });

// export default CitiesModal;
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Modal,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import Right_Icon from '../../../assets/SvgIcons/Right.Icon';
import Setting_Icon from '../../../assets/SvgIcons/Settings.Icon';
import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
import Left_Arrow_Icon from '../../../assets/SvgIcons/Left.Arrow.Icon';
import Phone_Icon from '../../../assets/SvgIcons/Phone.Icon';
import Message_Icon from '../../../assets/SvgIcons/Message.Icon';
import Property_Icon from '../../../assets/SvgIcons/Property.Icon';
import {primary} from '../../Stylings/Colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Text_Input from '../TextInput/TextInput';
import RNPickerSelect from 'react-native-picker-select';
import {Circle} from 'react-native-svg';
import {useIsFocused} from '@react-navigation/native';

const CitiesModal = props => {
  const {items, visible, selectedCities, updateData, onPressDone} = props;
  const [selectedCity, setSelectedCity] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    setSelectedCity(selectedCities);
  }, [isFocused, selectedCities]);

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{paddingVertical: 10}}>
            <Text style={{fontSize: 20}}>Select City</Text>
          </View>
          <FlatList
            data={items}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  if (!selectedCity.includes(item)) {
                    setSelectedCity([...selectedCity, item]);
                  } else {
                    const newArray = selectedCity.filter(ob => ob !== item);
                    setSelectedCity(newArray);
                  }
                }}
                style={{
                  width: '70%',
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: selectedCity.includes(item) ? primary : 'black',
                  }}>
                  {item}
                </Text>
                <Text
                  style={{
                    color: selectedCity.includes(item) ? primary : 'black',
                  }}>
                  {selectedCity.includes(item) ? 'Selected' : 'Select'}
                </Text>
              </TouchableOpacity>
            )}
          />
          <View style={{width: '100%'}}>
            <TouchableOpacity
              onPress={() => {
                onPressDone();
                updateData(selectedCity);
              }}
              style={{
                width: '80%',
                alignSelf: 'center',
                paddingVertical: 10,
                marginVertical: 5,
                backgroundColor: primary,
                borderRadius: 20,
              }}>
              <Text style={{alignSelf: 'center', color: 'white'}}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '70%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default CitiesModal;
