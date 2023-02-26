import React from 'react';
import {useState} from 'react';

import {Text, View, Button, StyleSheet, TextInput} from 'react-native';

import {useForm, Controller} from 'react-hook-form';
import SelectDropdown from 'react-native-select-dropdown';
import CheckBox from '@react-native-community/checkbox';

type FormValues = {
  nickName: string;
  email: string;
  location: string;
  agreement: string;
};

const countries = ['서울특별시', '인천광역시', '광주광역시', '부산광역시'];

const SignupFormScreen = () => {
  const {handleSubmit, control} = useForm<FormValues>();
  const onSubmit = data => alert(JSON.stringify(data));
  const [isSelected, setSelection] = useState(false);

  return (
    <View>
      <Text>기본 정보를 입력해주세요.</Text>
      <View>
        <Text>닉네임</Text>
        <Controller
          control={control}
          name="nickName"
          render={({field: {onChange, value}}) => (
            <TextInput
              style={styles.input}
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
              style={styles.input}
              onChangeText={onChange}
              value={value}
              placeholder="이메일을 입력해 주세요."
            />
          )}
        />
      </View>
      <View>
        <Controller
          control={control}
          name="location"
          render={({field: {onChange, value}}) => (
            <SelectDropdown
              defaultButtonText="전체 지역"
              data={countries}
              onSelect={onChange}
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
      <View>
        <Controller
          control={control}
          name="agreement"
          render={({field: {onChange, value}}) => (
            <CheckBox
              disabled={false}
              value={isSelected}
              onValueChange={newValue => setSelection(newValue)}
              onChange={onChange}
            />
          )}
        />
      </View>
      <View>
        <Button onPress={handleSubmit(onSubmit)} title="다음으로" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {},
});

export default SignupFormScreen;
