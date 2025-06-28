import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

//todo Add CORS HEADERS
// function corsHeaders (origin: string) {
//   // Only allow requests from your own domain(s)
//   const allowedOrigins = [
//     'https://www.lunanews.tech/',
//     'https://luna-news.vercel.app'
//   ];

//   const isAllowedOrigin = allowedOrigins.includes(origin);
  
//   return {
//     'Access-Control-Allow-Origin': isAllowedOrigin ? origin : allowedOrigins[0],
//     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//     'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Api-Key',
//     'Access-Control-Allow-Credentials': 'true',
//   };
// }

// export async function OPTIONS (request: NextRequest) {
//   const origin = request.headers.get('origin') || '';
  
//   return new NextResponse(null, {
//     status: 200,
//     headers: corsHeaders(origin),
//   });
// }

// Create the internationalization middleware
const intlMiddleware = createMiddleware(routing);

// Combined middleware function
export default async function middleware (request: NextRequest) {

  // Check if the request is for the API
  if (request.nextUrl.pathname.startsWith('/api/getAllNews')) {
    // Skip API key check for OPTIONS requests (for CORS)
    if (request.method === 'OPTIONS') {
      return NextResponse.next();
    }
    
    const apiKey = request.headers.get('X-Api-Key');
    const validApiKey = process.env.API_KEY ?? '123';
    
    if (apiKey !== validApiKey) {
      return new Response('Unauthorized, who are you? ):(', { status: 401 });
    }
    
    return NextResponse.next();
  }
  
  // For non-API routes, use the internationalization middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(es|en)/:path*', '/api/(getAllNews)/:path*']
};
