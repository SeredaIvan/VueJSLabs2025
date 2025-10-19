<script setup>
import { ref, onMounted } from "vue";
import NavButtons from "./NavButtons.vue";
import Loader from "./Loader.vue";
import TaskList from "./TaskList.vue";
import AddTask from "./AddTask.vue";
import { useTaskProvider } from "../provider/useTaskProvider";

const { tasks, loadTasks } = useTaskProvider();

const loading = ref(false);
const modalAdd = ref(false);
const isEdit = ref(false);
const isDelete = ref(false);

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

    <Loader v-if="loading" />
    <TaskList :tasks="tasks" :isEdit="isEdit" :isDelete="isDelete" />
    <AddTask v-if="modalAdd" :toggleModalTask="toggleModalAddTask" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
