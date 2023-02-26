import React from 'react';
import {useState} from 'react';

import {Text, View, SafeAreaView, StyleSheet, TextInput, Alert, TouchableOpacity} from 'react-native';

import {useForm, Controller} from 'react-hook-form';
import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from '@react-native-community/checkbox';

type FormValues = {
  nickName: string;
  email: string;
  location: string;
  agreement: string;
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
  [Country.SEOUL]: Array<SubCountry>,
  [Country.INCHEON]: Array<SubCountry>,
  [Country.GWANGJU]: Array<SubCountry>,
  [Country.BUSAN]: Array<SubCountry>,
}
const countryMap: CountryMap = {
  [Country.SEOUL]: [SubCountry.SEOUL_NOWON, SubCountry.SEOUL_YONGSAN],
  [Country.INCHEON]: [SubCountry.SEOUL_NOWON, SubCountry.SEOUL_YONGSAN], // TODO: fixme
  [Country.GWANGJU]: [SubCountry.SEOUL_NOWON, SubCountry.SEOUL_YONGSAN], // TODO: fixme
  [Country.BUSAN]: [SubCountry.SEOUL_NOWON, SubCountry.SEOUL_YONGSAN], // TODO: fixme
}

const SignupFormScreen = () => {
  const {handleSubmit, control} = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    Alert.alert(JSON.stringify(data));
  };
  const [mainCountry, setMainCountry] = useState<Country | null>(null);
  const [subCountry, setSubCountry] = useState<SubCountry | null>(null);

  return (
    <SafeAreaView>
      <Text>기본 정보를 입력해주세요.</Text>
      <View>
        <Text>닉네임</Text>
        <Controller
          control={control}
          name="nickName"
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              value={value}
              placeholder="닉네임을 입력해 주세요."
            />
          )}
        />
      </View>
      <View>
        <Text>이메일</Text>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.textInput}
              onChangeText={onChange}
              value={value}
              placeholder="이메일을 입력해 주세요."
            />
          )}
        />
      </View>
      <View>
        <Text>(선택) 지역선택</Text>
        <Controller
          control={control}
          name="location"
          render={({field: {onChange, value}}) => (
            <SelectDropdown
              defaultButtonText="전체 지역"
              data={Object.values(Country)}
              onSelect={(selectedItem: Country, index: number) => {
                onChange(selectedItem)
                setMainCountry(selectedItem);

                setSubCountry(countryMap[selectedItem][0])
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          )}
        />
      </View>
      {!!subCountry && (
        <View>
          <Controller
            control={control}
            name="subCountry"
            render={({field: {onChange, value}}) => (
              <SelectDropdown
                defaultButtonText="세부 지역"
                data={Object.values(mainCountry ? countryMap[mainCountry] : [])}
                onSelect={(selectedItem: SubCountry, index: number) => {
                  onChange(selectedItem)
                  setSubCountry(selectedItem)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            )}
          />
        </View>
      )}
      <View>
        <Controller
          control={control}
          name="agreement"
          render={({field: {onChange, value}}) => (
            <CheckBox
              disabled={false}
              value={value}
              onValueChange={onChange}
            />
          )}
        />
        <Text>전체 동의</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.nextBtn}>
          <Text>다음으로</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {},
  nextBtn: {}
});

export default SignupFormScreen;
