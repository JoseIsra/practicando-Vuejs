<template>
<div class="container">
  <div class="columns">
    <div class="column is-3 has-text-centered">
      <figure class="media-left">
        <p class="image">
          <img :src="info.image" >
        </p>
        <p>
          <button 
          @click="chooseCharacter"
          class="button is-primary is-large">Ver Más</button>
        </p>
      </figure>
    </div>
    <div class="column is-8">
      <div class="panel">
        <div class="panel-heading">
          <h1 class="title">{{info.name}}</h1>
        </div>
        <div class="panel-block">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <ul v-for="item in info" :key="item.id">
                  <li  ><strong>{{item}}</strong></li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getById } from '../services/rick-morty';
import characterMixin from '../mixins/character';

export default {
  data: () => ({
    info: null,
  }),
  mixins: [characterMixin],
  async created() {
    const { id } = this.$route.params;
    this.info = await getById(id);
  },
};
</script>

<style lang="scss" scoped>
  .container{
    margin-top:2rem;
    border:2px solid black; 
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>
