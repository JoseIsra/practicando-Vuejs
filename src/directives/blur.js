const blur = {};
function setBlur(el, binding) {
  el.style.filter = binding.value === 'Alien' ? 'blur(3px)' : 'none';
  // el.querySelectorAll('button').forEach((item) => {
  //   if (!binding.value) {
  //     item.setAttribute('disabled', true);
  //   } else {
  //     item.removeAttribute('disabled');
  //   }
  // });
}

blur.install = (Vue) => {
  Vue.directive('disapear', {
    bind(el, binding) {
      setBlur(el, binding);
    },
  });
};

export default blur;
