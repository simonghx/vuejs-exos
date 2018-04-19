<template>
  <li class="list-group-item d-flex" :class="{'bg-success' : newTask.done}">
    <div class="nameTask col-8" v-if="modifier == false">{{ newTask.text }}</div>
    <div class="nameInput col-8" v-if="modifier == true"><input type="text" v-model="newTask.text"><button class="btn btn-success" @click="modifier = !modifier;">Modifier</button></div>
    
    <div class="col-4 text-right">
      <button class="btn btn-light mr-2" @click="deleteTask"><i class="far fa-window-close"></i></button>
      <button class="btn btn-light mr-2" @click="newTask.done = !newTask.done;"><i class="fas fa-check"></i></button>
      <button class="btn btn-light mr-2" @click="modifier = true;"><i class="far fa-edit"></i></button>
    </div>
  </li>
</template>

<script>
export default {
  name: "list-item",
  props: ["newTask"],
  mounted() {},
  data() {
    return {
      modifier: false
    };
  },
  methods: {
    deleteTask(task) {
      this.$emit("delete-task", this.newTask);
    }
  }
};
</script>

<style lang="sass">
.line
  text-decoration: line-through
</style>
