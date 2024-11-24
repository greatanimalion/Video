
import type { Metadata } from "next";
import style from "./page.module.css";
import { Pagination} from "@nextui-org/react";
import Tabs from "@/components/Tabs"
export default function Home() {

  return (
    <>
      <div className={style.autoImg}>
        <div className={style.container}>
          <div className={style.item}>
            <img alt="autoImg" className={style.img} src="https://tse1-mm.cn.bing.net/th/id/OIP-C.kujGUv_WbXDkAac92iC_vwHaE7?w=279&h=186&c=7&r=0&o=5&dpr=2&pid=1.7" />
            <div className={style.intro}>
              「我看见天空在哭泣」
              <br />「我听闻有你的声音」
              <br />「我嗅到思念在荆棘中盛开」
              <br />「我从日落的方向走来」
              <br />「大地和玫红是你的温床」
              <br />「霜雪与残阳是你的浓妆」
              <br />「我会把希望织成飞舞的木棉花」
              <br />「直到岩石铭记花香」
              <br />～～～
              <br />「我看见天空在哭泣」
              <br />「我听闻有你的声音」
              <br />「我嗅到思念在荆棘中盛开」
              <br />「我从日落的方向走来」
              <br />「大地和玫红是你的温床」
              <br />「霜雪与残阳是你的浓妆」
              <br />「我会把希望织成飞舞的木棉花」
              <br />「直到岩石铭记花香」
              <br />～～～
              <br />「哭泣的人儿啊」
              <br />「请你轻轻闭上双眼」
              <br />「我从日落的方向走来」
              <br />「待到黄昏落幕在至暗的时代」
              <br />「我将应许你朝霞与蓝天」

            </div>
          </div>
        </div>
        <div className="flex justify-center m-3">
          <Pagination
            total={5}
            color="secondary"
          />
        </div>
      </div>
      <div>
         <Tabs />
      </div>
    </>
  );
}
export const metadata: Metadata = {
  title: "首页",
  description: "首页",
}

