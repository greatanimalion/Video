"use client"
import { Switch } from "@nextui-org/react";
import { SunIcon } from "../../const/icon/SunIcon";
import { MoonIcon } from "../../const/icon/MoonIcon";
import { useCallback } from "react";
import useTheme from "@/hooks/useTheme";

export default function CSwitch() {
    const [theme, setTheme]= useTheme()
    const handleThemeChange = useCallback(function (event:any) {
      const checked = event.target.checked? 'light' : 'dark'
      setTheme(checked)
    },[])
    return <Switch
        isSelected={theme === 'light'}
        onChange={handleThemeChange}
        defaultSelected
        size="lg"
        color="primary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
    >
    </Switch>
}