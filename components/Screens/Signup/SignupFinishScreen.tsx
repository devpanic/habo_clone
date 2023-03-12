import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

//use react navigation
import {HaboRouteList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type ScreenNavigationProps = NativeStackScreenProps<
  HaboRouteList,
  'SignupFinish'
>;

const SignupFinishScreen = ({navigation}: ScreenNavigationProps) => {
  return (
    <SafeAreaView style={styles.signupFinishBase}>
      <View style={styles.signupFinishHeader}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('images/L0_03_Login/BgImg.png')}
          resizeMode="stretch">
          <Text style={styles.signupFinishHeaderText}>
            PICK YOUR{'\n'}MUSIC{'\n'}& PLACE
          </Text>
          <View style={styles.emptySpace} />
          <View style={styles.signupFinishBody}>
            <Text style={styles.signupFinishBodyTextMain}>
              miyeon님 환영합니다.
            </Text>
            <Text style={styles.signupFinishBodyText}>앞으로 HABO에서</Text>
            <Text style={styles.signupFinishBodyText}>
              다양한 베뉴와 이벤트를 만나보세요.
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.SignupFinishFooter}>
        <View style={styles.SignupFinishNextBtnWrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Permission');
            }}>
            <Text style={styles.nextBtnText}>지금 바로 HABO 시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signupFinishBase: {
    flex: 1,
    backgroundColor: '#000000',
    width: '100%',
  },
  signupFinishHeader: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupFinishHeaderText: {
    fontWeight: '700',
    fontSize: 36,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 204,
  },
  emptySpace: {
    width: 24,
    marginVertical: 64,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 2,
  },
  signupFinishBody: {
    width: '100%',
  },
  signupFinishBodyTextMain: {
    fontWeight: '700',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    paddingVertical: 4,
    marginBottom: 8,
  },
  signupFinishBodyText: {
    fontWeight: '500',
    fontSize: 16,
    color: 'rgba(255, 255, 255, .5)',
    textAlign: 'center',
    paddingVertical: 4,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  SignupFinishFooter: {
    marginTop: 'auto',
  },
  SignupFinishNextBtnWrapper: {
    backgroundColor: '#ffffff',
    paddingVertical: 24,
  },
  nextBtnText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SignupFinishScreen;
