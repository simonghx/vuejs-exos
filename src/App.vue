<template>
 <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  <div id="app">
    <header class="text-center container">
      <h1 class="my-5">DOM Javascript - VueJS</h1>
      <ul class="row text-center mx-auto list-unstyled">
        <li class="col">
          <a href="#" role="button" class="btn btn-danger" :class="{'active' : isActive == 1}" data-position="1" @click.prevent="selectedExo">Exo 1</a>
        </li>
        <li class="col">
          <a href="#" role="button" class="btn btn-danger" data-position="2" :class="{'active' : isActive == 2}" @click.prevent="selectedExo">Exo 2</a>
        </li>
        <li class="col">
          <a href="#" role="button" class="btn btn-danger" data-position="3" :class="{'active' : isActive == 3}" @click.prevent="selectedExo">Exo 3</a>
        </li>
        <li class="col">
          <a href="#" role="button" class="btn btn-danger" data-position="4" :class="{'active' : isActive == 4}" @click.prevent="selectedExo">Exo 4</a>
        </li>
        <li class="col">
          <a href="#" role="button" class="btn btn-danger" data-position="5" :class="{'active' : isActive == 5}" @click.prevent="selectedExo">Exo 5</a>
        </li>
        <li class="col">
          <a href="#" role="button" class="btn btn-danger" data-position="6" :class="{'active' : isActive == 6}" @click.prevent="selectedExo">Exo 6</a>
        </li>
        <li class="col">
          <a href="#" role="button" class="btn btn-danger" data-position="7" :class="{'active' : isActive == 7}" @click.prevent="selectedExo">Exo 7</a>
        </li>
        <li class="col">
          <a href="#" role="button" class="btn btn-danger" data-position="8" :class="{'active' : isActive == 8}" @click.prevent="selectedExo">Exo 8</a>
        </li>
        <li class="col">
          <a href="#" role="button" class="btn btn-danger" data-position="9" :class="{'active' : isActive == 9}" @click.prevent="selectedExo">Exo 9</a>
        </li>
        <li class="col">
          <a href="#" role="button" class="btn btn-danger" data-position="10" :class="{'active' : isActive == 10}" @click.prevent="selectedExo">Exo 10</a>
        </li>
        

      </ul>
    </header>

    <section id="panel-container" class="container">
      <exo1 v-show="this.isActive == 1"></exo1>
      <exo2 v-show="this.isActive == 2"></exo2>
      <exo3 v-show="this.isActive == 3"></exo3>
      <exo4 v-show="this.isActive == 4"></exo4>
      <exo5 v-show="this.isActive == 5"></exo5>
      <exo6 v-show="this.isActive == 6"></exo6>
      <exo7 v-show="this.isActive == 7"></exo7>
      
    </section>

  </div>
</template>

<script>
import exo1 from "./components/Exo1.vue";
import exo2 from "./components/Exo2.vue";
import exo3 from "./components/Exo3.vue";
import exo4 from "./components/Exo4.vue";
import exo5 from "./components/Exo5.vue";
import exo6 from "./components/Exo6.vue";
import exo7 from "./components/Exo7.vue";
export default {
  name: "app",
  components: {
    exo1,
    exo2,
    exo3,
    exo4,
    exo5,
    exo6,
    exo7
  },
  mounted() {},
  data() {
    return {
      isActive: 1
    };
  },
  methods: {
    selectedExo: function(event) {
      this.isActive = event.target.dataset.position;
    }
  }
};
</script>

<style lang="sass">
@import "./assets/sass/main.sass"



</style>