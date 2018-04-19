<template>
  <section id="exo3" class="panel my-4">
    <h2>welcome
      <span>{{ nameInconnu }}</span>
    </h2>
    <p>écriver dans l'input ci-dessous le nom de la personne qui vous voulez accueillir
      <br> lorsque vous cliquez sur le bouton "go" le nom que vous avez ajouter dans l'input sera alors mis dans le span du
      h2 et l'input sera alors vidé de toute contenu. Attention, interdiction de toucher à l'html</p>
    <form action="">
      <input type="text">
      <button type="submit" @click.prevent="changeInput">go</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "exo3",
  props: [],
  mounted() {},
  data() {
    return {
      nameInconnu: "inconnu"
    };
  },
  methods: {
    changeInput() {
      let inputGo = document.querySelector("#exo3 input");
      this.nameInconnu = inputGo.value;
      inputGo.value = "";
    }
  }
};
</script>

<style lang="sass">

</style>