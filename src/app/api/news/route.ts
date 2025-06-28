import { connectToDatabase } from '@/src/libs/mongodb';
import { NextRequest, NextResponse } from 'next/server';


export async function GET (request: NextRequest) {
  const news = await connectToDatabase();

  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get('lang');

  const filter = {};
  const projection = {
    _id: 0, 
    slug: 1,
    categories: 1, 
    mainImage: 1,
    readTime: 1,
    [`translations.${lang}.title`]: 1,
  };

  const sort = { createdAt: 1 } as const;
  const limit = 11;

  try {
    const cursor = news.find(filter,
      {
        projection,
        sort,
        limit
      }
    );
    const result = await cursor.toArray();
    return NextResponse.json(result, {status: 200});
  } catch (error: Error | any) {
    return NextResponse.json(
      {message: error.message}, {status: 500}
    );
  }
}


