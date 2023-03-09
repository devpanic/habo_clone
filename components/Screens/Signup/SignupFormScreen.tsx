import React, { useEffect } from 'react';
import {useState} from 'react';

import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {useForm, Controller} from 'react-hook-form';
import SelectDropdown from 'react-native-select-dropdown';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// use react navigation
import {HaboRouteList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type SplashScreenProps = NativeStackScreenProps<
  HaboRouteList,
  'SignupForm'
>;

// use navigation stack
import {StackActions} from '@react-navigation/native';
const popAction = StackActions.pop(1);

type FormValues = {
  nickName: string;
  email: string;
  location: string;
  agreement: boolean[];
  subCountry: string;
};

enum Country {
  SEOUL = '서울특별시',
  INCHEON = '인천광역시',
  GWANGJU = '광주광역시',
  BUSAN = '부산광역시',
}
enum SubCountry {
  SEOUL_YONGSAN = '용산구',
  SEOUL_NOWON = '노원구',
}

type CountryMap = {
  [Country.SEOUL]: Array<SubCountry>;
  [Country.INCHEON]: Array<SubCountry>;
  [Country.GWANGJU]: Array<SubCountry>;
  [Country.BUSAN]: Array<SubCountry>;
};
const countryMap: CountryMap = {
  [Country.SEOUL]: [SubCountry.SEOUL_NOWON, SubCountry.SEOUL_YONGSAN],
  [Country.INCHEON]: [SubCountry.SEOUL_NOWON, SubCountry.SEOUL_YONGSAN], // TODO: fixme
  [Country.GWANGJU]: [SubCountry.SEOUL_NOWON, SubCountry.SEOUL_YONGSAN], // TODO: fixme
  [Country.BUSAN]: [SubCountry.SEOUL_NOWON, SubCountry.SEOUL_YONGSAN], // TODO: fixme
};

const SignupFormScreen = ({navigation}: SplashScreenProps) => {
  const defaultValues = {
    email: 'abc@gmail.com', //TODO get email from oauth
  }

  const {handleSubmit, control, reset} = useForm<FormValues>();

  useEffect(() => {
    reset({ ...defaultValues });
   }, []);

  const [nickNameFocus, setNickNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [totalAgreed, setTotalAgreed] = useState<boolean>(false); // 전체 동의
  const [serviceTermAgreed, setServiceTermAgreed] = useState<boolean>(false); // (필수) 서비스 이용약관에 동의
  const [privacyTermAgreed, setPrivacyTermAgreed] = useState<boolean>(false); // (필수) 개인정보 처리방침에 동의
  const [marketingTermAgreed, setMarketTermAgreed] = useState<boolean>(false); // (선택) 마케팅 이용에 동의

  useEffect(() => {
    if (totalAgreed) {
      setServiceTermAgreed(true);
      setPrivacyTermAgreed(true);
      setMarketTermAgreed(true);
    } else if (!totalAgreed && serviceTermAgreed && privacyTermAgreed && marketingTermAgreed) {
      setServiceTermAgreed(false);
      setPrivacyTermAgreed(false);
      setMarketTermAgreed(false);
    }
  }, [totalAgreed]);

  useEffect(() => {
    if (serviceTermAgreed && privacyTermAgreed && marketingTermAgreed) {
      setTotalAgreed(true)
    } else {
      setTotalAgreed(false);
    }
  }, [serviceTermAgreed, privacyTermAgreed, marketingTermAgreed]);

  const checkboxImage = () => {
    return (
      <Image
        source={require('../../../assets/images/L0_06_Signup/Checked.png')}
      />
    );
  };

  const validateEmail = (email: string) => {
    const emailReg =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(email);
  };

  const onSubmit = (data: FormValues) => {
    Alert.alert(JSON.stringify(data));
    if (!validateEmail(data.email)) {
      // not a valid email
      // Alert.alert('이메일이 유효하지 않습니다');
    } else {
      // valid email
      Alert.alert('이메일 굿!');
      navigation.navigate('MusicTasteWhere');
    }
  };

  const [mainCountry, setMainCountry] = useState<Country | null>(null);
  const [subCountry, setSubCountry] = useState<SubCountry | null>(null);

  return (
    <SafeAreaView style={styles.signupFormContainer}>
      <View style={styles.signupFormHeader}>
        <TouchableOpacity onPress={() => navigation.dispatch(popAction)}>
          <View style={styles.signupFormHeaderImageWrapper}>
            <Image
              style={styles.signupFormHeaderImage}
              source={require('../../../assets/images/L0_06_Signup/Arrow.png')}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.signupFormScrollView}>
        <View style={styles.signupFormHeader}>
          <Text style={styles.signupFormHeaderText}>
            기본 정보를 입력해주세요.
          </Text>
        </View>
        <View style={styles.signupFormBody}>
          <View style={styles.signupFormSubContainer}>
            <View style={styles.signupFormSubTextWrapper}>
              <Text style={styles.signupFormSubTitle}>닉네임</Text>
            </View>
            <View
              style={
                nickNameFocus
                  ? styles.signupFormSubInputWrapperFocused
                  : styles.signupFormSubInputWrapperUnfocused
              }>
              <Controller
                control={control}
                name="nickName"
                render={({field: {onChange, value}}) => (
                  <TextInput
                    style={styles.textInput}
                    onChangeText={onChange}
                    value={value}
                    onFocus={() => setNickNameFocus(true)}
                    onBlur={() => setNickNameFocus(false)}
                    placeholder="닉네임을 입력해 주세요."
                  />
                )}
              />
              <View style={styles.signupFormNickNameValid}>
                <TouchableOpacity style={styles.signupFormNickNameValidBtn}>
                  <Text style={styles.nickNameValidBtnText}>랜덤닉네임</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupFormNickNameValidBtn}>
                  <Text style={styles.nickNameValidBtnText}>중복확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.signupFormSubContainer}>
            <View style={styles.signupFormSubTextWrapper}>
              <Text style={styles.signupFormSubTitle}>이메일</Text>
            </View>
            <View
              style={
                emailFocus
                  ? styles.signupFormSubInputWrapperFocused
                  : styles.signupFormSubInputWrapperUnfocused
              }>
              <Controller
                control={control}
                name="email"
                defaultValue=''
                render={({field: {onChange, value}}) => (
                  <TextInput
                    style={styles.textInput}
                    onChangeText={onChange}
                    value={value}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    placeholder="이메일을 입력해 주세요."
                  />
                )}
              />
            </View>
          </View>
          <View style={styles.signupFormSubContainer}>
            <View style={styles.signupFormSubTextWrapper}>
              <Text style={styles.signupFormSubTitle}>(선택) 지역선택</Text>
            </View>
            <View style={styles.signupFormSubSelectWrapper}>
              <View>
                <Controller
                  control={control}
                  name="location"
                  render={({field: {onChange}}) => (
                    <SelectDropdown
                      defaultButtonText="전체 지역"
                      data={Object.values(Country)}
                      onSelect={(selectedItem: Country) => {
                        onChange(selectedItem);
                        setMainCountry(selectedItem);
                        setSubCountry(countryMap[selectedItem][0]);
                      }}
                      buttonTextAfterSelection={selectedItem => {
                        return selectedItem;
                      }}
                      rowTextForSelection={item => {
                        return item;
                      }}
                      buttonStyle={styles.selectDropdown}
                      buttonTextStyle={styles.SelectDropdownText}
                      rowTextStyle={styles.SelectDropdownRowText}
                    />
                  )}
                />
              </View>
              {!!subCountry && (
                <View>
                  <Controller
                    control={control}
                    name="subCountry"
                    render={({field: {onChange}}) => (
                      <SelectDropdown
                        defaultButtonText="세부 지역"
                        data={Object.values(
                          mainCountry ? countryMap[mainCountry] : [],
                        )}
                        onSelect={(selectedItem: SubCountry) => {
                          onChange(selectedItem);
                          setSubCountry(selectedItem);
                        }}
                        buttonTextAfterSelection={selectedItem => {
                          return selectedItem;
                        }}
                        rowTextForSelection={item => {
                          return item;
                        }}
                        buttonStyle={styles.selectDropdown}
                        buttonTextStyle={styles.SelectDropdownText}
                        rowTextStyle={styles.SelectDropdownRowText}
                      />
                    )}
                  />
                </View>
              )}
            </View>
          </View>

          {/* 전체 동의 */}
          <View style={styles.signupFormSubContainer}>
            <View style={styles.signupFormCheckboxOverall}>
              <View style={styles.signupFormCheckboxWrapper}>
                <Controller
                  control={control}
                  name="agreement.0"
                  render={({field: {onChange}}) => (
                    <BouncyCheckbox
                      isChecked={totalAgreed}
                      onPress={() => {
                        onChange(!totalAgreed);
                        setTotalAgreed(!totalAgreed);
                      }}
                      disableBuiltInState
                      style={
                        totalAgreed ? styles.checkboxNotChecked : styles.checkbox
                      }
                      innerIconStyle={styles.checkboxBorder}
                      iconStyle={styles.checkboxBorder}
                      fillColor="#CFFF10"
                      ImageComponent={checkboxImage}
                      textComponent={
                        <Text style={styles.signupFormCheckboxText}>
                          전체 동의
                        </Text>
                      }
                    />
                  )}
                />
                
              </View>
            </View>

            {/* 서비스 이용약관 동의 */}
            <View style={styles.signupFormCheckboxWrapper}>
              <Controller
                control={control}
                name="agreement.1"
                render={({field: {onChange}}) => (
                  <BouncyCheckbox
                    isChecked={serviceTermAgreed}
                    onPress={() => {
                      onChange(!serviceTermAgreed);
                      setServiceTermAgreed(!serviceTermAgreed);
                    }}
                    style={
                      serviceTermAgreed ? styles.checkboxNotChecked : styles.checkbox
                    }
                    disableBuiltInState
                    innerIconStyle={styles.checkboxBorder}
                    iconStyle={styles.checkboxBorder}
                    fillColor="#CFFF10"
                    ImageComponent={checkboxImage}
                    textComponent={
                      <Text style={styles.signupFormCheckboxText}>
                        (필수) 서비스 이용약관에 동의합니다.
                      </Text>
                    }
                  />
                )}
              />
              
            </View>

            {/* 개인정보 처리 방침 동의 */}
            <View style={styles.signupFormCheckboxWrapper}>
              <Controller
                control={control}
                name="agreement.2"
                render={({field: {onChange}}) => (
                  <BouncyCheckbox
                    isChecked={privacyTermAgreed}
                    onPress={() => {
                      onChange(!privacyTermAgreed);
                      setPrivacyTermAgreed(!privacyTermAgreed);
                    }}
                    disableBuiltInState
                    style={
                      privacyTermAgreed ? styles.checkboxNotChecked : styles.checkbox
                    }
                    innerIconStyle={styles.checkboxBorder}
                    iconStyle={styles.checkboxBorder}
                    fillColor="#CFFF10"
                    ImageComponent={checkboxImage}
                    textComponent={
                      <Text style={styles.signupFormCheckboxText}>
                        (필수) 개인정보 처리방침에 동의합니다.
                      </Text>
                    }
                  />
                )}
              />
            </View>

            {/* 마케팅 동의 */}
            <View style={styles.signupFormCheckboxWrapper}>
              <Controller
                control={control}
                name="agreement.3"
                render={({field: {onChange}}) => (
                  <BouncyCheckbox
                    isChecked={marketingTermAgreed}
                    onPress={() => {
                      onChange(!marketingTermAgreed);
                      setMarketTermAgreed(!marketingTermAgreed);
                    }}
                    style={
                      marketingTermAgreed ? styles.checkboxNotChecked : styles.checkbox
                    }
                    disableBuiltInState
                    innerIconStyle={styles.checkboxBorder}
                    iconStyle={styles.checkboxBorder}
                    fillColor="#CFFF10"
                    ImageComponent={checkboxImage}
                    textComponent={
                      <Text style={styles.signupFormCheckboxText}>
                        (선택) 마케팅 이용에 동의합니다.
                      </Text>
                    }
                  />
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.signupFormFooter}>
        <View style={!serviceTermAgreed || !privacyTermAgreed ? styles.signupFormNextBtnWrapperDisabled : styles.signupFormNextBtnWrapper}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            disabled={!serviceTermAgreed || !privacyTermAgreed}
          >
            <Text style={styles.nextBtnText}>다음으로</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signupFormContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  signupFormScrollView: {
    flexGrow: 1,
  },
  signupFormHeader: {
    paddingHorizontal: 12,
  },
  signupFormHeaderImageWrapper: {
    paddingVertical: 12,
    width: 32,
    height: 32,
  },
  signupFormHeaderImage: {
    marginVertical: 6.57,
    marginLeft: 9.33,
  },
  signupFormHeaderText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#000000',
    marginLeft: 4,
    marginVertical: 36,
  },
  signupFormBody: {
    paddingHorizontal: 16,
  },
  signupFormFooter: {
    marginTop: 'auto',
  },
  signupFormNextBtnWrapper: {
    backgroundColor: '#000000',
    paddingVertical: 24,
  },
  signupFormNextBtnWrapperDisabled: {
    backgroundColor: 'red', // TODO: change style
    paddingVertical: 24,
  },
  signupFormSubContainer: {
    marginBottom: 32,
  },
  signupFormSubTitle: {
    marginLeft: 4,
  },
  signupFormSubTextWrapper: {
    //TODO android ios layout gap
  },
  signupFormSubInputWrapperUnfocused: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'rgba(0, 0, 0, .1)',
    borderBottomWidth: 1,
    paddingRight: 4,
  },
  signupFormSubInputWrapperFocused: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  signupFormNickNameValid: {
    flexDirection: 'row',
    width: 126,
    marginRight: 4,
    //TODO android ios layout gap
  },
  signupFormNickNameValidBtn: {
    height: 28,
    paddingVertical: 5,
    paddingHorizontal: 7,
    marginRight: 4,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    //TODO android ios layout gap
  },
  nickNameValidBtnText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#000000',
  },
  signupFormSubSelectWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  signupFormCheckboxOverall: {
    marginTop: 8,
    borderBottomColor: 'rgba(0, 0, 0, .1)',
    borderBottomWidth: 1,
  },
  signupFormCheckboxWrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  signupFormCheckboxText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#000000',
  },
  textInput: {
    fontSize: 14,
    color: '#000000',
  },
  nextBtnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  selectDropdown: {
    width: 161,
    height: 35,
    backgroundColor: '#FFFFFF',
    borderBottomColor: 'rgba(0, 0, 0, .1)',
    borderBottomWidth: 1,
  },
  SelectDropdownText: {
    fontSize: 16,
  },
  SelectDropdownRowText: {
    fontSize: 16,
  },
  checkbox: {
    marginRight: 12,
    width: '100%',
    height: 24,
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 0,
  },
  checkboxNotChecked: {
    marginRight: 12,
    width: '100%',
    height: 24,
    borderWidth: 0,
    borderColor: '#FFFFFF',
    borderRadius: 0,
  },
  checkboxBorder: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .2)',
  },
});

export default SignupFormScreen;
