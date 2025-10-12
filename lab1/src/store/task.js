import { reactive, provide } from "vue";
import cuid from "cuid";

function useTasks() {
  const tasks = reactive(new Map());

  function addTask(
    title,
    description = "",
    status = "active",
    priority = "low"
  ) {
    const id = cuid();
    const task = reactive({
      id,
      title,
      description,
      status,
      createdAt: new Date(),
      priority,
    });
    tasks.set(id, task);
    saveTasks();
    return { message: "task saved" };
  }

  function removeTask(id) {
    tasks.delete(id);
    return { message: "task removed" };
  }

  function editTask(id, data) {
    if (tasks.has(id)) {
      Object.assign(tasks.get(id), data);
    }
  }

  function toggleTask(id) {
    if (tasks.has(id)) {
      const task = tasks.get(id);
      task.status = task.status === "active" ? "done" : "active";
    }
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(Array.from(tasks.values())));
    return { message: "tasksaved" };
  }

  function loadTasks() {
    return new Promise((resolve) => {
      const saved = localStorage.getItem("tasks");
      if (saved) {
        const arr = JSON.parse(saved);
        arr.forEach((t) => tasks.set(t.id, reactive(t)));
      }
      resolve(tasks);
    });
  }

  provide("tasks", tasks);
  provide("addTask", addTask);
  provide("removeTask", removeTask);
  provide("editTask", editTask);
  provide("toggleTask", toggleTask);
  provide("loadTasks", loadTasks);

  loadTasks();

  return { tasks, addTask, removeTask, editTask, toggleTask, loadTasks };
}

export default useTasks;
