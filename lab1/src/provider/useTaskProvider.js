import { provide } from "vue";
import { useTasks } from "../store/useTasks";

export function useTaskProvider() {
  const { tasks, addTask, removeTask, editTask, toggleTask, loadTasks } = useTasks();

  provide("tasks", tasks);
  provide("addTask", addTask);
  provide("removeTask", removeTask);
  provide("editTask", editTask);
  provide("toggleTask", toggleTask);
  provide("loadTasks", loadTasks);

  return { tasks, addTask, removeTask, editTask, toggleTask, loadTasks };
}
