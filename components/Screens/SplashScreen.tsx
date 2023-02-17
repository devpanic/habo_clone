import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Button} from 'react-native';

import {HaboRouteList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SplashScreenProps = NativeStackScreenProps<HaboRouteList, 'Home'>;

const SplashScreen = ({navigation}: SplashScreenProps) => {
  return (
    <View style={styles.background}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/L0_01_Splash/Logo/White.png')}
        resizeMode="contain"
      />
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 195,
    height: 36,
  },
});

export default SplashScreen;
