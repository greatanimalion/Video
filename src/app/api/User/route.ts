import { User } from "@/database/model/user";
import { getUserById } from "@/database/user";
import { verifyToken } from "@/utils/jwt";
import { NextRequest } from "next/server";

//获取用户信息
export async function GET(request: NextRequest) {
    const token=request.cookies.get('token')?.value;
    if(!token) return new Response(JSON.stringify({ error: '请登录' }), {
        status: 401,
    })
    const id:any=verifyToken(token);
    if(!id) return new Response(JSON.stringify({ error: '请登录' }), {
        status: 401,
    })
    const user = await getUserById(id.id) as User[];
    return new Response(JSON.stringify({ userInfor: {
        account: user[0].account,
        email: user[0].email,
        type: user[0].type,
        id: user[0].id,    
        sex: user[0].sex,
        registerTime: user[0].registerTime,
        announce: user[0].announce,
        avator: user[0].avator,
    }}), {
        status: 200,
    })
}