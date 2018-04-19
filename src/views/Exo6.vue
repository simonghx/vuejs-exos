<template>
  <section id="exo6" class="panel my-4 bg-light">
    <h2>Création calculatrice</h2>
    <h3>Niveau 1</h3>
    <input type="text" v-model.number="nb1"> +
    <input type="text" v-model.number="nb2">
    <button class="calc1" @click="nbtotal = nb1 + nb2">=</button>
    <span class="result1">{{ nbtotal }}</span>

    <h3>Niveau 2</h3>
    <div class="calculette bg-dark rounded">
      <div class="container text-center py-4 text-white">
        <span class="col-12">{{spanPlace}}{{op}}</span>
        <input type="text" class="col-12" v-model="numberPlace" :class="{'border-danger' : error}">
      </div>
      <div class="pb-4 container">
        <div class="row my-1 text-center justify-content-around">

          <button class="btn btn-light col-sm-2" value="1" @click="writeNumber">1</button>


          <button class="btn btn-light col-sm-2" value="2" @click="writeNumber">2</button>

          <button class="btn btn-light col-sm-2" value="3" @click="writeNumber">3</button>

          <button class="btn btn-primary col-sm-2" value="+" @click="operateur">+</button>

        </div>
        <div class="row my-1 text-center justify-content-around">

          <button class="btn btn-light col-sm-2" value="4" @click="writeNumber">4</button>


          <button class="btn btn-light col-sm-2" value="5" @click="writeNumber">5</button>

          <button class="btn btn-light col-sm-2" value="6" @click="writeNumber">6</button>

          <button class="btn btn-primary col-sm-2" value="-" @click="operateur">-</button>

        </div>
        <div class="row my-1 text-center justify-content-around">

          <button class="btn btn-light col-sm-2" value="7" @click="writeNumber">7</button>

          <button class="btn btn-light col-sm-2" value="8" @click="writeNumber">8</button>

          <button class="btn btn-light col-sm-2" value="9" @click="writeNumber">9</button>

          <button class="btn btn-primary col-sm-2" value="*" @click="operateur">*</button>

        </div>
        <div class="row my-1 text-center justify-content-around">

          <button class="btn btn-danger col-sm-2" @click="numberPlace = ''; spanPlace = ''; op = ''">C</button>

          <button class="btn btn-light col-sm-2" value="0" @click="writeNumber">0</button>


          <button class="btn btn-light col-sm-2" value="." @click="writeNumber">.</button>


          <button class="btn btn-primary col-sm-2" value="/" @click="operateur">/</button>

        </div>
        <div class="row my-1 container justify-content-around mx-auto">

          <button class="btn btn-success col-sm-8" @click="calculer">=</button>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "exo6",
  props: [],
  mounted() {},
  data() {
    return {
      nb1: "",
      nb2: "",
      nbtotal: "",
      numberPlace: "",
      spanPlace: "",
      op: "",
      error: false
    };
  },
  methods: {
    writeNumber(event) {
      this.numberPlace += event.target.value;
    },
    operateur(event) {
      if (this.spanPlace == "" && this.numberPlace == "") {
        if (event.target.value == "*" || event.target.value == "/") {
          this.spanPlace = "You need to choose a number";
          this.numberPlace = "";
          this.error = true;
        } else {
          this.numberPlace = event.target.value;
        }
      } else if (this.op.match(/[\+\/\-\*]/)) {
        this.op = this.op.replace(/[\+\/\-\*]/, event.target.value);
      } else if (this.spanPlace != "" && this.op == "") {
        this.op += event.target.value;
      } else {
        this.op = event.target.value;
        this.spanPlace = this.numberPlace;
        this.numberPlace = "";
        this.error = false;
      }
    },
    calculer() {
      switch (this.op) {
        case "+":
          this.spanPlace =
            parseFloat(this.spanPlace) + parseFloat(this.numberPlace);
          this.op = "";
          break;
        case "-":
          this.spanPlace -= this.numberPlace;
          this.op = "";
          break;
        case "*":
          this.spanPlace *= this.numberPlace;
          this.op = "";
          break;
        case "/":
          this.spanPlace /= this.numberPlace;
          this.op = "";
          break;
        default:
          console.log("Default");
      }
      this.numberPlace = "";
    }
  }
};
</script>

<style lang="sass">
.calculette
  width: 400px
  height: auto

.container-hard
  margin-left: 100px
  margin-right: 100px
</style>