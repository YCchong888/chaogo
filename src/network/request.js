import axios from 'axios'

// export function request(config,success,failure) {
//   //创建实梨
//   const instance =axios.create({
//     baseURL:'http://152.136.185.210:8000/api/n3',
//     timeout: 5000

//   })

//   instance(config).then(res =>{
//     // console.log(res);
//     success(res)
//   }).catch(err =>{
//     // console.log(err);
//     failure(err)
//   })

// }

export function request(config) {
  //创建axious实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:8000/api/n3',
      timeout:5000,
    })
//发送真正的网络请求
      //请求拦截的作用
      instance.interceptors.request.use(config =>{
        return config
      },err =>{

      })
      // //响应拦截
      instance.interceptors.response.use(res =>{
        return res.data
      },err =>{
        console.log(err);
      })

    return instance(config)



}
