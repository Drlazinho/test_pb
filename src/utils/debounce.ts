let timeout : any = {};

const debounce = (fn: any, time = 500) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    fn();
  }, time);
};

export default debounce;