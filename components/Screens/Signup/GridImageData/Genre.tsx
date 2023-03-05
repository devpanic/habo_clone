import {ImageURISource} from 'react-native';

import AmbientImg from 'images/L0_06_Signup/MusicTaste/Genre/Ambient.png';
import DiscoImg from 'images/L0_06_Signup/MusicTaste/Genre/Disco.png';
import HiphopImg from 'images/L0_06_Signup/MusicTaste/Genre/HipHop.png';
import HouseImg from 'images/L0_06_Signup/MusicTaste/Genre/House.png';
import JazzImg from 'images/L0_06_Signup/MusicTaste/Genre/Jazz.png';
import MinimalImg from 'images/L0_06_Signup/MusicTaste/Genre/Minimal.png';
import RnbImg from 'images/L0_06_Signup/MusicTaste/Genre/RnB.png';
import RockImg from 'images/L0_06_Signup/MusicTaste/Genre/Rock.png';
import SoulpunkImg from 'images/L0_06_Signup/MusicTaste/Genre/SoulPunk.png';
import TechnoImg from 'images/L0_06_Signup/MusicTaste/Genre/Techno.png';
import TransImg from 'images/L0_06_Signup/MusicTaste/Genre/Trans.png';

export type GenreData = {
  id: number;
  name: string;
  // description: string;  //TODO : description for korean
  imageSource: ImageURISource;
};

// export type GenreDataProps = {
//   genre: GenreData;
// };

export const Genre: GenreData[] = [
  {id: 1, name: 'Ambient', imageSource: AmbientImg},
  {id: 2, name: 'Disco', imageSource: DiscoImg},
  {id: 3, name: 'HipHop', imageSource: HiphopImg},
  {id: 4, name: 'House', imageSource: HouseImg},
  {id: 5, name: 'Jazz', imageSource: JazzImg},
  {id: 6, name: 'Minimal', imageSource: MinimalImg},
  {id: 7, name: 'RnB', imageSource: RnbImg},
  {id: 8, name: 'Rock', imageSource: RockImg},
  {id: 9, name: 'SoulPunk', imageSource: SoulpunkImg},
  {id: 10, name: 'Techno', imageSource: TechnoImg},
  {id: 11, name: 'Trans', imageSource: TransImg},
];
