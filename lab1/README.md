# ToDo App на Vue 3

## Короткий опис

Цей проєкт — ToDo-додаток, створений на Vue 3 з використанням Composition API.  
Дозволяє додавати, редагувати, видаляти завдання, а також фільтрувати та сортувати їх за пріоритетом і статусом.  
Використані ключові можливості Vue: `ref`, `reactive`, `computed`, `watch`, директиви `v-model`, `v-if`, `v-for`, `v-bind`, `v-on`.

---

## Кроки запуску

1. Клонувати репозиторій:

```bash
git clone <URL>
```

2. Перейти в папку проекту

```bash
cd lab1
```

3. Встановити залежності:

```bash
npm install
```

4. Запустити локальний сервер:

```bash
npm run dev
```

5. Відкрити у браузері:

```bash
http://localhost:5173
```
# Скріншоти
## Головна
![alt text](readme_images/image.png)
## Додавання таску
![alt text](readme_images/image2.png)
## Видалення таску
![alt text](readme_images/image3.png)
## Редагуваня таску 
![alt text](readme_images/image4.png)
## Фільтрування за title 
![alt text](readme_images/image5.png)
## Фільтрування за title та desc
![alt text](readme_images/image6.png)
## Фільтрування за активністю
![alt text](readme_images/image7.png)
## Фільтрування за пріорітетом та статусом
![alt text](readme_images/image8.png)
## Фільтрування за низьким пріорітетом
![alt text](readme_images/image9.png)
## Фільтрування за середнім пріорітетом
![alt text](readme_images/image10.png)
## Фільтрування за високим пріорітетом
![alt text](readme_images/image11.png)
## Фільтрування за середнім пріорітетом та статусом
![alt text](readme_images/image11_1.png)
## Фільтрування за датою від-до
![alt text](readme_images/image12.png)
## Фільтрування за датою від-до та сортування за спадаючою датою 
![alt text](readme_images/image13.png)
## Фільтрування за датою від-до та сортування за зростаючою датою 
![alt text](readme_images/image14.png)
## Фільтрування за датою від-до та сортування за спадаючим пріорітетом  
![alt text](readme_images/image15.png)
## Фільтрування за датою від-до та сортування за зростаючим пріорітетом  
![alt text](readme_images/image16.png)


# Опис застосування Vue 3 Composition API в ToDo App

## Використання `ref` та `reactive`

### `ref` - для примітивних значень та масивів

**Файл:** [`src/components/ToDo.vue`](src/components/ToDo.vue)

```javascript
const loading = ref(false);
const modalAdd = ref(false);
const isEdit = ref(false);
const isDelete = ref(false);
```

**Файл:** [`src/store/useTasks.js`](src/store/useTasks.js)

```javascript
const tasks = ref([]);
const filters = ref({
  title: "",
  description: "",
  status: "",
  priority: "",
  dateFrom: "",
  dateTo: "",
});
const sortOption = ref("createdAt_desc");
```

### `reactive` - для об'єктів

**Файл:** [`src/components/TaskFilter.vue`](src/components/TaskFilter.vue)

```javascript
const localFilters = reactive({
  title: propsFilters.value?.title ?? "",
  description: propsFilters.value?.description ?? "",
  status: propsFilters.value?.status ?? "",
  priority: propsFilters.value?.priority ?? "",
  dateFrom: propsFilters.value?.dateFrom ?? "",
  dateTo: propsFilters.value?.dateTo ?? "",
});
```

---

## Використання `computed`

### Обчислення відфільтрованих і відсортованих завдань

**Файл:** [`src/store/useTasks.js`](src/store/useTasks.js)

```javascript
const filteredAndSortedTasks = computed(() => {
  let result = [...tasks.value];
  if (filters.value.title)
    result = result.filter((t) =>
      t.title.toLowerCase().includes(filters.value.title.toLowerCase())
    );
  if (filters.value.status)
    result = result.filter((t) => t.status === filters.value.status);
  switch (sortOption.value) {
    case "createdAt_desc":
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      break;
  }
  return result;
});
```

### Підрахунок кількості завдань

**Файл:** [`src/store/useTasks.js`](src/store/useTasks.js)

```javascript
const total = computed(() => tasks.value.length);
const active = computed(
  () => tasks.value.filter((t) => t.status === "active").length
);
const completed = computed(
  () => tasks.value.filter((t) => t.status === "done").length
);
```

### Computed з getter/setter

**Файл:** [`src/components/TaskFilter.vue`](src/components/TaskFilter.vue)

```javascript
const sort = computed({
  get() {
    return props.sortOption ?? "createdAt_desc";
  },
  set(val) {
    emit("updateSort", val);
  },
});
```

---

## Використання `watch`

### Спостереження за props з синхронізацією локального стану

**Файл:** [`src/components/TaskFilter.vue`](src/components/TaskFilter.vue)

```javascript
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
```

### Спостереження за змінами з emit

**Файл:** [`src/components/TaskFilter.vue`](src/components/TaskFilter.vue)

```javascript
watch(
  localFilters,
  (newVal) => {
    emit("updateFilters", { ...newVal });
  },
  { deep: true }
);
```

### Спостереження за завданням для автозбереження

**Файл:** [`src/components/Task.vue`](src/components/Task.vue)

```javascript
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
```

---

## Директиви Vue

### `v-model` - двостороннє зв'язування

**Файл:** [`src/components/TaskFilter.vue`](src/components/TaskFilter.vue)

```vue
<input v-model="localFilters.title" placeholder="Назва" />
<select v-model="localFilters.status">
  <option value="">Статус</option>
  <option value="active">Активне</option>
  <option value="done">Завершено</option>
</select>
<select v-model="sort">
  <option value="createdAt_desc">Дата ↓</option>
  <option value="createdAt_asc">Дата ↑</option>
</select>
```

### v-if / v-else - умовний рендеринг

**Файл:** [`src/components/ToDo.vue`](src/components/ToDo.vue)

```vue
<Loader v-if="loading" />
<AddTask v-if="modalAdd" :toggleModalTask="toggleModalAddTask" />
```

**Файл:** [`src/components/Task.vue`](src/components/Task.vue)

```vue
<template v-if="editing">
  <input v-model="task.title" class="edit-input" />
</template>
<template v-else>{{ task.title }}</template>
```

### v-for - рендеринг списків

**Файл:** [`src/components/TaskList.vue`](src/components/TaskList.vue)

```javascript
<Task
v-for="task in props.tasks"
:key="task.id"
:task="task"
:isDelete="props.isDelete"
:isEdit="props.isEdit"
@update="handleUpdate"/>
```

### `v-html` - вставка HTML

**Файл:** [`src/components/Task.vue`](src/components/Task.vue)

```vue
<p class="task-desc" v-html="task.description.replace(/\n/g, '<br>')"></p>
```

### :class - динамічні класи

**Файл:** [`src/components/Task.vue`](src/components/Task.vue)

```javascript
<li
  class="task-item"
  :class="[{ done: task.status === 'done' }, task.priority]"
>
  <span class="task-status" :class="task.status">
```

### @click, @dblclick - обробники подій

**Файл:** [`src/components/Task.vue`](src/components/Task.vue)

```javascript
<li @dblclick="isEdit && enableEditing()">
  <span @click="toggleStatus">
  <button @click="handleDelete">🗑️</button>
</li>
```

---
