import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore} from 'next/cache';

//todo SPANISH NEWS

export async function fetchAllNewsEs () {
  noStore();
  try {
    const data = await sql`
      SELECT new_code, id, title, thumbnail, image_alt, mini_desc FROM newsEs
      ORDER BY date ASC
      LIMIT 10
    `;

    const allNewsEs = data.rows;

    return allNewsEs;
  } catch (error) {
    throw new Error('Error fetching news en', error);
  }
}

export async function fetchNewsEs (newCode) {
  noStore();
  try {
    const data = await sql`
      SELECT date, lastModified, title, read_time, author_id, main_image, image_alt, content FROM newsEs
      WHERE new_code = ${newCode}
      ORDER BY date ASC
    `;

    const metaNewsEs = data.rows;

    return metaNewsEs;
  } catch (error) {
    throw new Error('Error fetching news', error);
  }
}

export async function fetchMetaDataNewsEs (newCode) {
  noStore();
  try {
    const data = await sql`
      SELECT id, title, lang, keywords, author_id, mini_desc, thumbnail, date, lastModified, sections FROM newsEs
      WHERE new_code = ${newCode}
      ORDER BY date ASC
    `;

    const metaNewsEs = data.rows;

    return metaNewsEs;
  } catch (error) {
    throw new Error('Error fetching news', error);
    
  }
}

export async function fetchLatestNewsEs () {
  noStore();
  try {
    const data = await sql`
      SELECT new_code, id, title, thumbnail, image_alt, mini_desc FROM newsEs
      ORDER BY date ASC
      LIMIT 10
    `;

    const latestNewsEs = data.rows;

    return latestNewsEs;
  } catch (error) {
    throw new Error('Error fetching news en', error);
  }
}

export async function fetchSectionEs (section) {
  noStore();
  try {
    const data = await sql`
      SELECT  new_code, id, title, thumbnail, image_alt, mini_desc FROM newsEs
      WHERE ${section} = ANY(sections)
      ORDER BY date ASC
      LIMIT 10
    `;

    const sectionEs = data.rows;

    return sectionEs;
  } catch (error) {
    throw new Error('Error fetching news', error);
  }
}

//todo ENGLISH NEWS

export async function fetchAllNewsEn () {
  noStore();
  try {
    const data = await sql`
      SELECT new_code, id, title, thumbnail, image_alt, mini_desc FROM newsEn
      ORDER BY date ASC
      LIMIT 10
    `;

    const allNewsEn = data.rows;

    return allNewsEn;
  } catch (error) {
    throw new Error('Error fetching news en', error);
  }
}

export async function fetchNewsEn (newCode) {
  noStore();
  try {
    const data = await sql`
      SELECT * FROM newsEn
      WHERE new_code = ${newCode}
      ORDER BY date ASC
    `;

    const metaNewsEn = data.rows;

    return metaNewsEn;
  } catch (error) {
    throw new Error('Error fetching news en', error);
  }
}

export async function fetchMetaDataNewsEn (newCode) {
  noStore();
  try {
    const data = await sql`
      SELECT * FROM newsEn
      WHERE new_code = ${newCode}
      ORDER BY date ASC
    `;

    const metaNewsEn = data.rows;

    return metaNewsEn;
  } catch (error) {
    throw new Error('Error fetching news', error);
  }
}

export async function fetchLatestNewsEn () {
  noStore();
  try {
    const data = await sql`
      SELECT new_code, id, title, thumbnail, image_alt, mini_desc FROM newsEn
      ORDER BY date ASC
      LIMIT 10
    `;

    const latestNewsEn = data.rows;

    return latestNewsEn;
  } catch (error) {
    throw new Error('Error fetching news en', error);
  }
}

export async function fetchSectionEn (section) {
  noStore();
  try {
    const data = await sql`
      SELECT  new_code, id, title, thumbnail, image_alt, mini_desc FROM newsEn
      WHERE ${section} = ANY(sections)
      ORDER BY date ASC
      LIMIT 10
    `;

    const metaNewsEn = data.rows;

    return metaNewsEn;
  } catch (error) {
    throw new Error('Error fetching news', error);
  }
}
