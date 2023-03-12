/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './components/Screens/SplashScreen';
import SignupScreen from './components/Screens/Signup/SignupScreen';
import AppleSignupScreen from './components/Screens/Signup/AppleSignupScreen';
import NaverSignupScreen from './components/Screens/Signup/NaverSignupScreen';
import KakaoSignupScreen from './components/Screens/Signup/KakaoSignupScreen';
import NonMemberScreen from './components/Screens/Signup/NonMemberScreen';
import Permission from './components/Screens/Permission';
import SignupFormScreen from './components/Screens/Signup/SignupFormScreen';
import MusicTasteWhereScreen from './components/Screens/Signup/MusicTasteWhereScreen';
import MusicTasteGenreScreen from './components/Screens/Signup/MusicTasteGenreScreen';
import MusicTasteMoodScreen from './components/Screens/Signup/MusicTasteMoodScreen';
import SignupFinishScreen from './components/Screens/Signup/SignupFinishScreen';

const RouteStack = createNativeStackNavigator<HaboRouteList>();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RouteStack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{headerShown: false}}>
          <RouteStack.Screen name="SplashScreen" component={SplashScreen} />
          <RouteStack.Screen name="Signup" component={SignupScreen} />
          <RouteStack.Screen name="AppleSignup" component={AppleSignupScreen} />
          <RouteStack.Screen name="NaverSignup" component={NaverSignupScreen} />
          <RouteStack.Screen name="KakaoSignup" component={KakaoSignupScreen} />
          <RouteStack.Screen name="NonMember" component={NonMemberScreen} />
          <RouteStack.Screen name="Permission" component={Permission} />
          <RouteStack.Screen name="SignupForm" component={SignupFormScreen} />
          <RouteStack.Screen
            name="MusicTasteWhere"
            component={MusicTasteWhereScreen}
          />
          <RouteStack.Screen
            name="MusicTasteGenre"
            component={MusicTasteGenreScreen}
          />
          <RouteStack.Screen
            name="MusicTasteMood"
            component={MusicTasteMoodScreen}
          />
          <RouteStack.Screen
            name="SignupFinish"
            component={SignupFinishScreen}
          />
        </RouteStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export type HaboRouteList = {
  SplashScreen: undefined;
  Signup: undefined;
  AppleSignup: undefined;
  NaverSignup: undefined;
  KakaoSignup: undefined;
  NonMember: undefined;
  Permission: undefined;
  SignupForm: undefined;
  MusicTasteWhere: undefined;
  MusicTasteGenre: undefined;
  MusicTasteMood: undefined;
  SignupFinish: undefined;
};

export default App;
