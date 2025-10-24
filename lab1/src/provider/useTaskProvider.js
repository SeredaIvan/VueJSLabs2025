import { provide } from "vue";
import { useTasks } from "../store/useTasks"; 

export function useTaskProvider() {
  const { tasks, filters, sortOption, filteredAndSortedTasks, addTask, removeTask, editTask, toggleTask, loadTasks,total,active,completed } = useTasks();

  provide("tasks", tasks);
  provide("addTask", addTask);
  provide("removeTask", removeTask);
  provide("editTask", editTask);
  provide("toggleTask", toggleTask);
  provide("loadTasks", loadTasks);
  provide("total", total);
  provide("active", active);
  provide("completed", completed);

  return { tasks, filters, sortOption, filteredAndSortedTasks, addTask, removeTask, editTask, toggleTask, loadTasks,total, active, completed };
}
