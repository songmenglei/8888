import request from '../utils/request'

// 获取首页数据
export let getIndex = ()=>{
    return request.get('/');
}