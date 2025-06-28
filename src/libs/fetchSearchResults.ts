'use server';
import { getLocale } from 'next-intl/server';

export default async function fetchSearchResults ({ searchValue }: { searchValue: string }) {
  const locale = await getLocale();
  try {
    const data = await fetch(`https://www.lunanews.tech/api/search?query=${searchValue}&lang=${locale}`);
    const res = await data.json();
    if (res.length === 0) {
      throw new Error('Network response was not ok');
    }
    return res;
  } catch (error) {
    console.error('Error fetching search results:', error);
    return { error: 'Failed to fetch search results' };
  }
}
