export const tasks = [
  { description: 'Coding', completed: false, index: 2 },
  { description: 'Reading', completed: true, index: 0 },
  { description: 'Workout', completed: false, index: 1 },
];

export function renderTasks() {
  const todoList = document.getElementById('todo-list');
  if (!todoList) return;

  todoList.innerHTML = '';

  const sortedTasks = [...tasks].sort((a, b) => a.index - b.index);

  sortedTasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.checked || task.completed;
    checkbox.className = 'todo-checkbox';

    const textSpan = document.createElement('span');
    textSpan.textContent = task.description;
    textSpan.className = 'todo-text';

    const optionsBtn = document.createElement('button');
    optionsBtn.innerHTML = '&#8942;';
    optionsBtn.className = 'options-btn';

    if (task.completed) {
      li.classList.add('completed');
    }

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(optionsBtn);
    todoList.appendChild(li);
  });
}
