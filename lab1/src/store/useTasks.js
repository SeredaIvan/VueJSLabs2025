import { ref, computed } from "vue";
import cuid from "cuid";

export function useTasks() {
  const tasks = ref([]);

  const filters = ref({
    title: "",
    description: "",
    status: "",
    priority: "",
    dateFrom: "",
    dateTo: "",
  });

  const sortOption = ref("createdAt_desc"); // createdAt_asc | createdAt_desc | priority_asc | priority_desc

  const filteredAndSortedTasks = computed(() => {
    let result = [...tasks.value];

    if (filters.value.title)
      result = result.filter((t) =>
        t.title.toLowerCase().includes(filters.value.title.toLowerCase())
      );

    if (filters.value.description)
      result = result.filter((t) =>
        t.description.toLowerCase().includes(filters.value.description.toLowerCase())
      );

    if (filters.value.status)
      result = result.filter((t) => t.status === filters.value.status);

    if (filters.value.priority)
      result = result.filter((t) => t.priority === filters.value.priority);

    if (filters.value.dateFrom)
      result = result.filter(
        (t) => new Date(t.createdAt) >= new Date(filters.value.dateFrom)
      );

    if (filters.value.dateTo)
      result = result.filter(
        (t) => new Date(t.createdAt) <= new Date(filters.value.dateTo)
      );

    switch (sortOption.value) {
      case "createdAt_asc":
        result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case "createdAt_desc":
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "priority_asc":
        result.sort((a, b) => priorityValue(a.priority) - priorityValue(b.priority));
        break;
      case "priority_desc":
        result.sort((a, b) => priorityValue(b.priority) - priorityValue(a.priority));
        break;
    }

    return result;
  });

  function priorityValue(priority) {
    const map = { low: 1, medium: 2, high: 3 };
    return map[priority] || 0;
  }

  function addTask(
    title,
    description = "",
    status = "active",
    priority = "low"
  ) {
    const id = cuid();
    const task = {
      id,
      title,
      description,
      status,
      createdAt: new Date(),
      priority,
    };
    tasks.value.push(task);
    saveTasks();
    return { message: "task saved" };
  }

  function removeTask(id) {
    tasks.value = tasks.value.filter((t) => t.id !== id);
    saveTasks();
    return { message: "task removed" };
  }

  function editTask(id, data) {
    const index = tasks.value.findIndex((t) => t.id === id);
    if (index !== -1) {
      tasks.value[index] = { ...tasks.value[index], ...data };
      saveTasks();
    }
  }

  function toggleTask(id) {
    const task = tasks.value.find((t) => t.id === id);
    if (task) {
      task.status = task.status === "active" ? "done" : "active";
      saveTasks();
    }
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  }

  async function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      tasks.value = JSON.parse(saved);
    }
  }

  const total = computed(() => tasks.value.length);

  const active = computed(() =>
    tasks.value.filter((t) => t.status === "active").length
  );

  const completed = computed(() =>
    tasks.value.filter((t) => t.status === "done").length
  );

  loadTasks();

  return {
    tasks,
    filters,
    sortOption,
    filteredAndSortedTasks,
    addTask,
    removeTask,
    editTask,
    toggleTask,
    loadTasks,
    total,
    active,
    completed,
  };
}
