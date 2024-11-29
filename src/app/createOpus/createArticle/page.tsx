"use client"
import dynamic from 'next/dynamic';


export default function () {
  const Editor = dynamic(() => import('./Editor'), { ssr: false })  
  return <>
   <Editor />
  </>;
};