<script setup>
import { ref, onMounted } from "vue";
import NavButtons from "./NavButtons.vue";
import Loader from "./Loader.vue";
import useTasks from "../store/task";
import TaskList from "./TaskList.vue";

const { loadTasks } = useTasks();
const loading = ref(false);

onMounted(async () => {       
  loading.value = true;
  const {tasks}= await loadTasks();
  loading.value = false;
});

</script>

<template>
  <div>
    <h1>ToDo App</h1>
    <NavButtons />
    <Loader v-if="loading" />
    <TaskList :tasks="tasks" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
