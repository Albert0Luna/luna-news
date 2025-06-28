import type { JSX } from 'react';
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

export type Section = {
  title: string;
  link: `/${string}`;
  icon: () => JSX.Element;
}

export interface HomeArticles {
  slug: string;
  categories: string[];
  mainImage: string;
  readTime: string;
  translations: {
    [key: string]: {
      title: string;
      summary: string;
    }
  };
}

export interface SearchResult {

  slug: string;
  categories: string[];
  mainImage: string;
  translations: {
    [key: string]: {
      title: string;
    }
  };
}

