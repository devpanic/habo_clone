import React from 'react';
import {useEffect} from 'react';
import {Image, StyleSheet, SafeAreaView} from 'react-native';

import {HaboRouteList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type SplashScreenProps = NativeStackScreenProps<
  HaboRouteList,
  'SplashScreen'
>;

import {CommonActions} from '@react-navigation/native';

const SplashScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Permission'}],
        }),
      );
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <SafeAreaView style={styles.background}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/L0_01_Splash/Logo/White.png')}
        resizeMode="contain"
      />
    </SafeAreaView>
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
