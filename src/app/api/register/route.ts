import { NextRequest } from "next/server";

//获取验证码
export async function GET(request:NextRequest) {
    return new Response(JSON.stringify({code:1234, message:"验证码发送成功"}),{
        headers: {
            "Content-Type": "application/json"
        }
    });
}

//注册
export async function POST(request:NextRequest) {
    const body = await request.json();
    console.log(body);
    return new Response(JSON.stringify({code:0, message:"注册成功"}),{
        headers: {
            "Content-Type": "application/json"
        }
    });
}