import { NextResponse } from 'next/server';
// import jwt from "jsonwebtoken";

// const secretKey = "KWKWOWKWO";

export function middleware(req: Request) {
  const url = new URL(req.url);

  console.log('Middleware');

  // 1. Authentication Check
  const authHeader = req.headers.get('authorization');
  const token = authHeader && authHeader.split(' ')[1];

  // Block requests to any path starting with /admin/... except /admin
  if (url.pathname.startsWith('/admin') && url.pathname !== '/admin') {
    if (!token || token === 'null') {
      console.log('No token');
      return NextResponse.json({ message: 'Access denied' }, { status: 400 });
    }

    // If token exists, add security headers and allow request
    const headers = new Headers();
    headers.set('X-Frame-Options', 'DENY');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Content-Security-Policy', "default-src 'self'");

    return NextResponse.next({ headers });
  }

  // Allow /admin path requests without token check
  return NextResponse.next();
}

// Apply the middleware to admin routes only
export const config = {
  matcher: ['/api/:path*'],
};
