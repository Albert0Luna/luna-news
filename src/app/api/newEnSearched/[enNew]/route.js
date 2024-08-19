import { connectDB } from '../../../../libs/mongodb'; 
import NewsEn from '../../../../models/newsEn';
import { NextResponse } from 'next/server';

export async function GET (req, { params }) { 
  try {
    const idNew = params.enNew; // Access the query parameter directly
    await connectDB();

    const filteredNew = await NewsEn.findOne({ new_code: idNew});

    if (!filteredNew) {
      return NextResponse.json({ message: 'New not found' }, { status: 404 });
    }

    return NextResponse.json(filteredNew); 
  } catch (error) {
    console.error('Error al obtener la noticia:', error);
    return NextResponse.json({ message: 'Error al obtener la noticia', error: error.message }, { status: 500 });
  }
}