"use client"

import { useEffect } from "react";
import style from './index.module.css'
import {commonColors, semanticColors} from "@nextui-org/theme";
export default function App() {
  console.log(semanticColors.dark); 
  useEffect(() => {
    window.location.href = "/person/myInfor";
  }, [])
  return (
    <div className="flex justify-center items-center h-screen">
      <div className={style.loader}>
        <span></span><span></span><span></span>
      </div>
    </div>

  );
}