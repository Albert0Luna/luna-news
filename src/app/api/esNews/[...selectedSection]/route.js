import { connectDB } from '../../../../libs/mongodb'; 
import NewsEs from '../../../../models/newsEs';
import { NextResponse } from 'next/server';


export async function GET (req, { params }) {
  try {
    const selectedSection = await params.selectedSection[0];
    const page = await params.selectedSection[1];
    await connectDB();
    
    const pageSelected = await (page - 1) ?? '1';
    const per_page = '6';
    const start = (Number(pageSelected) - 1) * Number(per_page);
    const end = start + Number(per_page);
    const noticesSkipped = end;

    if (selectedSection === 'Lo último') {
      const news = await NewsEs.find({},{
        id: 1,
        title: 1, 
        new_code: 1,
        keywords: 1, 
        main_image: 1,
        thumbnail_image: 1, 
        image_alt: 1,
        createdAt: 1, 
        updatedAt: 1, 
        sections: 1,
        summary: 1,
        read_time: 1,
      }).skip(noticesSkipped).limit(per_page).sort({ createdAt: -1 });
      const allNewsCount = await NewsEs.countDocuments();
      return NextResponse.json({ fechedNews: news, allNews: allNewsCount });
    } else {
      const news = await NewsEs.find({ 
        sections: { $in: [new RegExp(selectedSection)] }
      }, {
        id: 1,
        title: 1, 
        new_code: 1,
        keywords: 1, 
        main_image: 1,
        thumbnail_image: 1, 
        image_alt: 1,
        createdAt: 1, 
        updatedAt: 1, 
        sections: 1,
        summary: 1,
        read_time: 1,
      }).skip(noticesSkipped).limit(per_page).sort({ createdAt: -1 });
      const allNewsCount = await NewsEs.countDocuments({ 
        sections: { $in: [new RegExp(selectedSection)] }
      });
      return NextResponse.json({ fechedNews: news, allNews: allNewsCount });
    }

  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { message: 'Error fetching news', error: error.message },
      { status: 500 }
    );
  }
}