import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash_Screen from '../SplashScreen.Screen.tsx/Splash.Screen';
import Login_Screen from '../LoginScreen/Login.Screen';
import Signup_Screen from '../SignUpScreen/SignUp.Screen';
import OnBoarding_Screen from '../OnBoardingScreen/OnBoarding.Screen';
import Notification_Screen from '../NotificationScreen/Notification.Screen';
import ForgotPassword_Screen from '../ForgotPassword/ForgotPassword.Screen';
import Home_Screen from '../HomeScreen/Home.Screen';
import Profile_Screen from '../ProfileScreen/Profile.Screen';
import File_Screen from '../FileScreen/FileScreen';
import City_Screen from '../CityScreen/City.Screen';
import Payment_Screen from '../PaymentScreen/Payment.Screen';
import Edit_Profile_Screen from '../EditProfileScreen/EditProfile.Screen';
import Show_Edit_Notification_Screen from '../NotificationScreen/Show.Edit.Notification';
import Invite_Screen from '../InviteScreen/Invite.Screen';
import Licience_Screen from '../LicienceScreen/Licience.Screem';
import Show_Licience_Screen from '../LicienceScreen/ShowLicience.Screen';
// import W9Form from '../Contract/W9Form';
import ClientForm from '../Contract/ClientForm';
import Contract from '../Contract/Contract';
import W9Form from '../W9Form/W9Form';
import SignNextScreen from '../SignUpScreen/SignNextScreen';

const Main_Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash_Screen">
        <Stack.Screen
          component={Splash_Screen}
          name="Splash_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login_Screen}
          name="Login_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Signup_Screen}
          name="Signup_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={SignNextScreen}
          name="SignNextScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OnBoarding_Screen}
          name="OnBoarding_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home_Screen}
          name="Home_Screen"
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Notification_Screen}
          name="Notification_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Profile_Screen}
          name="Profile_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={File_Screen}
          name="File_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={City_Screen}
          name="City_Screen"
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={ForgotPassword_Screen}
          name="ForgotPassword_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Payment_Screen}
          name="Payment_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Edit_Profile_Screen}
          name="Edit_Profile_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Show_Edit_Notification_Screen}
          name="Show_Edit_Notification_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Invite_Screen}
          name="Invite_Screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Licience_Screen}
          name="Licience_Screen"
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          component={Show_Licience_Screen}
          name="Show_Licience_Screen"
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          component={Contract}
          name="Contract"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={ClientForm}
          name="ClientForm"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={W9Form}
          name="W9Form"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main_Navigation;
