import { useState } from "react";
type UseThemeReturnType = [string, (value: 'light' | 'dark') => void];
export default (): UseThemeReturnType => {
    const theme = localStorage.getItem('theme') || 'light';
    const [themeState, _setThemeState] = useState(theme)
    Promise.resolve().then(() => {
        document.documentElement.className=themeState;
    });
    const setThemeState = (value: 'light' | 'dark') => {
        document.documentElement.className = value;
        localStorage.setItem('theme', value);
        _setThemeState(value);
    };
    return [themeState, setThemeState];
};