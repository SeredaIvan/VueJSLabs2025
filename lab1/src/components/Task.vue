<script setup>
import { ref, watch } from "vue";
import { useTaskConsumer } from "../provider/useTaskConsumer";

const props = defineProps({
  task: Object,
  isDelete: Boolean,
  isEdit: Boolean,
});

const emit = defineEmits(["update"]);

const { removeTask, editTask } = useTaskConsumer();
const editing = ref(false);

function handleDelete() {
  if (confirm("Ви впевнені, що хочете видалити це завдання?")) {
    removeTask(props.task.id);
  }
}

function enableEditing() {
  editing.value = true;
}

function disableEditing() {
  editing.value = false;
}

watch(
  () => props.task,
  (newTask) => {
    if (editing.value) {
      editTask(newTask.id, newTask);
      emit("update", newTask);
    }
  },
  { deep: true }
);
</script>

<template>
  <li
    class="task-item"
    :class="[{ done: task.status === 'done' }, task.priority]"
    @dblclick="isEdit && enableEditing()"
  >
    <div class="task-header">
      <h3 class="task-title">
        <template v-if="editing">
          <input v-model="task.title" />
        </template>
        <template v-else>{{ task.title }}</template>
      </h3>

      <div class="task-actions">
        <span class="task-status" :class="task.status">
          {{ task.status === "done" ? "✅ Завершено" : "🕓 Активне" }}
        </span>

        <button v-if="isEdit" class="edit-btn" @click="enableEditing">
          ✏️
        </button>

        <button v-if="isDelete" class="delete-btn" @click="handleDelete">
          🗑️
        </button>
      </div>
    </div>

    <p class="task-desc">
      <template v-if="editing">
        <textarea v-model="task.description" />
      </template>
      <template v-else>{{ task.description }}</template>
    </p>

    <div class="task-footer">
      <span class="task-id">#{{ task.id.slice(0, 6) }}</span>
      <span class="task-date">
        {{ new Date(task.createdAt).toLocaleString("uk-UA") }}
      </span>

      <template v-if="editing">
        <select v-model="task.priority" class="task-priority">
          <option value="low">Низький</option>
          <option value="medium">Середній</option>
          <option value="high">Високий</option>
        </select>

        <select v-model="task.status" class="task-status-select">
          <option value="active">Активне</option>
          <option value="done">Завершено</option>
        </select>

        <button class="save-btn" @click="disableEditing">💾</button>
      </template>

      <template v-else>
        <span class="task-priority" :class="task.priority">
          {{
            task.priority === "low"
              ? "Низький"
              : task.priority === "medium"
              ? "Середній"
              : "Високий"
          }}
        </span>
      </template>
    </div>
  </li>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.task-item {
  background: #1e1e1e;
  border: 1px solid #333;
  border-left: 6px solid #007bff;
  padding: 15px 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  transition: all 0.25s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  position: relative;
}
.task-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}
.task-item.done {
  opacity: 0.6;
  text-decoration: line-through;
  border-left-color: #4caf50;
}
.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.task-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #fff;
}
.task-status {
  font-size: 0.9rem;
  padding: 3px 8px;
  border-radius: 8px;
  text-transform: uppercase;
}
.task-status.active {
  background: #007bff22;
  color: #4aa3ff;
}
.task-status.done {
  background: #4caf5022;
  color: #4caf50;
}
.edit-btn,
.delete-btn,
.save-btn {
  background: #333;
  border: none;
  color: white;
  padding: 5px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}
.edit-btn:hover {
  background: #3b82f6;
}
.save-btn {
  background: #4caf50;
}
.save-btn:hover {
  background: #45a049;
}
.delete-btn:hover {
  background: #f44336;
}
input,
textarea,
select {
  background: #2a2a2a;
  color: white;
  border: 1px solid #555;
  border-radius: 6px;
  padding: 4px 6px;
  width: 100%;
}
.task-desc {
  color: #ccc;
  margin: 8px 0 12px 0;
  font-size: 0.95rem;
  white-space: pre-line;
}
.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
  font-size: 0.85rem;
  flex-wrap: wrap;
  gap: 8px;
}
.task-id {
  color: #666;
  font-family: monospace;
}
.task-date {
  font-style: italic;
}
.task-priority {
  padding: 4px 10px;
  border-radius: 8px;
  font-weight: 500;
  text-transform: capitalize;
}
.task-priority.low {
  background: #3a3a3a;
  color: #aaa;
  border: 1px solid #555;
}
.task-priority.medium {
  background: #ffb74d33;
  color: #ffb74d;
  border: 1px solid #ffb74d;
}
.task-priority.high {
  background: #f4433633;
  color: #f44336;
  border: 1px solid #f44336;
}
.task-item.low {
  border-left-color: #999;
}
.task-item.medium {
  border-left-color: #ffb74d;
}
.task-item.high {
  border-left-color: #f44336;
}
</style>
