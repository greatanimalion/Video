import axios from 'axios'

let baseURL
if( process.env.NODE_ENV === 'production' ) {
    baseURL = '服务器地址'
} else {
    baseURL = process.env.baseURL
}

axios.interceptors.request.use((config) => {
    console.log(config)
    // config.headers['Accept'] = 'application/vnd.dpexpo.v1+json'
    config.baseURL = baseURL
    config.timeout = 5000
    return config;
}, (error) => {
    return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})
// axios的get请求
export function get({
    url,
    params={}
}:{url:string,params?:any}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

// axios的post请求
export function post({
    url,
    data
}:{url:string,data:any}) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'post',
            data
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export default axios
