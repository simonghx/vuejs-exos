<template>
  <section id="exo5" class="panel my-4">
    <h2>Générer des éléments du DOM</h2>
    <p>Cliquer sur le bouton ci-dessous pour générer des oeufs.</p>
    <button class="btn btn-success" @click="addEgg">Ajouter un oeuf</button>
    <div class="panier">
      <img class="eggImg" src="../assets/img/egg.png" v-for="(element,index) in oeufs" :key="index"/>
      
    </div>
  </section>
</template>

<script>
export default {
  name: "exo5",
  components: {},
  mounted() {},
  data() {
    return {
      oeufs: [],
      counter: 0
    };
  },
  methods: {
    addEgg() {
      this.oeufs.push(this.counter);
      this.counter++;
    }
  }
};
</script>

<style lang="sass">
.eggImg
  width: 40px
</style>