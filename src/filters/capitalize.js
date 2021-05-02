const stringChanged = {};
stringChanged.install = (Vue) => {
  Vue.filter('capitalize', (value) => {
    if (value) {
      value.toUpperCase();
    }
    return value;
  });
};

export default stringChanged;
