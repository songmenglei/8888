const Fly = require("flyio/dist/npm/wx") 
const fly = new Fly

fly.config.baseURL = 'https://easymarket.jasonandjay.com'
fly.config.timeout = 30000

//添加请求拦截器
fly.interceptors.request.use((request)=>{
    //给所有请求添加自定义header
    request.headers["X-Tag"]="flyio";
  	//打印出请求体
  	console.log(request.body)
  	//终止请求
  	//var err=new Error("xxx")
  	//err.request=request
  	//return Promise.reject(new Error(""))
  
    //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
    return request;
})
 
//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
    (response) => {
        console.log('response...', response);
        //只将请求结果的data字段返回
        if (response.data){
            if (response.data.errno === 0 ){
                return response.data.data;
            }else{
                wx.showToast({
                  title: response.data.errmsg, //提示的内容,
                  icon: 'none', //图标,
                });
            }
        }else{
            wx.showToast({
              title: response.statusText, //提示的内容,
              icon: 'none', //图标,
            });
        }
        return response.data
    },
    (err) => {
        //发生网络错误后会走到这里
        wx.showToast({
            title: err.toString(), //提示的内容,
            icon: 'none', //图标,
        });
        return Promise.resolve();
    }
)



export default fly;