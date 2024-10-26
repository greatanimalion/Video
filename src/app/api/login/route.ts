import { User } from "@/database/model/user";
import { addUser, getUserById,getUserByEmail } from "@/database/user"
import { generateToken, verifyToken } from "@/utils/jwt";
import { NextRequest } from "next/server";
// export const dynamic = 'force-dynamic' // defaults to auto
//登录
export async function POST(request: Request) {
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password) return new Response(JSON.stringify({ error: '邮箱或密码不能为空' }), {
        status: 400,
    })
    const user = await getUserByEmail(email);
    if (!user.length) return new Response(JSON.stringify({ error: '用户不存在' }), {
        status: 400,
    })
    if (user[0].password != password) return new Response(JSON.stringify({ error: '密码错误' }), {
        headers: { 'Content-Type': 'text/plain' },
    })
    // console.log(user[0]);
    const token = generateToken({ id: user[0].id,type: user[0].type });
    return new Response(JSON.stringify({ message: 'login success' }), {
        headers: { 'Content-Type': 'text/plain',
            'set-cookie': `token=${token};path=/;HttpOnly;max-age=3600;`
         },
        status: 200,
    })
}
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


export async function PUT(request:NextRequest){
    return new Response(JSON.stringify({ error: '暂未开放' }), {
        status: 400,
    })
}