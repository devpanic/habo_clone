import React from 'react';
import {
  SafeAreaView,
  View,
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

import {Genre} from './GridImageData/Genre';
import type {GenreData, GenreDataProps} from './GridImageData/Genre';

const GridWrapper = ({genre}: GenreDataProps) => (
  <Image source={genre.imageSource} />
);

const MusicTasteGenreScreen = ({navigation}: SplashScreenProps) => {
  const renderItem: ListRenderItem<GenreData> = ({item}) => {
    return <GridWrapper genre={item} />;
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList data={Genre} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default MusicTasteGenreScreen;
