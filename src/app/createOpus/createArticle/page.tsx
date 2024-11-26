"use client"
import {getItem,setItem} from '@/utils/localStore'
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import dynamic from 'next/dynamic';
import { CiSaveUp2 } from "react-icons/ci";
import React, { useEffect, useRef, useState } from "react";

export default function () {
  const Editor = dynamic(() => import('./Editor'), { ssr: false })
 
  const editorRef=useRef(null)
 function keepArticle() {
  console.log(1212);
  
  //@ts-ignore
    setItem('article',{title,type,content:editorRef.current?.getHtml()||''})
 }
  useEffect(()=>{
    const handel=()=>{
      alert()
    }
    const article=getItem('article')
    setHtml(article?.content||'')
    setTitle(article?.title||'标题')
    setType(article?.type||1)
    window.addEventListener('beforetoggle',handel)
    return window.removeEventListener('beforetoggle',handel)
  },[])
  
  return <>
    <div className="flex justify-between items-center">
      <div style={{ width: '40%' }}>
        <Input variant="flat" value={title} label="标题" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <Select
        label="选择类型"
        className="max-w-xs"
        defaultSelectedKeys={[String(type)]}
        onChange={(e) => setType(Number(e.target.value))}
      >
        {typeList.map((i) => (
          <SelectItem key={i.key}>
            {i.label}
          </SelectItem>
        ))}
      </Select>
      <Button  color="primary" variant="light"><CiSaveUp2 />发表作品</Button>
      <Button color="primary" variant="light" onClick={()=>{
        keepArticle()
      }}>保存</Button>
      <div></div>
    </div>   
    <div style={{ marginTop: '20px', zIndex: 100 }}>
     <Editor str={html} ref={editorRef} />
    </div>
  </>;
};