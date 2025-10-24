import { inject } from "vue";

export function useTaskConsumer() {
  const tasks = inject("tasks");
  const addTask = inject("addTask");
  const removeTask = inject("removeTask");
  const editTask = inject("editTask");
  const toggleTask = inject("toggleTask");
  const loadTasks = inject("loadTasks");
  const total  =inject("total");
  const active  =inject("active" );
  const completed  =inject("completed" );

  if (!tasks) {
    throw new Error("useTaskConsumer must be used within useTaskProvider()");
  }

  return { tasks, addTask, removeTask, editTask, toggleTask, loadTasks , total ,active, completed};
}
