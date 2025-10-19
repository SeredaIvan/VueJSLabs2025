import { ref } from "vue";
import cuid from "cuid";

export function useTasks() {
  const tasks = ref([]);

  function addTask(title, description = "", status = "active", priority = "low") {
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

  loadTasks();

  return { tasks, addTask, removeTask, editTask, toggleTask, loadTasks };
}
