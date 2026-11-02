import {
  addTask, deleteTask, editTask, renderTasks,
} from './taskUtils.js';

export default function initAppListeners() {
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  if (!todoInput || !todoList) return;

  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && todoInput.value.trim() !== '') {
      addTask(todoInput.value.trim());
      todoInput.value = '';
      renderTasks();
    }
  });

  todoList.addEventListener('click', (e) => {
    const li = e.target.closest('.todo-item');
    if (!li) return;

    const taskIndex = parseInt(li.dataset.index, 10);

    if (e.target.classList.contains('delete-btn')) {
      deleteTask(taskIndex);
      renderTasks();
    }
  });

  todoList.addEventListener('change', (e) => {
    const li = e.target.closest('.todo-item');
    if (!li) return;

    const taskIndex = parseInt(li.dataset.index, 10);

    if (e.target.classList.contains('todo-text-input')) {
      editTask(taskIndex, e.target.value.trim());
      renderTasks();
    }
  });
}
