import { createStore } from 'vuex';
import getters from './getters';
// import user from './modules/user';
const modules = { };
const files = require.context('./modules', true, /\.js$/);
files.keys().forEach(path => {
  // path是一个 ./xxx.js
  const module = files(path).default || {};
  modules[path.slice(2, -3)] = {

    namespaced: true,
    ...module
  };
});
// console.error(modules);
export default createStore({
  modules,
  getters
});
