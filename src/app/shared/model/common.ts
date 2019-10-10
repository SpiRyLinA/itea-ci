export interface Image {
  medium: string;
  original: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
}

export interface Links {
  self: Self;
  previousepisode: PreviousEpisode;
}


export interface Self {
  href: string;
}

export interface PreviousEpisode {
  href: string;
}
