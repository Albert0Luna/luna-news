export interface Logo {
  name?: string;
  url?: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface HomeTranslations {
  routes: {
    home: string;
    about: string;
    sections: string;
  };
  donate: string;
  changeLanguage: string;
}