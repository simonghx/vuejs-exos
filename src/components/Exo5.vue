<template>
  <section id="exo5" class="panel my-4">
    <h2>Générer des éléments du DOM</h2>
    <p>Cliquer sur le bouton ci-dessous pour générer des oeufs.</p>
    <button class="btn btn-success" @click="addEgg">Ajouter un oeuf</button>
    <div class="panier">
      <oeuf v-for="(oeuf,index) in oeufs" :key="index"></oeuf>
      
    </div>
  </section>
</template>

<script>
import oeuf from "./Oeuf.vue";
export default {
  name: "exo5",
  components: {
    oeuf
  },
  mounted() {},
  data() {
    return {
      oeufs: []
    };
  },
  methods: {
    addEgg() {
      this.oeufs.push({ oeuf });
    }
  }
};
</script>

<style lang="sass">

</style>