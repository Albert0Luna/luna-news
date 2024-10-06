import { notFound } from 'next/navigation';

async function fetchData (url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    notFound();
  }
}

async function fetchNewsEs (newCode: string) {
  return fetchData(`https://www.lunanews.tech/api/newEsSearched/${newCode}`);
}

async function fetchMetadataNewsEs (newCode: string) {
  return fetchData(`https://www.lunanews.tech/api/newEsMetadataSearched/${newCode}`);
}

export async function fetchNewsDataEs (newCode: string) {
  try {
    const [newsEs, metadataNewsEs] = await Promise.all([
      fetchNewsEs(newCode),
      fetchMetadataNewsEs(newCode),
    ]);

    return { newsEs, metadataNewsEs };
  } catch (error) {
    notFound();
  }
}
