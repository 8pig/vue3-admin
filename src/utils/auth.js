
import storage from '@/utils/storage';
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant';

// 获取时间戳
export function getTimeStamp () {
  return storage.get(TIME_STAMP);
}

// 设置时间戳
export function setTimeStamp () {
  return storage.set(TIME_STAMP, Date.now());
}

// 是否超时
export function isCheckTimeout () {
  const currentTime = Date.now();
  const timeStamp = getTimeStamp();
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE;
}
