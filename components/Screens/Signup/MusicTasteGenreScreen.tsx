import React from 'react';

import {
  SafeAreaView,
  View,
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
  selectedGenre: boolean[];
};

const MusicTasteGenreScreen = ({navigation}: SplashScreenProps) => {
  const {handleSubmit, control} = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    Alert.alert(JSON.stringify(data));
    navigation.navigate('MusicTasteMood');
  };

  const renderItem: ListRenderItem<GenreData> = ({item}) => {
    return (
      <View style={styles.renderItmContainer}>
        <Controller
          control={control}
          name={`selectedGenre.${item.id - 1}`}
          defaultValue={false}
          render={({field: {value, onChange}}) => (
            <TouchableOpacity
              onPress={() => {
                onChange(!value);
              }}>
              <View style={styles.renderItmBtn}>
                <Image
                  source={item.imageSource}
                  style={styles.renderItmBtnImg}
                  resizeMode="contain"
                />
                <View style={styles.renderItmBtnTextWrapper}>
                  <Text style={styles.renderItmBtnText}>
                    {item.description}
                  </Text>
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
          onPress={() => navigation.dispatch(popAction)}>
          <Image
            style={styles.musicTasteHeaderImage}
            source={require('images/L0_06_Signup/Arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.musicTasteHeaderTextWrapper}>
          <Text style={styles.musicTasteHeaderText}>
            관심있는 장르를 모두 골라주세요.
          </Text>
        </View>
      </View>

      <View style={styles.musicTasteBody}>
        <View>
          <FlatList
            data={Genre}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            numColumns={3}
            horizontal={false}
            style={{
              paddingHorizontal: 16,
            }}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              paddingBottom: 24,
            }}
            ListFooterComponent={
              <View style={styles.listFooterBtn}>
                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                  <Text style={styles.listFooterText}>다음에 할래요</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
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
  musicTasteHeaderTextWrapper: {
    paddingHorizontal: 4,
    marginVertical: 36,
  },
  musicTasteHeaderText: {
    fontWeight: '700',
    fontSize: 24,
    color: '#000000',
    marginLeft: 4,
  },
  musicTasteBody: {
    flex: 1,
  },
  listFooterBtn: {
    width: '100%',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 100,
    color: 'rgba(0, 0, 0, .5)',
  },
  listFooterText: {
    color: 'rgba(0, 0, 0, .5)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .5)',
  },
  renderItmContainer: {flexDirection: 'row', justifyContent: 'center'},
  renderItmBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderItmBtnImg: {height: 96, width: '100%', maxWidth: 96},
  renderItmBtnTextWrapper: {width: 96},
  renderItmBtnText: {
    textAlign: 'center',
    marginTop: 16,
    color: '#000000',
    fontWeight: '500',
    fontSize: 14,
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

export default MusicTasteGenreScreen;
