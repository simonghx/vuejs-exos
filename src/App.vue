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
      <h1 class="my-5">{{ titre }}</h1>
      <ul class="row text-center mx-auto list-unstyled">
        <li class="col"><router-link class="btn btn-danger"  to="/exo1" @mouseover="changeTitle">Exo1
        </router-link></li>
        <li class="col"><router-link class="btn btn-danger"  to="/exo2" @mouseover="changeTitle">Exo2
        </router-link></li>
        <li class="col"><router-link class="btn btn-danger"  to="/exo3" @mouseover="changeTitle">Exo3
        </router-link></li>
        <li class="col"><router-link class="btn btn-danger"  to="/exo4" @mouseover="changeTitle">Exo4
        </router-link></li>
        <li class="col"><router-link class="btn btn-danger"  to="/exo5" @mouseover="changeTitle">Exo5
        </router-link></li>
        <li class="col"><router-link class="btn btn-danger"  to="/exo6" @mouseover="changeTitle">Exo6
        </router-link></li>
        <li class="col"><router-link class="btn btn-danger"  to="/exo7" @mouseover="changeTitle">Exo7
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
      titre: "DOM Javascript - VueJS"
    };
  },
  methods: {
    changeTitle() {
      this.titre = event.target.textContent;
    }
  }
};
</script>

<style lang="sass">
@import "./assets/sass/main.sass"



</style>