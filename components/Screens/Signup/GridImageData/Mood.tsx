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
  description: string;
  imageSource: ImageURISource;
};

// export type MoodDataProps = {
//   mood: MoodData;
// };

export const Mood: MoodData[] = [
  {id: 1, name: 'Exciting', description: '신나는', imageSource: ExcitingImg},
  {id: 2, name: 'Hip', description: '힙한', imageSource: HipImg},
  {id: 3, name: 'Trendy', description: '트랜디한', imageSource: TrendyImg},
  {id: 4, name: 'Modern', description: '모던한', imageSource: ModernImg},
  {id: 5, name: 'Refined', description: '세련된', imageSource: RefinedImg},
  {id: 6, name: 'Dreamy', description: '몽환적인', imageSource: DreamyImg},
  {id: 7, name: 'Chill', description: '칠한', imageSource: ChillImg},
  {id: 8, name: 'Calm', description: '평온한', imageSource: CalmImg},
  {id: 9, name: 'Exotic', description: '이국적인', imageSource: ExoticImg},
  {id: 10, name: 'Punky', description: '펑키한', imageSource: PunkyImg},
  {id: 11, name: 'Luxurious', description: '고급스러운', imageSource: LuxuriousImg},
  {id: 12, name: 'Tropical', description: '트로피컬한', imageSource: TropicalImg},
];
