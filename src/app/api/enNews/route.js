import { connectDB } from '../../../libs/mongodb'; 
import NewsEn from '../../../models/newsEn';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    const news = await NewsEn.find().limit(9);

    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { message: 'Error fetching news', error: error.message },
      { status: 500 }
    );
  }
}

export async function POST (request) {
  await connectDB();
  const news = await request.json();

  const newsEn = await NewsEn.create(news);
  return NextResponse.json(newsEn);
}