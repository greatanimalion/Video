import type { Metadata } from "next";
export default function PersonLayout({children}:{ children: React.ReactNode }) {
    return <>
        <div>
            {children}
        </div>
    </>
}
export const metadata: Metadata = {
    title: "个人中心",
    description: "个人中心页面",
    keywords: "个人中心, 个人信息",
}