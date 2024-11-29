import type { Metadata } from "next"
export default function MyFavorLayout({children}:{children:React.ReactNode}) {
    return <>
    {children}
    </>
}

export const metadata: Metadata = {
    title:"修改信息"
}