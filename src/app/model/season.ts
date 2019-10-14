import {Image, Links, Network} from './common';

export interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: Network;
  webChannel?: any;
  image: Image;
  summary: string;
  _links: Links;
}
