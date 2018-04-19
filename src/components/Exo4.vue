<template>
  <section id="exo4" class="panel my-4">
    <div class="row justify-content-between">
      <div id="parent1" class="col-5 bg-primary">
        <divtomove v-if="error"></divtomove>
        
      </div>
      <div id="parent2" class="col-5 bg-primary">
        <divtomove v-if="!error"></divtomove>
      </div>

    </div>
    <div class="text-center divBouton">
      <a href="" role="button" class="btn btn-danger my-4" @click.prevent="moveDiv">Changer de carré</a>
      <p>{{ messageClick }}</p>

    </div>

  </section>
</template>

<script>
import divtomove from "./Divtomove.vue";
export default {
  name: "exo4",
  components: {
    divtomove
  },
  props: [],
  mounted() {},
  data() {
    return {
      messageClick: "Tu n'as jamais cliqué.",
      error: true,
      nbClick: 1
    };
  },
  methods: {
    moveDiv() {
      this.error = !this.error;
      this.messageClick = "Tu as cliqué " + this.nbClick + " de fois.";
      this.nbClick++;
    }
  }
};
</script>

<style lang="sass">
.col-5
  height: 300px
  width: 300px

</style>