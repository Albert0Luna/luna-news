async function fetchNewsEn (newCode: string) {
  try {
    const response = await fetch(`https://www.lunanews.tech/api/newEnSearched/${newCode}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch news data: ${response.status}`);
    }
    const filteredSection = await response.json();
    return filteredSection;
  } catch (error) {
    console.error('Error in fetchNewsEn:', error);
    throw error;
  }
}

async function fetchMetadataNewsEn (newCode: string) {
  try {
    const response = await fetch(`https://www.lunanews.tech/api/newEnMetadataSearched/${newCode}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch metadata: ${response.status}`);
    }
    const filteredSection = await response.json();
    return filteredSection;
  } catch (error) {
    console.error('Error in fetchMetadataNewsEn:', error);
    throw error;
  }
}

export async function fetchNewsDataEn (newCode: string) {
  try {
    const [newsEnData, metadataNewsEnData] = await Promise.all([
      fetchNewsEn(newCode), 
      fetchMetadataNewsEn(newCode)
    ]);

    return { newsEn: newsEnData, metadataNewsEn: metadataNewsEnData };
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately (e.g., return an error object)
    throw error; // Re-throw to propagate the error if needed
  }
}