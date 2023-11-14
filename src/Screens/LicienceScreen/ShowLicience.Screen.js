import React, {useState, useRef} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './Licience.Styles';
import Header from '../../Components/Header/Header';
import {green, white} from '../../Stylings/Colors';
import Primary_Button from '../../Components/PrimaryButton/PrimaryButtonComponents';
import Swiper from 'react-native-swiper';
const Show_Licience_Screen = props => {
  const {imageUris} = props.route.params;
  const [index, setIndex] = useState(0);
  const swiper = useRef(null);

  return (
    <View style={[styles.Main_Container]}>
      <Header
        Header_Title={'Notification'}
        onPress={() => props.navigation.navigate('Notification_Screen')}
      />
      <ScrollView>
        <Swiper
          style={{justifyContent: 'center', alignItems: 'center'}}
          ref={swiper}
          index={index}
          activeDotColor={'#77E6B6'}
          showsButtons={false}
          onIndexChanged={index => setIndex(index)}
          dotColor="#F8F9D3"
          paginationStyle={{marginBottom: 0}}
          activeDot={
            <View
              style={{
                width: 10,
                backgroundColor: '#000',
                height: 10,
                marginLeft: 8,
                borderRadius: 30,
              }}
            />
          }
          dot={
            <View
              style={{
                width: 10,
                backgroundColor: '#D9D9D9',
                height: 10,
                marginLeft: 8,
                borderRadius: 30,
              }}
            />
          }>
          {imageUris.map((imageUri, index) => (
            <Image
              key={index}
              source={{uri: imageUri}}
              style={{
                width: '100%',
                height: undefined,
                aspectRatio: 16 / 9,
                resizeMode: 'contain',
              }}
            />
          ))}
        </Swiper>

        <View style={styles.drawsing}>
          <Text style={styles.title}>Draw Signature </Text>
        </View>
        <View
          style={{alignSelf: 'flex-end', marginTop: 10, marginHorizontal: 20}}>
          <Primary_Button
            Button_Title={'submit'}
            backgroundColor={green}
            Text_color={white}
            onPress={() =>
              props.navigation.navigate('Licence_Screen', {item: 'pending'})
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Show_Licience_Screen;
