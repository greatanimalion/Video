export function getUserInfor() {
    const userInfor = JSON.parse(localStorage.getItem('user') || "{}");
    return userInfor;
}

export function setUserInfor(userInfor: object) {
    window.localStorage.setItem('user', JSON.stringify(userInfor));
}

export function setItem(key: string, value: object) {
    if (typeof window !== 'undefined') window.localStorage.setItem(key, JSON.stringify(value));
}
export function getItem(key: string) {
    const value = typeof window !== 'undefined' ? window.localStorage.getItem(key) || "{}" : "{}";
    return JSON.parse(value);
}