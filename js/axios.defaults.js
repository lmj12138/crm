//配置请求路径
//axios.defaults.baseURL = "http://localhost:8888"
axios.defaults.baseURL = "http://127.0.0.1:8888"
//数据以表单的形式扔给服务器
axios.defaults.headers["Content-Type"] = 'application/x-www-form-urlencoded';

//后台访问每次访问都带上cookie
axios.defaults.withCredentials=true;
//还是数据以表单的形式扔给服务器，数据格式是 ：name=z3&age=4
axios.defaults.transformRequest = function (data) {
    if (!data) return data;//如果没有给服务器传数据
    let result = '';
    for (let attr in data) {
        if (!data.hasOwnProperty(attr)) break;
        result += `&${attr}=${data[attr]}`;
    }
    return result.substring(1);
}

//配置请求拦截器
axios.interceptors.request.use(config => {
    return config
})

//配置响应拦截器
axios.interceptors.response.use(response => {
    return response.data;//成功就返回成功数据
}, reason => {
    //如果出现啦错误路径，返回404
    if (reason.response) {
        switch (String(reason.response.status)) {
            case "404":
                alert("当前请求地址不存在")
                break;
            default:
                break;
        }
    }
    //直接创造出一个失败的promise
    return Promise.reject(reason)//失败返回一个失败的Promise

})