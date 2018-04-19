<template>
  <section id="exo1" class="my-5 panel active">
    <h2 :class="{'text-primary': changeText(), 'bg-danger' : changeText() }" data-infor="more information">{{ changeText() }}</h2>

    <p>Les propriétés à retrouver dans la documentation:
      <ul>
        <li>innerText</li>
        <li>innerHTML</li>
        <li>querySelector()</li>
        <li>querySelectorAll()</li>
        <li>style</li>
        <li>classList</li>
      </ul>

      <br> changer le contenu du h2 par "le titre modifié"
      <br> changer la couleur du h2
      <br> ajouter une class background bootstrap au h2

    </p>
  </section>
</template>

<script>
export default {
  name: "exo1",
  props: [],
  mounted() {},
  data() {
    return {
      titre: "Le titre"
    };
  },
  methods: {
    changeText: function() {
      return (this.titre = "Le titre modifié");
    }
  }
};
</script>

<style lang="sass">

</style>

