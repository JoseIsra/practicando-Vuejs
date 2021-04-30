<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-128x128">
                <img :src='image' alt="logomyfriend">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <div class="media-content">
                    <p class="title is-4"><strong>Nombre: </strong>{{name}}</p>
                    <p class="subtitle is-6"><strong>Raza: </strong>{{species}}</p>
                    <p class="subtitle is-6"><strong>Estado: </strong>{{status}}</p>
                </div>
            </div>
        </div>
        <button @click="chooseCharacter">Escoger</button>
        <router-link :to="{name :'details', params: {id} }">ver este</router-link>
    </div>
</template>

<script>
import characterMixin from '../mixins/character';

export default {
  props: ['id', 'image', 'name', 'status', 'species'],
  mixins: [characterMixin],
};
</script>

<style lang="scss">
.card 
{
    border:1px solid red;
    padding:10px;
    
}
</style>
