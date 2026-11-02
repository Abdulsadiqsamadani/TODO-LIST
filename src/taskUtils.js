export const tasks = JSON.parse(localStorage.getItem('todo-tasks')) || [];

export function saveTasks() {
  localStorage.setItem('todo-tasks', JSON.stringify(tasks));
}

function updateIndexes() {
  tasks.forEach((task, idx) => {
    task.index = idx + 1;
  });
}

export function addTask(description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
  saveTasks();
}

export function deleteTask(index) {
  const targetIndex = tasks.findIndex((task) => task.index === index);

  if (targetIndex !== -1) {
    tasks.splice(targetIndex, 1);
    updateIndexes();
    saveTasks();
  }
}

export function editTask(index, newDescription) {
  const task = tasks.find((t) => t.index === index);
  if (task) {
    task.description = newDescription;
    saveTasks();
  }
}

export function renderTasks() {
  const todoList = document.getElementById('todo-list');
  if (!todoList) return;

  todoList.innerHTML = '';

  const sortedTasks = [...tasks].sort((a, b) => a.index - b.index);

  sortedTasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.index = task.index;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.className = 'todo-checkbox';

    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = task.description;
    textInput.className = 'todo-text-input';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🚮';
    deleteBtn.className = 'delete-btn';

    if (task.completed) {
      li.classList.add('completed');
    }

    li.appendChild(checkbox);
    li.appendChild(textInput);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}
