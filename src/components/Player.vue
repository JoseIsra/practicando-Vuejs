<template>
  <div class="content">
    <p v-if="character">
      <strong>{{character.name | capitalize  }}</strong>
      <small>{{character.status}}</small>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    character: null,
  }),
  created() {
    this.$bus.$on('set-character', (simpleCharacter) => {
      this.character = simpleCharacter;
    });
  },
};
</script>

<style>
</style>
