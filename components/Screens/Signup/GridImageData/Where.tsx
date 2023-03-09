import {ImageURISource} from 'react-native';

import BarImg from 'images/L0_06_Signup/MusicTaste/Where/Bar.png';
import CafeImg from 'images/L0_06_Signup/MusicTaste/Where/Cafe.png';
import ClubImg from 'images/L0_06_Signup/MusicTaste/Where/Club.png';
import CulturalPlaceImg from 'images/L0_06_Signup/MusicTaste/Where/CulturalPlace.png';
import RestaurantImg from 'images/L0_06_Signup/MusicTaste/Where/Restaurant.png';
import ShopImg from 'images/L0_06_Signup/MusicTaste/Where/Shop.png';

export type WhereData = {
  id: number;
  name: string;
  description: string;
  imageSource: ImageURISource;
};

// export type WhereDataProps = {
//   where: WhereData;
// };

export const Where: WhereData[] = [
  {id: 1, name: 'Club', description: '클럽', imageSource: ClubImg},
  {id: 2, name: 'Bar', description: '바/펍', imageSource: BarImg},
  {id: 3, name: 'Restaurant', description: '레스토랑', imageSource: RestaurantImg},
  {id: 4, name: 'Cafe', description: '카페', imageSource: CafeImg},
  {id: 5, name: 'Shop', description: '샵', imageSource: ShopImg},
  {id: 6, name: 'CulturalPlace', description: '문화공간', imageSource: CulturalPlaceImg},
];
