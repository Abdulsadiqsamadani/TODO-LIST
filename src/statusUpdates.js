import {
  tasks, saveTasks, updateIndexes,
} from './taskUtils.js';

export function toggleTaskStatus(index, isCompleted) {
  const task = tasks.find((t) => t.index === index);
  if (task) {
    task.completed = isCompleted;
    saveTasks();
  }
}

export function clearCompletedTasks() {
  const activeTasks = tasks.filter((task) => !task.completed);
  tasks.splice(0, tasks.length, ...activeTasks);
  updateIndexes();
  saveTasks();
}
