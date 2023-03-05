import React from 'react';
import {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';

//use react navigation
import {HaboRouteList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type SplashScreenProps = NativeStackScreenProps<
  HaboRouteList,
  'AppleSignup'
>;

const AppleSignupScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('SignupForm');
    }, 1500);
    return () => clearTimeout(timeout);
  });

  return (
    <SafeAreaView>
      <Text>Apple Signup Page</Text>
    </SafeAreaView>
  );
};

export default AppleSignupScreen;
