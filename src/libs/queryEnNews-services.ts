import { notFound } from 'next/navigation';

async function fetchData (url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    notFound();
  }
}

async function fetchNewsEn (newCode: string) {
  return await fetchData(`https://www.lunanews.tech/api/newEnSearched/${newCode}`);
}

async function fetchMetadataNewsEn (newCode: string) {
  return await fetchData(`https://www.lunanews.tech/api/newEnMetadataSearched/${newCode}`);
}

export async function fetchNewsDataEn (newCode: string) {
  try {
    const [newsEnData, metadataNewsEnData] = await Promise.all([
      fetchNewsEn(newCode), 
      fetchMetadataNewsEn(newCode)
    ]);

    return { newsEn: newsEnData, metadataNewsEn: metadataNewsEnData };
  } catch (error) {
    notFound();
  }
}
