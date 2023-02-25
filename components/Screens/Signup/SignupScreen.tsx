import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  ImageURISource,
} from 'react-native';

//use react navigation
import {HaboRouteList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type SplashScreenProps = NativeStackScreenProps<HaboRouteList>;

//import button images
import AppleBtn from '../../../assets/images/L0_03_Login/Apple.png';
import KakaoBtn from '../../../assets/images/L0_03_Login/Kakao.png';
import NaverBtn from '../../../assets/images/L0_03_Login/Naver.png';

type oauthData = {
  platform: string;
  kor: string;
  nav: string;
  src: ImageURISource;
  backgroundColor: string;
};

const oauth: oauthData[] = [
  {
    platform: 'Apple',
    kor: '애플',
    nav: 'AppleSignup',
    src: AppleBtn,
    backgroundColor: '#FFFFFF',
  },
  {
    platform: 'Kakao',
    kor: '카카오',
    nav: 'KakaoSignup',
    src: KakaoBtn,
    backgroundColor: '#FDD000',
  },
  {
    platform: 'Naver',
    kor: '네이버',
    nav: 'NaverSignup',
    src: NaverBtn,
    backgroundColor: '#5EC539',
  },
];

type oauthProps = {
  oauth: oauthData;
  onPress: () => void;
};

const BtnItem = ({oauth, onPress}: oauthProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      ...styles.btnItem,
      backgroundColor: oauth.backgroundColor,
    }}>
    <Image style={styles.btnImage} source={oauth.src} resizeMode="contain" />
    <Text style={styles.btnText}>{oauth.kor}계정으로 로그인</Text>
  </TouchableOpacity>
);

const SignupScreen = ({navigation}: SplashScreenProps) => {
  const renderItem: ListRenderItem<oauthData> = ({item}) => {
    return (
      <BtnItem oauth={item} onPress={() => navigation.navigate(item.nav)} />
    );
  };

  return (
    <View style={styles.signupContainer}>
      <View style={styles.topLogoContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../../assets/images/L0_03_Login/BgImg.png')}
          resizeMode="cover">
          <Image
            style={styles.logo}
            source={require('../../../assets/images/L0_01_Splash/Logo/White.png')}
            resizeMode="contain"
          />
        </ImageBackground>
      </View>
      <View style={styles.btnContainer}>
        <FlatList data={oauth} renderItem={renderItem} />
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
  signupContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
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
  btnContainer: {
    alignItems: 'center',
  },
  btnItem: {
    width: 343,
    height: 56,
    marginLeft: 8,
    marginRight: 8,
    marginVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnImage: {
    width: 24,
    height: 24,
    flexBasis: 56,
  },
  btnText: {
    color: 'black',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  nonMemberBtn: {
    width: 343,
    height: 56,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textColor: {
    color: 'black',
    fontSize: 16,
  },
});

export default SignupScreen;
