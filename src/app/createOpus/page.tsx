"use client"
import { useRouter } from 'next/navigation';
import style from './index.module.css'
export default function () {
  const router = useRouter()
  return <>
    <div className="flex justify-around items-center mt-24">
      <div style={{backgroundColor:'var(--card-bg)'}}  className="w-96 cursor-pointer h-96  rounded-lg flex flex-col justify-center items-center  transition-background" onClick={()=>router.push('/createOpus/createVideo')}>
        <h1 className="text-white text-3xl font-bold" style={{color:'var(--foreground'}}>创建视频</h1>
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4486" width="256" height="256">
          <symbol id="video">
            <path d="M828.952381 121.904762a73.142857 73.142857 0 0 1 73.142857 73.142857v633.904762a73.142857 73.142857 0 0 1-73.142857 73.142857H195.047619a73.142857 73.142857 0 0 1-73.142857-73.142857V195.047619a73.142857 73.142857 0 0 1 73.142857-73.142857h633.904762z m0 268.190476H195.047619v438.857143h633.904762V390.095238z m-390.095238 59.733333a48.761905 48.761905 0 0 1 24.185905 6.436572l194.31619 111.006476a48.761905 48.761905 0 0 1 0 84.675048l-194.31619 111.030857A48.761905 48.761905 0 0 1 390.095238 720.62781V498.590476a48.761905 48.761905 0 0 1 48.761905-48.761905z m24.380952 90.770286v137.996191l120.758857-68.998096L463.238095 540.623238zM341.333333 195.047619H195.047619v121.904762h146.285714V195.047619z m268.190477 0h-195.04762v121.904762h195.04762V195.047619z m219.428571 0h-146.285714v121.904762h146.285714V195.047619z" p-id="4487" fill="transparent"></path>
          </symbol>
          <use xlinkHref="#video" className={style.text}></use>
          <use xlinkHref="#video" className={style.text}></use>
          <use xlinkHref="#video" className={style.text}></use>
        </svg>
      </div>
      <div style={{backgroundColor:'var(--card-bg)'}}  className="w-96 cursor-pointer  h-96  rounded-lg flex flex-col justify-center items-center  transition-background" onClick={() =>router.push("/createOpus/createArticle")}>
        <h1 className="text-white text-3xl font-bold" style={{color:'var(--foreground'}}>创建文章</h1>
        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4009" width="256" height="256">
          <symbol id="artile">
            <path d="M874.666667 128H277.333333a21.333333 21.333333 0 0 0-21.333333 21.333333v106.666667H149.333333a21.333333 21.333333 0 0 0-21.333333 21.333333v533.333334a85.44 85.44 0 0 0 85.333333 85.333333h576a106.773333 106.773333 0 0 0 106.666667-106.666667V149.333333a21.333333 21.333333 0 0 0-21.333333-21.333333zM170.666667 810.666667V298.666667h85.333333v512a42.666667 42.666667 0 0 1-85.333333 0z m682.666666-21.333334a64.064 64.064 0 0 1-64 64H286.805333A84.352 84.352 0 0 0 298.666667 810.666667V170.666667h554.666666z" fill="transparent" p-id="4010"></path>
            <path d="M405.333333 298.666667h341.333334a21.333333 21.333333 0 0 0 0-42.666667H405.333333a21.333333 21.333333 0 0 0 0 42.666667zM405.333333 426.666667h341.333334a21.333333 21.333333 0 0 0 0-42.666667H405.333333a21.333333 21.333333 0 0 0 0 42.666667zM405.333333 554.666667h341.333334a21.333333 21.333333 0 0 0 0-42.666667H405.333333a21.333333 21.333333 0 0 0 0 42.666667zM405.333333 682.666667h341.333334a21.333333 21.333333 0 0 0 0-42.666667H405.333333a21.333333 21.333333 0 0 0 0 42.666667z" fill="transparent" p-id="4011">
            </path>
          </symbol>
          <use xlinkHref="#artile" className={style.text}></use>
          <use xlinkHref="#artile" className={style.text}></use>
          <use xlinkHref="#artile" className={style.text}></use>
        </svg>
      </div>
    </div>
  </>;
};