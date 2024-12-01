"use client"
import Image from 'next/image'
import logo from '@/public/logo.png'
import { Avatar, Switch, Tooltip } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { AiFillEdit } from "react-icons/ai";
import {MoonIcon} from "../const/icon/MoonIcon";
import {SunIcon} from "../const/icon/SunIcon";
import useTheme from '@/app/hooks/useTheme';
import { memo, useCallback } from 'react'
export default memo(function Nav() {
  const pathname = usePathname()
  const [theme, setTheme]= useTheme()
  const handleThemeChange = useCallback(function (event:any) {
    const checked = event.target.checked? 'light' : 'dark'
    setTheme(checked)
  },[])
  if (pathname === '/login') return <></>
  return <>
    <Navbar className='fixed top-0 z-50 w-full shadow-md shadow-gray-900 '>
      <NavbarBrand>
        <Image placeholder='empty' src={logo} alt="logo" width={50} height={50} style={{ cursor: 'pointer' }} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === '/' ? true : false}>
          <Link href="/" color={pathname === '/' ? 'primary' : 'foreground'}>
            首页
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/classify' ? true : false} >
          <Link href="/classify" color={pathname === '/classify' ? 'primary' : 'foreground'}  >
            分类
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/more' ? true : false}>
          <Link href="#" color={pathname === '/more' ? 'primary' : 'foreground'}>
            更多
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {pathname.startsWith('/createOpus') ?
          <Button color="primary" variant="light" onClick={() => window.history.back()}>返回</Button> :
          <Link href='/createOpus'><AiFillEdit />发表作品</Link>}
        <Tooltip placement="bottom"
          content={
            <div className="px-1 py-2 flex gap-2 items-center flex-col">
              <Button color="primary" variant="light" onClick={() => { location.href = '/person/myInfor' }}>个人中心</Button>
              <Button color="primary" variant="light">退出登录</Button>
            </div>
          }>
          <Avatar src="https://tse3-mm.cn.bing.net/th/id/OIP-C.NcBmhZg6-PBSrbbo2SVssgAAAA?rs=1&pid=ImgDetMain" />
        </Tooltip>

      </NavbarContent>
      <NavbarItem isActive={pathname === '/more' ? true : false}>
        <Switch 
          isSelected={theme==='light'?true:false}
          onChange={handleThemeChange}
          defaultSelected
          size="lg"
          color="primary"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        >
        </Switch>
      </NavbarItem>
    </Navbar>
  </>
})