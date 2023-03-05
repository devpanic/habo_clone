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
  // description: string;  //TODO : description for korean
  imageSource: ImageURISource;
};

// export type WhereDataProps = {
//   where: WhereData;
// };

export const Where: WhereData[] = [
  {id: 1, name: 'Bar', imageSource: BarImg},
  {id: 2, name: 'Cafe', imageSource: CafeImg},
  {id: 3, name: 'Club', imageSource: ClubImg},
  {id: 4, name: 'CulturalPlace', imageSource: CulturalPlaceImg},
  {id: 5, name: 'Restaurant', imageSource: RestaurantImg},
  {id: 6, name: 'Shop', imageSource: ShopImg},
];
