import request from '../utils/request';

export const login = data => {
  return request({
    url: '/mock/login',
    method: 'post',
    data
  });
};
