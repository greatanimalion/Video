import Tabs from "@/components/Tabs";
export default async function MyFavorPage() {
    let c=await a();
    
    return <Tabs></Tabs>;    
}


const a=()=>{
    return new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{resolve('hello')},1000)
    })
}