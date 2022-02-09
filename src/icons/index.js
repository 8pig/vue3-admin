/*
1. 导入所有svg
2. 注册全局
*/

import SvgIcon from '@/components/SvgIcon';

const svgRequire = require.context('./svg', false, /\.svg$/);
svgRequire.keys().forEach(svgItem => svgRequire(svgItem));

export default app => {
  app.component('svg-icon', SvgIcon);
};
