import {ImageURISource} from 'react-native';

import CalmImg from 'images/L0_06_Signup/MusicTaste/Mood/Calm.png';
import ChillImg from 'images/L0_06_Signup/MusicTaste/Mood/Chill.png';
import DreamyImg from 'images/L0_06_Signup/MusicTaste/Mood/Dreamy.png';
import ExcitingImg from 'images/L0_06_Signup/MusicTaste/Mood/Exciting.png';
import ExoticImg from 'images/L0_06_Signup/MusicTaste/Mood/Exotic.png';
import HipImg from 'images/L0_06_Signup/MusicTaste/Mood/Hip.png';
import LuxuriousImg from 'images/L0_06_Signup/MusicTaste/Mood/Luxurious.png';
import ModernImg from 'images/L0_06_Signup/MusicTaste/Mood/Modern.png';
import PunkyImg from 'images/L0_06_Signup/MusicTaste/Mood/Punky.png';
import RefinedImg from 'images/L0_06_Signup/MusicTaste/Mood/Refined.png';
import TrendyImg from 'images/L0_06_Signup/MusicTaste/Mood/Trendy.png';
import TropicalImg from 'images/L0_06_Signup/MusicTaste/Mood/Tropical.png';

export type MoodData = {
  id: number;
  name: string;
  // description: string;  //TODO : description for korean
  imageSource: ImageURISource;
};

// export type MoodDataProps = {
//   mood: MoodData;
// };

export const Mood: MoodData[] = [
  {id: 1, name: 'Calm', imageSource: CalmImg},
  {id: 2, name: 'Chill', imageSource: ChillImg},
  {id: 3, name: 'Dreamy', imageSource: DreamyImg},
  {id: 4, name: 'Exciting', imageSource: ExcitingImg},
  {id: 5, name: 'Exotic', imageSource: ExoticImg},
  {id: 6, name: 'Hip', imageSource: HipImg},
  {id: 7, name: 'Luxurious', imageSource: LuxuriousImg},
  {id: 8, name: 'Modern', imageSource: ModernImg},
  {id: 9, name: 'Punky', imageSource: PunkyImg},
  {id: 10, name: 'Refined', imageSource: RefinedImg},
  {id: 11, name: 'Trendy', imageSource: TrendyImg},
  {id: 12, name: 'Tropical', imageSource: TropicalImg},
];
