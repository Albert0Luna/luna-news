import { connectToDatabase } from '@/src/libs/mongodb';
import { sections } from '@/src/utils/const';
import { NextRequest, NextResponse } from 'next/server';

export async function GET (request: NextRequest) {
  const news = await connectToDatabase();
  const searchParams = new URL(request.url).searchParams;
  const lang = searchParams.get('lang');
  const section = searchParams.get('section');

  
  if (!(sections.some(sec => sec.link === section) && lang)) {
    return NextResponse.json(
      { error: 'Invalid section or language parameter' },
      { status: 400 }
    );
  }

  const sectionData = sections.find(sec => sec.link === section);
  
  const filter = {
    categories: sectionData?.title,
  };
  
  const projection = {
    _id: 0, 
    slug: 1,
    categories: 1, 
    mainImage: 1,
    readTime: 1,
    [`translations.${lang}.title`]: 1,
  };
  
  
  try {
    const sectionData = news.find(filter, {
      projection,
    });
    const cursor = await sectionData.toArray();
    console.log('Section data:', cursor);
    return NextResponse.json(cursor, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch section data' }, { status: 500 });
  }
}