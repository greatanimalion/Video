"use client"
import Image from 'next/image'
import logo from '@/public/logo.png'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function Nav() {
    const pathname = usePathname()
    // if (pathname === '/login') return <></>
    return <>
        < nav className="p-2 flex items-center justify-between w-full h-14 bg-gray-100 dark:bg-gray-800 text-base font-bold text-gray-500 dark:text-gray-300" >
            <Image placeholder='empty' src={logo} alt="logo" width={50} height={50} style={{ cursor: 'pointer' }} />
            <ul className="flex items-center justify-between w-3/4" >
                <li className="cursor-pointer hover:text-gray-50 duration-300">首页</li>
                <li className="cursor-pointer hover:text-gray-50 duration-300">分类</li>
                <li className="cursor-pointer hover:text-gray-50 duration-300">咨询</li>
                <li className="cursor-pointer hover:text-gray-50 duration-300"><Link href="/login">登录</Link></li>
            </ul>
        </nav >
    </>
}