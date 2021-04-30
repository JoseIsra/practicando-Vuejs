<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-start">
            <div class="navbar-item">
              <strong>Platzi Music</strong>
            </div>
          </div>
          <div class="navbar-end navbar-menu">
            <router-link to="/" class="navbar-item">Inicio</router-link>
            <router-link to="/about" class="navbar-item">Información</router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">RICK Y MORTY</h1>
        <h2 class="subtitle">Exploremos 😊</h2>
      </div>
      <player />
    </div>
  </section>
</template>

<script>
import Player from '../Player.vue';

export default {
  components: {
    Player,
  },
};
</script>
