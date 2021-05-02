<template>
<div class="container" v-if="character && character.id">
  <div class="columns">
    <div class="column is-3 has-text-centered">
      <figure class="media-left">
        <p class="image">
          <img :src="character.image" >
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
          <h1 class="title">{{nameTitle}}</h1>
        </div>
        <div class="panel-block">
          <article class="media">
            <div class="media-content">
              <div class="content" >
                <ul v-for="item in character" :key="item.id">
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
import { mapState, mapActions, mapGetters } from 'vuex'; 
import characterMixin from '../mixins/character';

export default {

  computed: {
    ...mapState(['character']),
    ...mapGetters(['nameTitle']),
  },
  mixins: [characterMixin],
  created() {
    const { id } = this.$route.params;
    if (!this.character || !this.character.id || this.character.id !== id) {
      this.getCharacterById({ id })
        .then(() => console.log('hecho'));
    }
  },
  methods: {
    ...mapActions(['getCharacterById']),
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
