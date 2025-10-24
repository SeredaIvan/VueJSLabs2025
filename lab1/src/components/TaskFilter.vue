<script setup>
import { toRefs, reactive, watch, computed } from "vue";

const props = defineProps({
  filters: Object,
  sortOption: String,
});

const emit = defineEmits(["updateFilters", "updateSort"]);

const { filters: propsFilters } = toRefs(props);

const localFilters = reactive({
  title: propsFilters.value?.title ?? "",
  description: propsFilters.value?.description ?? "",
  status: propsFilters.value?.status ?? "",
  priority: propsFilters.value?.priority ?? "",
  dateFrom: propsFilters.value?.dateFrom ?? "",
  dateTo: propsFilters.value?.dateTo ?? "",
});

watch(
  () => propsFilters.value,
  (newVal) => {
    if (!newVal) return;
    localFilters.title = newVal.title ?? "";
    localFilters.description = newVal.description ?? "";
    localFilters.status = newVal.status ?? "";
    localFilters.priority = newVal.priority ?? "";
    localFilters.dateFrom = newVal.dateFrom ?? "";
    localFilters.dateTo = newVal.dateTo ?? "";
  },
  { immediate: true, deep: true }
);

watch(
  localFilters,
  (newVal) => {
    emit("updateFilters", { ...newVal });
  },
  { deep: true }
);

const sort = computed({
  get() {
    return props.sortOption ?? "createdAt_desc";
  },
  set(val) {
    emit("updateSort", val);
  },
});

function clearFilters() {
  Object.assign(localFilters, {
    title: "",
    description: "",
    status: "",
    priority: "",
    dateFrom: "",
    dateTo: "",
  });
}
</script>

<template>
  <div class="filters-block">
    <div class="filters">
      <input v-model="localFilters.title" placeholder="Назва" />
      <input v-model="localFilters.description" placeholder="Опис" />

      <select v-model="localFilters.status">
        <option value="">Статус</option>
        <option value="active">Активне</option>
        <option value="done">Завершено</option>
      </select>

      <select v-model="localFilters.priority">
        <option value="">Пріоритет</option>
        <option value="low">Низький</option>
        <option value="medium">Середній</option>
        <option value="high">Високий</option>
      </select>

      <input type="date" v-model="localFilters.dateFrom" />
      <input type="date" v-model="localFilters.dateTo" />

      <select v-model="sort">
        <option value="createdAt_desc">Дата ↓</option>
        <option value="createdAt_asc">Дата ↑</option>
        <option value="priority_desc">Пріоритет ↓</option>
        <option value="priority_asc">Пріоритет ↑</option>
      </select>

      <button @click="clearFilters">Очистити</button>
    </div>
  </div>
</template>

<style scoped>
.filters-block{
  margin: 20px 0 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.filters {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 60%;
}

.filters input,
.filters select {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #555;
  background: #2a2a2a;
  color: white;
  outline: none;
  transition: 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.filters input:focus,
.filters select:focus {
  border-color: #007bff;
  box-shadow: 0 0 6px rgba(0, 123, 255, 0.6);
}

button {
  padding: 8px 16px;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
}

button:hover {
  background: #005ce6;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
}

.filters select option {
  background: #333;
  color: white;
}
</style>
