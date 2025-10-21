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
