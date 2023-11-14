import React, {useEffect, useState} from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './Invite.Styles';
import Header from '../../Components/Header/Header';
import Lite_Profile_Icon from '../../../assets/SvgIcons/ProfileLite.Icon';
import {inputBackColor, primary, white} from '../../Stylings/Colors';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButtonComponents';
import Clipboard from '@react-native-clipboard/clipboard';

const Invite_Screen = props => {
  const [isCopied, setIsCopied] = useState(false);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    if (isCopied) {
      fadeIn();
      setTimeout(fadeOut, 1000); // Hide the message after 2 seconds
    }
  }, [isCopied]);

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: true,
    }).start(() => setIsCopied(false));
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  const [textToCopy, setTextToCopy] = useState(
    ' Link Invitation to join MBD Portal',
  );

  const handleCopyText = async () => {
    try {
      await Clipboard.setString(textToCopy);
      setIsCopied(true);
    } catch (error) {
      console.error('Error copying text to clipboard: ', error);
    }
  };

  return (
    <View style={[styles.Main_Container]}>
      <Header
        Header_Title={'Notification'}
        onPress={() => props.navigation.navigate('Notification_Screen')}
      />
      <ScrollView>
        <View style={{marginTop: 30}}>
          <View style={[styles.notification_container]}>
            <TouchableOpacity>
              <View>
                <Text style={styles.title}>
                  Link Invitation to join MBD Portal{' '}
                </Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={[styles.time]}
              multiline={true}
              defaultValue={'Add Message'}
            />
          </View>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Primary_Button
            Button_Title={'Copy'}
            backgroundColor={primary}
            onPress={handleCopyText}
            Text_color={white}
          />
        </View>
      </ScrollView>
      {isCopied && (
        <Animated.View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: 20, // Adjust the position as needed
            opacity: fadeAnim,
          }}>
          <Text>Copied!</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default Invite_Screen;
