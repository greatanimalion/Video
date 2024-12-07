"use client"

import { useEffect } from "react";
import style from './index.module.css'
export default function App() {
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