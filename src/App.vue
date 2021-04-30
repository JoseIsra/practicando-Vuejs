<template>
  <div id="app">
    <pm-header />
    <router-view></router-view>
    <pm-footer />
  </div>
</template>

<script>
import PmFooter from './components/layout/Footer.vue';
import PmHeader from './components/layout/Header.vue';


export default {
  name: 'App',
  components: {
    PmFooter, PmHeader,
  },
};
</script>

<style lang="scss">
@import "./styles/global.scss";

// .main__box {
//   height:70vh;
//   padding:10px;
//   display:flex;
//   flex-wrap:wrap;
//   justify-content:space-around;
//   align-items:center;
// }
// .is-active{
//   border:3px solid green;
// }
</style>
