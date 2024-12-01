"use client"
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../../const/icon/SunIcon";
import { MoonIcon } from "../../const/icon/MoonIcon";
import { useCallback } from "react";

export default function CSwitch() {
    const handleThemeChange = useCallback(function (event: any){
        const checked = event.target.checked ? 'light' : 'dark'
    
        localStorage.setItem('theme', checked || 'light')
    }, [])
   const localTheme =typeof localStorage !== 'undefined' ? localStorage.getItem('theme'):'light'
    return <Switch
        isSelected={true}
        onChange={handleThemeChange}
        defaultSelected
        size="lg"
        color="primary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
    >
    </Switch>
}