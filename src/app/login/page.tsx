"use client"
import useCanvas from "@/lib/canvas"
import { useEffect, useRef } from "react";
import styles from './index.module.css'

export default function Page() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        let { destory } = useCanvas(canvasRef.current);
        return destory
    }, [])
    return <>
        <div className="w-screen h-screen bg-black">
            <canvas ref={canvasRef}></canvas>
            <div className={styles.loginBox} >
                <h2 className={styles.h2}>Login</h2>
                <form>
                    <div className={styles.item}>
                        <input className={styles.input} type="text" required id="account" />
                        <label htmlFor="account">用户名</label>
                    </div>
                    <div className={styles.item}>
                        <input className={styles.input} type="password" required id="password" />
                        <label htmlFor="password">密码</label>
                    </div>
                    <button className={styles.btn} type="submit">登录
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </form>
            </div>
        </div>
    </>
}