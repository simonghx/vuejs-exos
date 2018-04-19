<template>
  <section id="exo7" class="panel my-4 bg-light">
    <h1 class="text-center">Todo List en VueJS</h1>
    <form class="input-part text-center my-2">
      <input type="text" class="mr-1" :class="{'border-danger' : error}" v-model="inputTask">
      <button class="btn btn-primary ml-1" @click.prevent="addTask">Add a task</button>
    </form>
    <div class="tags">
      <h3 class="d-inline mr-4">List Filter</h3>
      <button class="btn btn-success mx-1" value="all" @click.prevent="filter">All</button>
      <button class="btn btn-success mx-1" value="done" @click.prevent="filter">Done</button>
      <button class="btn btn-success mx-1" value="todo" @click.prevent="filter">To do</button>
    </div>
    <ul class="group-list my-4" :class="theFilter">
      <list-item v-for="(task, index) in listTasks" :key="index" :newTask="task" @delete-task="deleteTask(task)"></list-item>
    </ul>
  </section>
</template>

<script>
import listItem from "./List-item.vue";
export default {
  name: "exo7",
  props: [],
  components: {
    listItem
  },
  mounted() {},
  data() {
    return {
      listTasks: [],
      inputTask: "",
      error: false,
      theFilter: "all"
    };
  },
  methods: {
    addTask() {
      if (this.inputTask == "") {
        this.error = true;
        return;
      } else {
        this.listTasks.push({ text: this.inputTask, done: false });
        this.error = false;
      }
      this.inputTask = "";
    },
    deleteTask(task) {
      this.listTasks.splice(this.listTasks.indexOf(task), 1);
    },
    filter() {
      this.theFilter = event.target.value;
      console.log(event.target.value);
    }
  }
};
</script>

<style lang="sass">
.done
  .bg-success
    display: flex !important
  
  li
    display: none !important

.todo
  .bg-success
    display: none !important
</style>