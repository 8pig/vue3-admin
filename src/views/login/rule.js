export const valid = () => {
  return (rule, value, callBack) => {
    if (value.length < 6) {
      callBack(new Error('Invalid password'));
    } else {
      callBack();
    }
  };
};
