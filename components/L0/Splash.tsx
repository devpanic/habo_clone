import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.background}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/L0_01_Splash/Logo/White.png')}
        resizeMode="contain"
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

export default Splash;
