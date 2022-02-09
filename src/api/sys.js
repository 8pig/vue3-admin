import request from '../utils/request';

export const login = data => {
  return request({
    url: '/mock/login',
    method: 'post',
    data
  });
};

/*
  获取用户信息
*/
export const getUserInfo = params => {
  return request({
    url: '/mock/profile',
    method: 'get',
    params
  });
};
