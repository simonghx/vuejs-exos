<template>
  <div id="app">
    <header class="text-center container">
      <h1 class="my-5">{{ titre }}</h1>
      <ul class="row text-center mx-auto list-unstyled">
        <li class="col" @mouseover="changeTitle" @mouseout="titleBase" v-for="(bouton,index) in boutons" :key="index"><router-link class="btn btn-danger"  :to="bouton.valeur" >{{ bouton.name }}
        </router-link></li>
    
      </ul>
    </header>

    <section id="panel-container" class="container">
    
      <router-view/>
      
      
    </section>

  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  mounted() {},
  data() {
    return {
      titre: "DOM Javascript - VueJS",
      titleChanged: false,
      boutons: [
        {
          name: "Exo 1",
          valeur: "exo1"
        },
        {
          name: "Exo 2",
          valeur: "exo2"
        },
        {
          name: "Exo 3",
          valeur: "exo3"
        },
        {
          name: "Exo 4",
          valeur: "exo4"
        },
        {
          name: "Exo 5",
          valeur: "exo5"
        },
        {
          name: "Exo 6",
          valeur: "exo6"
        },
        {
          name: "Exo 7",
          valeur: "exo7"
        }
      ]
    };
  },
  methods: {
    changeTitle() {
      this.titre = event.target.textContent;
      this.titleChanged = true;
    },
    titleBase() {
      this.titre = "DOM Javascript - VueJS";
      this.titleChanged = false;
    }
  }
};
</script>

<style lang="sass">
@import "./assets/sass/main.sass"



</style>