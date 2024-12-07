"use client"
// import type { Metadata } from "next";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiArticleFill } from "react-icons/pi";
import { MdOutlineFavorite } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function PersonLayout({children}:{ children: React.ReactNode }) {
    const router = useRouter();
    return (<>
        <div className="flex align-center justify-between gap-4  p-3">
          <Listbox variant="faded" aria-label="Listbox menu with icons" className='w-32'>
            <ListboxItem
              key="myinfor"
              startContent={<IoPersonCircleSharp />}
              onPress={() => router.push("/person/myInfor")}
            >
              个人信息
            </ListboxItem>
            <ListboxItem
              key="myfavor"
              startContent={<MdOutlineFavorite className="gl" />}
              onPress={()=>router.push("/person/myfavor")}
            >
              我的喜欢
            </ListboxItem>
            <ListboxItem
              key="edit"
              showDivider
              startContent={<PiArticleFill className="text-lg" />}
              onPress={()=>router.push("/person/myopus")}
            >
              我的作品
            </ListboxItem>
            <ListboxItem
              key="delete"
              className="text-danger"
              color="danger"
              startContent={<FaTools className="text-lg" />}
              onPress={()=>router.push("/person/change")}
            >
              修改信息
            </ListboxItem>
          </Listbox>
          <div className="w-full pb-4">
          {children}
          </div>
        </div>
        </>
    );
}

