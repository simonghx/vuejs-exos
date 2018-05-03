<template>
  <div id="app">
    <header class="text-center container">
      <h1 class="my-5">{{ titre }}</h1>
      <ul class="row text-center mx-auto list-unstyled">
        <li class="col" @mouseover="changeTitle" @mouseout="titleBase" v-for="(bouton,index) in boutons" :key="index"><router-link class="btn btn-danger"  :to="bouton.valeur" @click="leftOrRight">{{ bouton.name }}
        </router-link></li>
    
      </ul>
    </header>

    <section id="panel-container" class="container">
    
      <transition :enter-active-class="animEnter" :leave-active-class="animLeave" mode="out-in">
        <router-view/>
      </transition>
      
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
      animEnter: "animated fadeIn",
      animLeave: "animated fadeOut",
      boutons: [
        {
          name: "Exo 1",
          valeur: "exo1",
          num: 1
        },
        {
          name: "Exo 2",
          valeur: "exo2",
          num: 2
        },
        {
          name: "Exo 3",
          valeur: "exo3",
          num: 3
        },
        {
          name: "Exo 4",
          valeur: "exo4",
          num: 4
        },
        {
          name: "Exo 5",
          valeur: "exo5",
          num: 5
        },
        {
          name: "Exo 6",
          valeur: "exo6",
          num: 6
        },
        {
          name: "Exo 7",
          valeur: "exo7",
          num: 7
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
    },
    leftOrRight() {
      if (event.target.num > bouton.num) {
      }
    }
  }
};
</script>

<style lang="sass">
@import "./assets/sass/main.sass"

// .position-absolute
//   position: absolute



</style>