<script setup>
import { ref, onMounted } from "vue";
import NavButtons from "./NavButtons.vue";
import Loader from "./Loader.vue";
import TaskList from "./TaskList.vue";
import TaskFilter from "./TaskFilter.vue";
import AddTask from "./AddTask.vue";
import { useTaskProvider } from "../provider/useTaskProvider";

const { tasks, filters, sortOption, filteredAndSortedTasks, loadTasks } =
  useTaskProvider();

const loading = ref(false);
const modalAdd = ref(false);
const isEdit = ref(false);
const isDelete = ref(false);

function updateFilters(newFilters) {
  Object.assign(filters.value, newFilters);
}

function updateSort(newSort) {
  sortOption.value = newSort;
}

onMounted(async () => {
  loading.value = true;
  await loadTasks();
  loading.value = false;
});

function toggleModalAddTask() {
  modalAdd.value = !modalAdd.value;
}

function toggleIsDelete() {
  isDelete.value = !isDelete.value;
}

function toggleIsEdit() {
  isEdit.value = !isEdit.value;
}
</script>

<template>
  <div>
    <h1>ToDo App</h1>
    <NavButtons
      @defineAdd="toggleModalAddTask"
      @defineDelete="toggleIsDelete"
      @defineEdit="toggleIsEdit"
      :activeDelete="isDelete"
      :activeEdit="isEdit"
    />
    
    <TaskFilter
      :filters="filters"
      :sortOption="sortOption"
      @updateFilters="updateFilters"
      @updateSort="updateSort"
    />

    <Loader v-if="loading" />
    
    <TaskList :tasks="filteredAndSortedTasks" :isEdit="isEdit" :isDelete="isDelete" />
    
    <AddTask v-if="modalAdd" :toggleModalTask="toggleModalAddTask" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
