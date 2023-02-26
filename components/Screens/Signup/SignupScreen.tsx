import React from 'react';
import {
  Image,
  View,
  SafeAreaView,
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
    <View style={styles.btnImageWrapper}>
      <Image style={styles.btnImage} source={oauth.src} resizeMode="contain" />
    </View>
    <Text style={styles.btnText}>{oauth.kor}계정으로 로그인</Text>
  </TouchableOpacity>
);

const SignupScreen = ({navigation}: SplashScreenProps) => {
  const renderItem: ListRenderItem<oauthData> = ({item}) => {
    return (
      <BtnItem oauth={item} onPress={() => navigation.navigate(item.nav as any)} />
    );
  };

  return (
    <SafeAreaView style={styles.signupContainer}>
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
        {/* TODO: move inline styles to component styles */}
        <FlatList data={oauth} renderItem={renderItem} style={{'width': '100%', 'paddingLeft': 16, 'paddingRight': 16}} />
        <TouchableOpacity
          onPress={() => navigation.navigate('NonMember')}
          style={styles.nonMemberBtn}>
          <Text style={{color: 'white'}}>비회원으로 둘러보기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    backgroundColor: 'black',
    width: '100%',
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
  },
  btnContainer: {
    alignItems: 'center',
    width: '100%',
  },
  btnItem: {
    position: 'relative',
    marginVertical: 6,
    width: '100%',
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'left',
  },
  btnImageWrapper: {
    position: 'absolute',
    left: 16,
    top: 0,
    bottom: 0,
    marginHorizontal: 0,
    marginVertical: 'auto',
    alignItems: 'center',
    // width: 24
  },
  btnImage: {
    width: 24,
    height: "100%",
  },
  btnText: {
    textAlign: 'center',
    width: '100%',
    marginVertical: 0,
    marginHorizontal: 'auto',
  },
  nonMemberBtn: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 26,
    marginBottom: 10,
  },
  textColor: {
    color: 'black',
    fontSize: 16,
  },
});

export default SignupScreen;
