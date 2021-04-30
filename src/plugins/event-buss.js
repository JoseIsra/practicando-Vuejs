const eventBus = {};
eventBus.install = (Vue) => {
  const vue = Vue;
  vue.prototype.$bus = new Vue();
};
export default eventBus;
