import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native';

import {HaboRouteList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SplashScreenProps = NativeStackScreenProps<HaboRouteList>;

const SignupScreen = ({navigation}: SplashScreenProps) => {
  return (
    <View>
      <Button
        title="Go to AppleSignup"
        onPress={() => navigation.navigate('AppleSignup')}
      />
      <Button
        title="Go to KaKaoSignup"
        onPress={() => navigation.navigate('KakaoSignup')}
      />
      <Button
        title="Go to NaverSignup"
        onPress={() => navigation.navigate('NaverSignup')}
      />
      <Button
        title="Go to NonMember"
        onPress={() => navigation.navigate('NonMember')}
      />
    </View>
  );
};

export default SignupScreen;
