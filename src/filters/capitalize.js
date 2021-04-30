const stringChanged = {};
stringChanged.install = (Vue) => {
  Vue.filter('capitalize', (value) => value.toUpperCase());
};

export default stringChanged;
