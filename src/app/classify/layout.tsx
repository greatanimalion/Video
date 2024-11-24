import type { Metadata } from "next";
export default function ClassifyLayout({children}:{ children: React.ReactNode }) {
    return <>
        <div>
            {children}
        </div>
    </>
}
export const metadata: Metadata = {
    title: "分类",
    description: "分类页面",
    keywords: "分类",
}