import { NextResponse, NextRequest } from 'next/server'

//仅支持Edge runtime
export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;
  // if (whiteList.includes(pathname)) {
  //   return NextResponse.next();
  // }
  // const cookie = request.cookies.get('token')
  // if(!cookie)return NextResponse.redirect(new URL('/login', request.url));
}

//路由白名单
const whiteList = ['/login', '/api/login'];

