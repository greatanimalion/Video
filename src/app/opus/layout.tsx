"use client"
import { GrFavorite } from "react-icons/gr";
// import { MdOutlineFavorite } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useRef } from "react";
import { Button, Input } from "@nextui-org/react";
export default function Layout({ children }: { children: React.ReactNode }) {
    const Comment=useRef<HTMLDivElement>(null)
    let isShow=false
    function showComent(){
        if(!isShow)Comment.current!.style.transform="translateX(0)"
        else Comment.current!.style.transform="translateX(384px)"
        isShow=!isShow
    }
    return <>
        <div className="flex justify-between items-center flex-col fixed w-14 gap-6 top-64 left-10">
            <div className="hover:bg-blue-950 transition-all flex rounded-full flex-col items-center justify-center cursor-pointer bg-stone-900 w-14 h-14">
                <GrFavorite className=" text-2xl" />
                <small>点赞</small>
            </div>
            <div onClick={showComent}  className="hover:bg-blue-950 transition-all flex rounded-full flex-col items-center justify-center cursor-pointer bg-stone-900 w-14 h-14">
                <FaRegCommentDots className="text-2xl" />
                <small>评论</small>
            </div>
        </div>
        {children}
        <div  ref={Comment} className="transition-all  fixed bottom-0 right-0 translate-x-96 h-full w-96 bg-stone-900 pt-16">
            <h1 className="p-3">评论区<IoMdClose className=" hover:rotate-90 transition-all hover:text-gray-50 text-gray-400 float-right cursor-pointer text-xl" onClick={showComent} /></h1>
            <div className="p-3 pt-0">hhh</div>
            <div className="flex justify-around items-center absolute bottom-1 w-full  bg-stone-800 p-2">
                <div style={{width:'75%'}}><Input style={{fontSize:'20px'}}  variant="underlined" placeholder="输入评论"/></div>
                <Button style={{width:'25%'}} radius="none">发送</Button>
                </div>
        </div>
    </>
}