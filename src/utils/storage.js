/*
*
*  */


const storage = {
  set (key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
  },
  get (key) {
    let data = window.localStorage.getItem(key);
    if (typeof data === 'object') {
      data = JSON.parse(data);
    }
    return data;
  },
  remove (key) {
    window.localStorage.removeItem(key);
  },
  removeAll () {
    window.localStorage.clear();
  }

};
export default storage;
