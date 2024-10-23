import { addUser } from "@/database/user"
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request: Request) {
    console.log('l',request.headers);
    
    return new Response(JSON.stringify({ a:1, b:2 }), {
        headers: { 'Content-Type': 'text/plain' },
    })
}
export async function GET(request: Request) {

    console.log(request.headers.get('cookie'));
    // addUser({ email: '15294745235@qq.com', password: '123456' })
    return new Response(JSON.stringify({ c:3, d:4 }), {
        headers: { 'Content-Type': 'text/plain',"set-cookie":'token=1234567890;path=/;HttpOnly;SameSite=Lax' },
    })
}