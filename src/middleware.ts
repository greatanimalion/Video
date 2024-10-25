import { NextResponse, NextRequest } from 'next/server'
// 文件用于在请求完成之前写入 中间件 并在服务器上运行代码。然后，根据传入的请求，你可以通过重写、重定向、修改请求或响应标头或直接响应来修改响应。
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
const cookie = request.headers.get('cookie')
console.log('Cookie:', cookie);
console.log('Request:',new URL('/login', request.url));

  return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
  matcher:['/(^(?!/login).*)']
}