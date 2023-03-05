import React from 'react';
import {useState} from 'react';

import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  FlatList,
  ListRenderItem,
  Image,
} from 'react-native';

//use react navigation
import {HaboRouteList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type SplashScreenProps = NativeStackScreenProps<
  HaboRouteList,
  'MusicTasteWhere'
>;

// use navigation stack
import {StackActions} from '@react-navigation/native';
const popAction = StackActions.pop(1);

// Get Where Data
import {Where} from './GridImageData/Where';
import type {WhereData} from './GridImageData/Where';

import {useForm, Controller} from 'react-hook-form';

type FormValues = {
  selectedPlace: string[];
};

const MusicTasteWhereScreen = ({navigation}: SplashScreenProps) => {
  const {handleSubmit, control} = useForm<FormValues>();
  const [selectedCount, setSelectedCount] = useState(0);

  const onSubmit = (data: FormValues) => {
    Alert.alert(JSON.stringify(data));
    navigation.navigate('MusicTasteGenre');
  };

  const renderItem: ListRenderItem<WhereData> = ({item}) => {
    return (
      <Controller
        control={control}
        name={`selectedPlace.${selectedCount}`}
        render={({field: {onChange}}) => (
          <TouchableOpacity
            onPress={() => {
              onChange(item.name);
              setSelectedCount(selectedCount + 1);
            }}>
            <Image source={item.imageSource} />
            {/* <Text>{item.description}</Text> */}
          </TouchableOpacity>
        )}
      />
    );
  };

  return (
    <SafeAreaView style={styles.musicTasteBase}>
      <View style={styles.signupFormHeader}>
        <TouchableOpacity onPress={() => navigation.dispatch(popAction)}>
          <View style={styles.signupFormHeaderImageWrapper}>
            <Image
              style={styles.signupFormHeaderImage}
              source={require('images/L0_06_Signup/Arrow.png')}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <FlatList data={Where} renderItem={renderItem} />
        </View>
      </ScrollView>
      <View style={styles.signupFormFooter}>
        <View style={styles.signupFormNextBtnWrapper}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={styles.nextBtnText}>다음으로</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  musicTasteBase: {flex: 1},
  signupFormHeader: {},
  signupFormHeaderImageWrapper: {},
  signupFormHeaderImage: {},
  signupFormFooter: {},
  signupFormNextBtnWrapper: {},
  nextBtnText: {},
});

export default MusicTasteWhereScreen;
