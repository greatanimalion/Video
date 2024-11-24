
import { Button } from "@nextui-org/react";
import style from './index.module.css'
import type { Metadata } from "next";
const list = [
    {
        type: 1,
        label: '动漫'
    }, {
        type: 2,
        label: '电影'
    }, {
        type: 3,
        label: '音乐'
    }, {
        type: 4,
        label: '综艺'
    }, {
        type: 5,
        label: '动漫'
    }, {
        type: 6,
        label: '电影'
    }, {
        type: 7,
        label: '音乐'
    }, {
        type: 8,
        label: '科幻'
    }, {
        type: 9,
        label: '校园'
    }, {
        type: 10,
        label: '游戏'
    }, {
        type: 11,
        label: '魔法'
    }, {
        type: 12,
        label: '萌系'
    }, {
        type: 13,
        label: '生活'
    }, {
        type: 14,
        label: '动漫'
    }, {
        type: 15,
        label: '电影'
    }, {
        type: 16,
        label: '音乐'
    }, {
        type: 17,
        label: '综艺'
    }, {
        type: 18,
        label: '动漫'
    }, {
        type: 19,
        label: '电影'
    }, {
        type: 20,
        label: '音乐'
    }
]
export default function ClassifyPage() {
    return <>
        <div className={style.list}>
            {
                list.map((item, index) => <Button radius="sm" key={index}>{item.label}</Button>)
            }
        </div>
    </>;
}

export const metadata: Metadata={
    title: '分类',
    description: '分类页面 虚拟现实'
}