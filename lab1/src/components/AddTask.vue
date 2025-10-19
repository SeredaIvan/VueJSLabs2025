<script setup>
import { ref } from "vue";
import { useTaskConsumer } from "../provider/useTaskConsumer";

const { addTask } = useTaskConsumer();

const props = defineProps({
  toggleModalTask: Function,
});

const title = ref("");
const description = ref("");
const priority = ref("low");

function handleSubmit() {
  if (!title.value.trim()) return alert("Введіть назву завдання!");

  addTask(title.value, description.value, "active", priority.value);

  title.value = "";
  description.value = "";
  priority.value = "low";

  props.toggleModalTask();
}

function handleClose() {
  props.toggleModalTask();
}
</script>



<template>
  <div class="modal-backdrop" @click.self="handleClose">
    <div class="modal">
      <div class="modal-header">
        <h2>Додати завдання</h2>
        <button class="close-btn" @click="handleClose">×</button>
      </div>

      <form @submit.prevent="handleSubmit" class="modal-body">
        <label>
          Назва:
          <input v-model="title" type="text" placeholder="Назва задачі" />
        </label>

        <label>
          Опис:
          <textarea
            v-model="description"
            placeholder="Деталі завдання"
          ></textarea>
        </label>

        <label>
          Пріоритет:
          <select v-model="priority">
            <option value="low">Низький</option>
            <option value="medium">Середній</option>
            <option value="high">Високий</option>
          </select>
        </label>

        <button type="submit" class="submit-btn">Створити</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  width: 400px;
  background: #242424;
  border: 1px solid #ccc;
  box-shadow: 0 0 33px 12px rgba(255, 255, 255, 0.3);
  padding: 20px;
  border-radius: 20px;
  color: white;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
}

input,
textarea,
select {
  width: 100%;
  padding: 8px;
  background: #333;
  color: white;
  border: 1px solid #555;
  border-radius: 8px;
  outline: none;
}

.submit-btn {
  background: #007bff;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.2s;
}

.submit-btn:hover {
  background: #005ce6;
}
</style>
