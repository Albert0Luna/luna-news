import { connectDB } from '../../../libs/mongodb'; 
import NewsEn from '../../../models/newsEn';
import { NextResponse } from 'next/server';

export async function GET () {
  await connectDB();

  const news = await NewsEn.find();
  return NextResponse.json(news);
}

export async function POST (request) {
  await connectDB();
  const news = await request.json();

  const newsEn = await NewsEn.create(news);
  return NextResponse.json(newsEn);
}