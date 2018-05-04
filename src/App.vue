<template>
  <div id="app">
    <header class="text-center container">
      <h1 class="my-5">{{ titre }}</h1>
      <ul class="row text-center mx-auto list-unstyled">
        <li class="col" @mouseover="changeTitle" @mouseout="titleBase" v-for="(bouton,index) in boutons" :key="index"><router-link class="btn btn-danger"  :to="bouton.valeur" @click.native="leftOrRight">{{ bouton.name }}</router-link></li>
    
      </ul>
    </header>

    <section id="panel-container" class="w-100 container">
    
      <transition :enter-active-class="animEnter" :leave-active-class="animLeave" mode="out-in">
        <router-view class=""/>
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
      animEnter: "animated slideInLeft",
      animLeave: "animated slideOutRight",
      calcul: null,
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
      this.calcul = this.$route.path.slice(-1) - this.titre.slice(-1);
      this.titleChanged = true;
    },
    titleBase() {
      this.titre = "DOM Javascript - VueJS";
      this.titleChanged = false;
    },
    leftOrRight(event) {
      if (this.calcul > 0) {
        this.animEnter = "animated slideInLeft";
        this.animLeave = "animated slideOutRight";
        return;
      } else {
        this.animEnter = "animated slideInRight";
        this.animLeave = "animated slideOutLeft";
        return;
      }
    }
  }
};
</script>

<style lang="sass">
@import "./assets/sass/main.sass"

// .position-absolute
//   position: absolute
#panel-container
  overflow-x: hidden

@keyframes slideOutRight 
        0% 
            transform: translate3d(0, 0, 0)
            visibility: visible
        
        100% 
            transform: translate3d(105%, 0, 0)
        
@keyframes slideOutLeft 
        0% 
            transform: translate3d(0, 0, 0)
            visibility: visible
        
        100% 
            transform: translate3d(-100%, 0, 0)


</style>