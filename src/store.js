import Vue from 'vue';
import Vuex from 'vuex';
import { getById } from './services/rick-morty';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    character: {},
  },
  getters: {
    nameTitle(state) {
      return `${state.character.name} - ${state.character.species} xD`;
    },
  },
  mutations: {
    setCharacter(state, character) {
      state.character = character;
    },
  },
  actions: {
    getCharacterById(context, payload) {
      return getById(payload.id)
        .then((res) => {
          context.commit('setCharacter', res);
          return res;
        }).catch((error) => console.error(error));
    },
  },
});

export default store;
