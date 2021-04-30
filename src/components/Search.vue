<template>
  <main>
    <transition name="move">
      <notification v-show="notExist">
        <template v-slot:body>
          <p>Error no hay resultados!!</p>
        </template>
      </notification>
    </transition>
    <section class="section">
      <nav class="navbar">
        <div class="container">
          <form @submit.prevent="getOneCharacter">
          <input
            type="text"
            v-model='searchTerm'
            class="input is-large is-link"
            placeholder="Digite su música"
          />
          <button type="submit" class="button is-primary is-medium">
            Obtener ese personaje 😁
          </button>
          </form>
          <button @click='getCharacters' class="button is-info is-large">
            Obtener algunos personajes
          </button>
        </div>
      </nav>
      <div class="main__box" >
        <loader v-if="loading" />
        <div class="part" v-for='human in outcome' :key='human.id' >
          <character v-disapear="human.species"
          :image='human.image' :name='human.name' :id="human.id"
          :status='human.status' :species='human.species' 
          @go-there="doSomethingWithChildEvent"
          :class="{ 'is-active': human.id === elid }"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { getData, getCharacter } from '../services/rick-morty';
import Character from './Card.vue';
import Notification from './shared/Notification.vue';
import Loader from './shared/Loader.vue';

export default {
  name: 'App',
  components: {
    Character, Notification, Loader,
  },
  data: () => ({
    searchTerm: '',
    outcome: null,
    loading: false,
    elid: '',
    notExist: false,
  }),
  watch: {
    notExist() {
      if (this.notExist) {
        setTimeout(() => {
          this.notExist = false;
        }, 1500);
      }
    },
  },
  methods: {
    async getCharacters() {
      try {
        this.loading = true;
        const res = await getData();
        if (res.length > 0) {
          console.log(res);
          this.outcome = res;
          this.loading = false;        
        } else {
          this.exist = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getOneCharacter() {
      try {
        this.outcome = null;
        if (this.searchTerm.length > 0) {
          this.loading = true;
          const res = await getCharacter(this.searchTerm);
          this.outcome = res.results;
          this.loading = false;
        } else {
          this.notExist = true;
        }
      } catch (error) {
        console.error(error);
      }
    },
    doSomethingWithChildEvent(theobject) {
      this.elid = theobject.id;
    },
  },
};
</script>

<style lang="scss">
.main__box {
  padding:10px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
}
.is-active{
  border:3px solid green;
}
</style>
