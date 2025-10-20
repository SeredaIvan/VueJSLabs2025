<script setup>
import { watch, toRefs } from "vue";

const props = defineProps({
  filters: Object,
  sortOption: String,
});

const emit = defineEmits(["updateFilters", "updateSort"]);

const { filters } = toRefs(props);

function clearFilters() {
  emit("updateFilters", {
    title: "",
    description: "",
    status: "",
    priority: "",
    dateFrom: "",
    dateTo: "",
  });
}

watch(filters, (newVal) => {
  emit("updateFilters", newVal);
}, { deep: true });
</script>

<template>
  <div class="filters">
    <input v-model="props.filters.title" placeholder="Назва" />
    <input v-model="props.filters.description" placeholder="Опис" />
    <select v-model="props.filters.status">
      <option value="">Статус</option>
      <option value="active">Активне</option>
      <option value="done">Завершено</option>
    </select>
    <select v-model="props.filters.priority">
      <option value="">Пріоритет</option>
      <option value="low">Низький</option>
      <option value="medium">Середній</option>
      <option value="high">Високий</option>
    </select>
    <input type="date" v-model="props.filters.dateFrom" />
    <input type="date" v-model="props.filters.dateTo" />

    <select v-model="props.sortOption" @change="emit('updateSort', props.sortOption)">
      <option value="createdAt_desc">Дата ↓</option>
      <option value="createdAt_asc">Дата ↑</option>
      <option value="priority_desc">Пріоритет ↓</option>
      <option value="priority_asc">Пріоритет ↑</option>
    </select>

    <button @click="clearFilters">Очистити</button>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}
.filters input,
.filters select {
  padding: 5px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  padding: 5px 10px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
</style>
