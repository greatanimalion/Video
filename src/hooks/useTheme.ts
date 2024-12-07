import { useState } from "react";
type UseThemeReturnType = [string, (value: 'light' | 'dark') => void];
export default (): UseThemeReturnType => {
    if(typeof window === 'undefined')return ['light', () => {}];
    const theme = localStorage.getItem('theme') || 'light';
    const [themeState, _setThemeState] = useState(theme)
    Promise.resolve().then(() => {
        document.documentElement.className=themeState;
        document.documentElement.style.cssText = `
            --card-bg: ${themeState === 'light' ? '#fcfcfc' : '#0d0d0d'};
            `
    });
    const setThemeState = (value: 'light' | 'dark') => {
        document.documentElement.className = value;
        localStorage.setItem('theme', value);
        _setThemeState(value);
    };    
    return [theme, setThemeState];
};