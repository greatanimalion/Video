"use client"
import useCanvas from "@/lib/canvas"
import { useEffect, useRef, useState } from "react";
import styles from './index.module.css'
import { post } from "@/utils/axios";
import Message from "@/utils/msg";
export default function Page() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        let { destory } = useCanvas(canvasRef.current);
        return destory
    }, [])
    const login=(e:any)=>{
        e.preventDefault()
        if(!email||!password)return Message('error','请输入用户名和密码')
        post({url:'/api/login',data:{email,password}}).then(res=>{  
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })  
    }
    return <>
        <div className="w-screen h-screen bg-black">
            <canvas ref={canvasRef}></canvas>
            <div className={styles.loginBox} >
                <h2 className={styles.h2}>Login</h2>
                <form>
                    <div className={styles.item}>
                        <input autoComplete = "off"  className={styles.input} type="text" required id="account" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="account">用户名</label>
                    </div>
                    <div className={styles.item}>
                        <input autoComplete = "off"  className={styles.input} type="password" required id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">密码</label>
                    </div>
                    <button className={styles.btn} type="submit" onClick={login}>登录
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