
async function fetchNewsEs (new_code: string) {
  const response = await fetch(`https://www.lunanews.tech/api/newEsSearched/${new_code}`);
  const filteredSection = await response.json();
  return filteredSection;
}

async function fetchMetadataNewsEs (new_code: string) {
  const response = await fetch(`https://www.lunanews.tech/api/newEsMetadataSearched/${new_code}`);
  const filteredSection = await response.json();
  return filteredSection;
}

export async function fetchNewsDataEs (new_code: string) {
  try {
    const [newsEnData, metadataNewsEnData] = await Promise.all([
      fetchNewsEs(new_code), 
      fetchMetadataNewsEs(new_code)
    ]);

    return { newsEs: newsEnData, metadataNewsEs: metadataNewsEnData };
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error appropriately (e.g., return an error object)
    throw error; // Re-throw to propagate the error if needed
  }
}