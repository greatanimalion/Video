export function getUserInfor(){
    const userInfor=JSON.parse(localStorage.getItem('user')||"{}");
    return userInfor;
}

export function setUserInfor(userInfor:Object){
    localStorage.setItem('user',JSON.stringify(userInfor));
}