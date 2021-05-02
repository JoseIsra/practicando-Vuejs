<template>
  <div class="content">
    <p v-if="character">
      <strong >{{character.name | capitalize  }}</strong>
      <small>{{character.status}}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['character']),
  },
};
</script>

<style>
</style>
