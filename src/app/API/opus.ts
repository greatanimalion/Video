import axios from './config'

export function CreateOpus({userId,type}:{userId:number,type:number}){
    return axios.post('/opus/createOpus',{data:{userId,type}})
}
export function GetOpusById(id:number){
    return axios.get('/opus/'+id)
}
export function DeleteOpus({userId,opusId}:{userId:number,opusId:number}){
    return axios.delete('/opus/del',{data:{userId,opusId}})
}
export function UpdateOpus(opus:{
    id: number;
    userId: number;
    title: string;
    time: string;
    intro: string;
    label: number;
    content: string;
    coverImg: string;
}){
    return axios.put('/opus/updata',{data:opus})
}
export function GetOpusListByUserId(userId:number,page:number,size:number){
    return axios.post('/opus/findByUser',{data:{userId,page,size}})
}
export function FindOpusByLabel(label:string,page:number,size:number){
    return axios.post('/opus/label',{label,page,size})
}
export function FindOpusByKeyDim(key:string,page:number,size:number){
    return axios.post('/opus/key',{key,page,size})
}
export function Upload(file:any){
    const formData = new FormData();
    formData.append('utils', file);
    return axios.post('/opus/upload',formData)
}
// //创建opus
// router.post('/createOpus',OpusController.createOpus)
// //精确查找opus
// router.get('/:id',OpusController.getOpusById)
// //删除作品
// router.delete('/del',OpusController.deleteOpus)
// //更新作品
// router.put('/updata',OpusController.updateOpus)
// //根据用户id分页查找其所有作品
// router.post('/findByUser',OpusController.getOpusListByUserId)
// //根据类型查找作品
// router.post('/label',OpusController.findOpusByLabel)
// //根据关键词查找作品
// router.post('/key',OpusController.findOpusByKeyDim)
// //上传照片
// router.post('/upload',upload.single("utils"),OpusController.upload)