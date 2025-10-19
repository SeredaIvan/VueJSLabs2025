<script setup>
import Task from "./Task.vue";
import { useTaskConsumer } from "../provider/useTaskConsumer";

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update"]);

const { removeTask, editTask } = useTaskConsumer();

function handleUpdate(task) {
  editTask(task.id, task);
  emit("update", task);
}
</script>

<template>
  <div class="task-list">
    <ul>
      <Task
        v-for="task in props.tasks"
        :key="task.id"
        :task="task"
        :isDelete="props.isDelete"
        :isEdit="props.isEdit"
        @update="handleUpdate"
      />
    </ul>
  </div>
</template>

<style scoped>
.task-list {
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
  padding: 0 10px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
