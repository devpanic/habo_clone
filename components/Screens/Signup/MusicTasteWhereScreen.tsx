import React from 'react';
// import {useState} from 'react';

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
export type ScreenNavigationProps = NativeStackScreenProps<
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
  selectedPlace: boolean[];
};

const MusicTasteWhereScreen = ({navigation}: ScreenNavigationProps) => {
  const {handleSubmit, control} = useForm<FormValues>();
  // const [isSelected, setIsSelected] = useState(false);

  const onSubmit = (data: FormValues) => {
    Alert.alert(JSON.stringify(data));
    navigation.navigate('MusicTasteGenre');
  };

  const renderItem: ListRenderItem<WhereData> = ({item}) => {
    return (
      <View style={styles.renderItmContainer}>
        <Controller
          control={control}
          name={`selectedPlace.${item.id - 1}`}
          defaultValue={false}
          render={({field: {value, onChange}}) => (
            <TouchableOpacity
              onPress={() => {
                onChange(!value);
                // TODO : every() or some() + isSelected
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
            어떤 곳에서 음악을 듣고 싶나요?
          </Text>
        </View>
      </View>

      <View style={styles.musicTasteBody}>
        <View>
          <FlatList
            data={Where}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
            horizontal={false}
            style={{
              paddingHorizontal: 34,
            }}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              paddingBottom: 32,
            }}
            ListFooterComponent={
              <View style={styles.listFooterBtnWrapper}>
                <TouchableOpacity
                  onPress={handleSubmit(onSubmit)}
                  style={styles.listFooterBtn}>
                  <Text style={styles.listFooterText}>다음에 할래요</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      </View>
      <View style={styles.musicTasteFooter}>
        <View
          style={
            // isSelected
            //   ? styles.musicTasteNextBtnWrapper
            //   : styles.musicTasteNextBtnWrapperDisabled
            styles.musicTasteNextBtnWrapper
          }>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            {/* disabled={!isSelected}> */}
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
  listFooterBtnWrapper: {
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 100,
    color: 'rgba(0, 0, 0, .5)',
  },
  listFooterBtn: {
    width: 77,
    borderBottomColor: 'rgba(0, 0, 0, .5)',
    borderBottomWidth: 1,
  },
  listFooterText: {
    color: 'rgba(0, 0, 0, .5)',
  },
  renderItmContainer: {flexDirection: 'row', justifyContent: 'center'},
  renderItmBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderItmBtnImg: {height: 140, width: '100%', maxWidth: 140},
  renderItmBtnTextWrapper: {width: 140},
  renderItmBtnText: {textAlign: 'center', marginTop: 16, color: '#000000'},
  musicTasteFooter: {
    marginTop: 'auto',
  },
  musicTasteNextBtnWrapper: {
    backgroundColor: '#000000',
    paddingVertical: 24,
  },
  musicTasteNextBtnWrapperDisabled: {
    backgroundColor: 'red',
    paddingVertical: 24,
  },
  nextBtnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MusicTasteWhereScreen;
