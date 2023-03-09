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
  'MusicTasteGenre'
>;

// use navigation stack
import {StackActions} from '@react-navigation/native';
const popAction = StackActions.pop(1);

// Get Genre Data
import {Genre} from './GridImageData/Genre';
import type {GenreData} from './GridImageData/Genre';

import {useForm, Controller} from 'react-hook-form';

type FormValues = {
  selectedGenre: string[];
};

const MusicTasteGenreScreen = ({navigation}: SplashScreenProps) => {
  const {handleSubmit, control} = useForm<FormValues>();
  const [selectedCount, setSelectedCount] = useState(0);

  const onSubmit = (data: FormValues) => {
    Alert.alert(JSON.stringify(data));
    navigation.navigate('MusicTasteMood');
  };

  const renderItem: ListRenderItem<GenreData> = ({item}) => {
    return (
      <Controller
        control={control}
        name={`selectedGenre.${selectedCount}`}
        render={({field: {onChange}}) => (
          <TouchableOpacity
            onPress={() => {
              onChange(item.name);
              setSelectedCount(selectedCount + 1);
            }}>
            <Image source={item.imageSource} />
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    );
  };

  return (
    <SafeAreaView style={styles.musicTasteBase}>
      <View style={styles.musicTasteHeader}>
        <TouchableOpacity onPress={() => navigation.dispatch(popAction)}>
          <View style={styles.musicTasteHeaderImageWrapper}>
            <Image
              style={styles.musicTasteHeaderImage}
              source={require('images/L0_06_Signup/Arrow.png')}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View>
          <Text>
            관심있는 장르를 모두 골라주세요.
          </Text>
        </View>
      <View>
        <FlatList data={Genre} renderItem={renderItem} />
      </View>
    </ScrollView>
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
  musicTasteBase: {flex: 1},
  musicTasteHeader: {},
  musicTasteHeaderImageWrapper: {},
  musicTasteHeaderImage: {},
  musicTasteFooter: {},
  musicTasteNextBtnWrapper: {},
  nextBtnText: {},
});

export default MusicTasteGenreScreen;
