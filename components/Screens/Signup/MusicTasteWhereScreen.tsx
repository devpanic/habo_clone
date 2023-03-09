import React, { useEffect } from 'react';
import { useState } from 'react';

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
  Dimensions,
} from 'react-native';

//use react navigation
import { HaboRouteList } from '../../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
export type SplashScreenProps = NativeStackScreenProps<
  HaboRouteList,
  'MusicTasteWhere'
>;

// use navigation stack
import { StackActions } from '@react-navigation/native';
const popAction = StackActions.pop(1);

// Get Where Data
import { Where } from './GridImageData/Where';
import type { WhereData } from './GridImageData/Where';

import { useForm, Controller } from 'react-hook-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type FormValues = {
  selectedPlace: boolean[];
};

const MusicTasteWhereScreen = ({ navigation }: SplashScreenProps) => {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    Alert.alert(JSON.stringify(data));
    navigation.navigate('MusicTasteGenre');
  };

  const renderItem: ListRenderItem<WhereData> = ({ item }) => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        // padding: 5,
      }}>
        <Controller
          control={control}
          name={`selectedPlace.${item.id - 1}`}
          defaultValue={false}
          render={({ field: { value, onChange } }) => (
            <TouchableOpacity
              // style={value ? {backgroundColor: 'red'} : {backgroundColor: 'blue'}}
              onPress={() => {
                onChange(!value);
              }}>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image
                  source={item.imageSource}
                  style={{ height: 140, width: '100%', maxWidth: 140 }}
                  resizeMode="contain"
                />
                <View style={{ width: 140 }}>
                  <Text style={{ textAlign: 'center', marginTop: 16 }}>{item.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.musicTasteBase}>
      <View style={styles.musicTasteHeader}>
        <TouchableOpacity
          style={styles.musicTasteHeaderImageWrapper}
          onPress={() => navigation.dispatch(popAction)}
        >
          <Image
            style={styles.musicTasteHeaderImage}
            source={require('images/L0_06_Signup/Arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.musicTasteHeaderText}>
          어떤 곳에서 음악을 듣고 싶나요?
        </Text>
      </View>

      <View style={styles.musicTasteBody}>
        <FlatList
          data={Where}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          numColumns={2}
          horizontal={false}
          style={{
            // margin: 34,
            marginHorizontal: 34,
            marginTop: 12,
          }}
          columnWrapperStyle={
            {
              // flex: 1,
              justifyContent: 'space-between',
              paddingTop: 32,
            }
          }
        />
      </View>

      <View style={styles.musicTasteFooter}>
        <View style={styles.musicTasteNextBtnWrapper}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={styles.nextBtnText}>다음으로</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  musicTasteBase: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  musicTasteHeader: {
    padding: 12,
  },
  musicTasteHeaderImageWrapper: {
    width: 32,
    height: 32,
  },
  musicTasteHeaderImage: {
    marginVertical: 6.57,
    marginLeft: 9.33,
  },
  musicTasteHeaderText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#000000',
    marginLeft: 4,
    // marginBottom: 48,
  },
  musicTasteBody: {
  },
  WhereWrapper: {
  },
  WhereItem: {
  },
  WhereImage: {
  },
  musicTasteFooter: {
    marginTop: 'auto',
  },
  musicTasteNextBtnWrapper: {
    backgroundColor: '#000000',
    paddingVertical: 24,
  },
  nextBtnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MusicTasteWhereScreen;
