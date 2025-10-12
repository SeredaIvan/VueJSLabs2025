<script setup>
import { ref, onMounted } from "vue";
import NavButtons from "./NavButtons.vue";
import Loader from "./Loader.vue";
import useTasks from "../store/task";

const { loadTasks } = useTasks();
const loading = ref(false);

onMounted(async () => {       
  loading.value = true;
  await loadTasks();
  loading.value = false;
});
</script>

<template>
  <div>
    <h1>ToDo App</h1>
    <NavButtons />
    <Loader v-if="loading" />
    
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
