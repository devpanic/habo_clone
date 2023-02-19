import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {HaboRouteList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SplashScreenProps = NativeStackScreenProps<HaboRouteList>;

const SignupScreen = ({navigation}: SplashScreenProps) => {
  return (
    <View style={styles.signupContainer}>
      <View style={styles.topLogoContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../../assets/images/L0_03_Login/BgImg.png')}
          resizeMode="contain">
          <Image
            style={styles.logo}
            source={require('../../../assets/images/L0_01_Splash/Logo/White.png')}
            resizeMode="contain"
          />
        </ImageBackground>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AppleSignup')}
          style={styles.appleBtn}>
          <Image
            source={require('../../../assets/images/L0_03_Login/Apple.png')}
            resizeMode="contain"
          />
          <Text style={styles.textColor}>애플 계정으로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('KakaoSignup')}
          style={styles.kakaoBtn}>
          <Image
            source={require('../../../assets/images/L0_03_Login/Kakao.png')}
            resizeMode="contain"
          />
          <Text style={styles.textColor}>카카오 계정으로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('NaverSignup')}
          style={styles.naverBtn}>
          <Image
            source={require('../../../assets/images/L0_03_Login/Naver.png')}
            resizeMode="contain"
          />
          <Text style={styles.textColor}>네이버 계정으로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('NonMember')}
          style={styles.nonMemberBtn}>
          <Text style={{color: 'white'}}>비회원으로 둘러보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topLogoContainer: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 195,
    height: 36,
  },
  signupContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  btnContainer: {
    justifyContent: 'flex-end',
    backgroundColor: 'black',
  },
  appleBtn: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  kakaoBtn: {
    backgroundColor: '#FDD000',
    padding: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  naverBtn: {
    backgroundColor: '#5EC539',
    padding: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  nonMemberBtn: {
    padding: 10,
    color: 'white',
    marginLeft: 8,
    marginRight: 8,
  },
  textColor: {
    color: 'black',
    fontSize: 16,
  },
});

export default SignupScreen;
