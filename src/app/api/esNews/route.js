import { connectDB } from '../../../libs/mongodb'; 
import NewsEs from '../../../models/newsEs';
import { NextResponse } from 'next/server';

export async function GET () {
  await connectDB();

  const news = await NewsEs.find();
  return NextResponse.json(news);
}

export async function POST (request) {
  await connectDB();
  const news = await request.json();

  const newsEs = await NewsEs.create(news);
  return NextResponse.json(newsEs);
}