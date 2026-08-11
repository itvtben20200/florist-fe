import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Strip locale prefix for auth checks (/de/account → /account)
  const localePattern = /^\/(en|de)(\/|$)/;
  const strippedPath = pathname.replace(localePattern, '/');

  const accessToken = request.cookies.get('accessToken')?.value;
  const userRole = request.cookies.get('userRole')?.value;

  // Protect /account routes — must be logged in
  if (strippedPath.startsWith('/account') && !accessToken) {
    const loginUrl = new URL('/auth/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Protect /admin routes — must be ADMIN or SUPERADMIN
  if (strippedPath.startsWith('/admin')) {
    if (!accessToken) {
      const loginUrl = new URL('/auth/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
    if (userRole !== 'ADMIN' && userRole !== 'SUPERADMIN') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths except Next.js internals and static files
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
