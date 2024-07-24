import request from '@/utils/request';

export function login (account) {
   return request({
    url: '/visitor/login',
    method: 'post',
    data: account
  })
}

export function register (params) {
  return request({
    url: '/visitor/register',
    method: 'post',
    data: params
  })
}

export function adminLogin (account) {
  return request({
   url: '/visitor/admin/login',
   method: 'post',
   data: account
 })
}

export function adminRegister (params) {
 return request({
   url: '/visitor/admin/register',
   method: 'post',
   data: params
 })
}

export function commit(params){
  return request({
    url: '/record/commit',
    method: 'post',
    data:params
  })
}

export function update(params) {
  return request({
    url: '/record/update',
    method: 'post',
    data:params
  })
}

export function getRecordById(id){
  return request({
    url: `/record/info/${id}`,
    method: 'get'
  })
}

export function getReserveRecordsByUserId(){
  return request({
    url: '/record/getReserveRecordsByUserId',
    method: 'get'
  })
}


export function getReserveRecords(){
  return request({
    url: '/reservation/getReserveRecords',
    method: 'get'
  })
}



export function adminUpdate(params) {
  return request({
    url: '/reservation/modify/status',
    method: 'post',
    data:params
  })
}