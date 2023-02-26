import React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';

//use react navigation
import {HaboRouteList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type SplashScreenProps = NativeStackScreenProps<HaboRouteList>;

const AppleSignupScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('SignupForm');
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <View>
      <Text>Apple Signup Page</Text>
    </View>
  );
};

export default AppleSignupScreen;
