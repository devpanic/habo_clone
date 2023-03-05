import React from 'react';
import {useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';

//use react navigation
import {HaboRouteList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type SplashScreenProps = NativeStackScreenProps<
  HaboRouteList,
  'KakaoSignup'
>;

const KakaoSignupScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('SignupForm');
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <SafeAreaView>
      <Text>Kakao Signup Page</Text>
    </SafeAreaView>
  );
};

export default KakaoSignupScreen;
