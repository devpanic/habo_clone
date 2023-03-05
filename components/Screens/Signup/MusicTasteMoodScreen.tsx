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
  'MusicTasteMood'
>;

import {Mood} from './GridImageData/Mood';
import type {MoodData, MoodDataProps} from './GridImageData/Mood';

const GridWrapper = ({mood}: MoodDataProps) => (
  <Image source={mood.imageSource} />
);

const MusicTasteMoodScreen = ({navigation}: SplashScreenProps) => {
  const renderItem: ListRenderItem<MoodData> = ({item}) => {
    return <GridWrapper mood={item} />;
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList data={Mood} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default MusicTasteMoodScreen;
