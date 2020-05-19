import {request} from "./request.js";

export function getHomedata(){
  return request({
    url:'/home/multidata'
  })
  
}