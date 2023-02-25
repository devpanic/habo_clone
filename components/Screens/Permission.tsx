import React from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

//use react navigation
import {HaboRouteList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type SplashScreenProps = NativeStackScreenProps<HaboRouteList>;

const Permission = ({navigation}: SplashScreenProps) => {
  return (
    <View style={styles.permissionContainer}>
      <View>
        <Text style={styles.permissionText}>
          앱 이용을 위해 권한을 {'\n'}
          설정해 주세요.
        </Text>
      </View>
      <View>
        <Image
          source={require('../../assets/images/L0_02_Permission/Save.png')}
        />
        <Text style={styles.permissionText}>
          저장공간(필수) {'\n'}앱 이용 기록, 이미지/동영상 저장 시 사용됩니다.
        </Text>
        <Image
          source={require('../../assets/images/L0_02_Permission/Call.png')}
        />
        <Text style={styles.permissionText}>
          전화 (선택) {'\n'}
          고객센터 전화 연결 시 사용됩니다.
        </Text>
      </View>
      <View>
        <Text style={styles.permissionText}>
          선택 권한 거부 시, 해당 권한이 필요한 일부 기능이 제한될 수 있습니다.
          {'\n'}
          접근 권한 변경은 [휴대폰 설정 - 앱 - 하보]에서 가능합니다.
        </Text>
      </View>
      <View style={styles.okBtnContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.okBtnText}>확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  permissionContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  permissionText: {
    color: 'white',
  },
  okBtnContainer: {
    backgroundColor: 'white',
    marginTop: 'auto',
  },
  okBtnText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Permission;
