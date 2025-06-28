import { connectToDatabase } from '@/src/libs/mongodb';
import { NextRequest, NextResponse } from 'next/server';


export async function GET (request: NextRequest) {
  const news = await connectToDatabase();
  const searchParams = new URL(request.url).searchParams;
  const searchValue = searchParams.get('query');
  const lang = searchParams.get('lang');

  if (!searchValue) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const searchedResults = news.aggregate([
      {
        $search: {
          index: 'main-search',
          text: {
            query: searchValue,
            path: {
              wildcard: '*',
            },
          },
        },
      },
      {
        $project: {
          slug: 1,
          categories: 1,
          mainImage: 1,
          [`translations.${lang}.title`]: 1,
        }
      },
      {
        $limit: 3
      },
      {
        $sort: {
          createdAt: 1,
        },
      }
    ]);
    
    const cursor = await searchedResults.toArray();
    return NextResponse.json(cursor, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
