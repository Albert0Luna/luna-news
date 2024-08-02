const {db} = require('@vercel/postgres');

const { newsEs, newsEn } = require('../src/mock/new.ts');

async function seedEsNews (client) {
  try {
    //? Enable the uuid-ossp extension
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    //? Create a table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS newsEs (
        id VARCHAR(255) PRIMARY KEY,
        new_code VARCHAR(50) NOT NULL,
        lang VARCHAR(10) NOT NULL,
        read_time VARCHAR(50) NOT NULL,
        sections TEXT[] NOT NULL,
        title VARCHAR(255) NOT NULL,
        main_image TEXT NOT NULL,
        thumbnail TEXT NOT NULL,
        image_alt TEXT NOT NULL,
        author_id VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        lastModified DATE,
        mini_desc TEXT NOT NULL,
        content TEXT[] NOT NULL,
        final TEXT NOT NULL,
        keywords TEXT[] NOT NULL
      );
    `;
    console.log('Table newsEs created');

    //? Insert data
    const insertedNews = await Promise.all(
      newsEs.map(
        (news) => client.sql`
        INSERT INTO newsEs (id, new_code, lang, read_time, sections, title, main_image, thumbnail, image_alt, author_id, date, lastModified, mini_desc, content, final, keywords)
        VALUES (
          ${news.id},
          ${news.newCode},
          ${news.lang},
          ${news.readTime},
          ${news.sections},
          ${news.title},
          ${news.mainImage},
          ${news.thumbnail},
          ${news.ImageAlt},
          ${news.authorId},
          ${news.date},
          ${news?.lastModified ?? null},
          ${news.miniDesc},
          ${news.content},
          ${news.final},
          ${news.keywords}
        )
        ON CONFLICT (id) DO UPDATE SET
      new_code = EXCLUDED.new_code,
      title = EXCLUDED.title,
      date = EXCLUDED.date
      `),
    );
    console.log(`Seeded ${insertedNews.length} in newsEs`);

    return {
      createTable,
      news: insertedNews
    };
  } catch (error) {
    console.error('Error seeding newsEs', error);
    throw error;
  }
}

async function seedEnNews (client) {
  try {
    //? Create table
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    //? Create a table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS newsEn (
        id VARCHAR(255) PRIMARY KEY,
        new_code VARCHAR(50) NOT NULL,
        lang VARCHAR(10) NOT NULL,
        read_time VARCHAR(50) NOT NULL,
        sections TEXT[] NOT NULL,
        title VARCHAR(255) NOT NULL,
        main_image TEXT NOT NULL,
        thumbnail TEXT NOT NULL,
        image_alt TEXT NOT NULL,
        author_id VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        lastModified DATE,
        mini_desc TEXT NOT NULL,
        content TEXT[] NOT NULL,
        final TEXT NOT NULL,
        keywords TEXT[] NOT NULL
      );
    `;
    console.log('Table newsEn created');

    //? Insert data
    const insertedNews = await Promise.all(
      newsEn.map(
        (news) => client.sql`
        INSERT INTO newsEn (id, new_code, lang, read_time, sections, title, main_image, thumbnail, image_alt, author_id, date, lastModified, mini_desc, content, final, keywords)
        VALUES (
          ${news.id},
          ${news.newCode},
          ${news.lang},
          ${news.readTime},
          ${news.sections},
          ${news.title},
          ${news.mainImage},
          ${news.thumbnail},
          ${news.ImageAlt},
          ${news.authorId},
          ${news.date},
          ${news?.lastModified ?? null},
          ${news.miniDesc},
          ${news.content},
          ${news.final},
          ${news.keywords}
        )
        ON CONFLICT (id) DO UPDATE SET
      new_code = EXCLUDED.new_code,
      title = EXCLUDED.title,
      date = EXCLUDED.date
      `)
    );
    console.log(`Seeded ${insertedNews.length} newsEn`);

    return {
      createTable,
      news: insertedNews
    };
  } catch (error) {
    console.error('Error seeding news', error);
    throw error;
  }
}

async function main () {
  const client = await db.connect();

  await seedEsNews(client);
  await seedEnNews(client);

  await client.end();
}

main().catch(err => {
  console.error(err);
});