import { addUser, getUserByEmail } from "@/database/user"
// export const dynamic = 'force-dynamic' // defaults to auto
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
    return new Response(JSON.stringify({ message: 'login success' }), {
        headers: { 'Content-Type': 'text/plain' },
        status: 200,
    })

}
export async function GET(request: Request) {

    console.log(request.headers.get('cookie'));
    // addUser({ email: '15294745235@qq.com', password: '123456' })
    return new Response(JSON.stringify({ c: 3, d: 4 }), {
        headers: { 'Content-Type': 'text/plain', "set-cookie": 'token=1234567890;path=/;HttpOnly;SameSite=Lax' },
    })
}