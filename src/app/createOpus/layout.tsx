import { Metadata } from "next"

export default function CreateOpus({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

export const metadata:Metadata={
    title: "创建作品",
    description: "创建你的作品，分享你的故事。"
}