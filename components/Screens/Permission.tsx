import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

//use react navigation
import {HaboRouteList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type SplashScreenProps = NativeStackScreenProps<
  HaboRouteList,
  'Permission'
>;

const Permission = ({navigation}: SplashScreenProps) => {
  return (
    <SafeAreaView style={styles.permissionContainer}>
      <View style={styles.permissionHeader}>
        <Text style={styles.permissionTextMain}>
          앱 이용을 위해 권한을 {'\n'}
          설정해 주세요.
        </Text>
      </View>
      <View style={styles.permissionBody}>
        {/* 찢어 */}
        <View style={styles.permissionSubContainer}>
          <View style={styles.permissionImgWrapper}>
            <Image
              style={styles.permissionSubImage}
              source={require('../../assets/images/L0_02_Permission/Save.png')}
            />
          </View>
          {/* <View style={{width: '100%', flexWrap: 'wrap'}}> */}
          <View style={styles.permissionTextWrapper}>
            <Text style={styles.permissionTextSubTitle}>저장공간(필수)</Text>
            <Text style={styles.permissionText}>
              앱 이용 기록, 이미지/동영상 저장 시{'\n'}사용됩니다.
            </Text>
          </View>
        </View>
        <View style={styles.permissionSubContainer}>
          <View style={styles.permissionImgWrapper}>
            <Image
              style={styles.permissionSubImage}
              source={require('../../assets/images/L0_02_Permission/Call.png')}
            />
          </View>
          <View style={styles.permissionTextWrapper}>
            <Text style={styles.permissionTextSubTitle}>전화(선택)</Text>
            <Text style={styles.permissionText}>
              고객센터 전화 연결 시 사용됩니다.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.permissionFooter}>
        <View style={styles.permissionFooterTextWrapper}>
          <Text style={styles.permissionText}>
            {'\u2022' + ''} 선택 권한 거부 시, 해당 권한이 필요한 일부 기능이
            제한될 수 {'\n'}있습니다.
            {'\n'}
            {'\u2022' + ''} 접근 권한 변경은 [휴대폰 설정 - 앱 - 하보]에서
            가능합니다.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.okBtnContainer}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.okBtnText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  permissionContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  permissionHeader: {
    padding: 16,
    marginVertical: 24,
  },
  permissionBody: {
    padding: 8,
    marginHorizontal: 8,
  },
  permissionTextMain: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 24,
  },
  permissionSubContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 24,
  },
  permissionImgWrapper: {},
  permissionSubImage: {
    width: 64,
  },
  permissionTextWrapper: {
    width: '100%',
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  permissionTextSubTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
    paddingBottom: 4,
  },
  permissionFooter: {
    padding: 16,
    marginTop: 'auto',
  },
  permissionFooterTextWrapper: {
    marginBottom: 40,
  },
  permissionText: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 14,
  },
  okBtnContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 24,
  },
  okBtnText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Permission;
