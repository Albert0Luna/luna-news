import { connectToDatabase } from '@/src/libs/mongodb';
import { NextRequest, NextResponse } from 'next/server';


export async function GET (request: NextRequest) {
  const news = await connectToDatabase();

  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get('lang');
  const slug = searchParams.get('slug');

  const filter = {slug: slug};
  const projection = {
    _id: 0,
    slug: 1,
    categories: 1,
    readTime: 1,
    altImage: 1,
    mainImage: 1,
    'author.name': 1,
    createdAt: 1,
    keywords: 1,
    [`translations.${lang}.title`]: 1,
    [`translations.${lang}.introduction`]: 1,
    [`translations.${lang}.summary`]: 1,
    [`translations.${lang}.content`]: 1
  };
  

  try {
    const cursor = news.findOne(filter, {projection});
    const result = await cursor;  
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error fetching article:', error);
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
  }
}