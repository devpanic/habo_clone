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
  description: string;
  imageSource: ImageURISource;
};

// export type GenreDataProps = {
//   genre: GenreData;
// };

export const Genre: GenreData[] = [
  {id: 1, name: 'House', description: '하우스', imageSource: HouseImg},
  {id: 2, name: 'Techno', description: '테크노', imageSource: TechnoImg},
  {id: 3, name: 'Disco', description: '디스코', imageSource: DiscoImg},
  {id: 4, name: 'HipHop', description: '힙합', imageSource: HiphopImg},
  {id: 5, name: 'SoulPunk', description: '소울/펑크', imageSource: SoulpunkImg},
  {id: 6, name: 'RnB', description: 'R&B', imageSource: RnbImg},
  {id: 7, name: 'Jazz', description: '재즈', imageSource: JazzImg},
  {id: 8, name: 'Rock', description: '락', imageSource: RockImg},
  {id: 9, name: 'Minimal', description: '미니멀', imageSource: MinimalImg},
  {id: 10, name: 'Trans', description: '트랜스', imageSource: TransImg},
  {id: 11, name: 'Ambient', description: '앰비언트', imageSource: AmbientImg},
];
