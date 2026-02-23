const taskForm   = document.getElementById('task-form');
const taskInput  = document.getElementById('task-input');
const taskList   = document.getElementById('task-list');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  applyFilter(currentFilter);
  updateCounter();
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text === '') return;

  const task = { text, done: false };
  addTaskToUI(task);
  saveTaskToLocalStorage(task);

  taskInput.value = '';
  applyFilter(currentFilter);
  updateCounter();
});


taskList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;

  if (e.target.classList.contains('delete-btn')) {
    deleteTaskFromLocalStorage(li);
    li.remove();
    updateCounter();
    return;
  }

  if (e.target.type === 'checkbox') {
    const isChecked = e.target.checked;
    li.classList.toggle('is-completed', isChecked);
    li.querySelector('.todo-text').classList.toggle('is-completed', isChecked);
    updateTaskInLocalStorage(li);
    applyFilter(currentFilter);
  }
});


filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    applyFilter(currentFilter);
    
    updateCounter();
  });
});


function applyFilter(filter) {
  const items = taskList.querySelectorAll('li');
  items.forEach(item => {
    const isCompleted = item.classList.contains('is-completed');
    let shouldShow = false;
    if (filter === 'all')       shouldShow = true;
    if (filter === 'active')    shouldShow = !isCompleted;
    if (filter === 'completed') shouldShow = isCompleted;
    item.classList.toggle('is-hidden', !shouldShow);
  });
}


function createTaskElement(task) {
  const li = document.createElement('li');
  if (task.done) li.classList.add('is-completed');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.done;

  const span = document.createElement('span');
  span.classList.add('todo-text');
  if (task.done) span.classList.add('is-completed');
  span.textContent = task.text;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = '✕';

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}


function addTaskToUI(task) {
  taskList.appendChild(createTaskElement(task));
}

function loadTasks() {
  getTasksFromLocalStorage().forEach(addTaskToUI);
}

function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTaskToLocalStorage(task) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskInLocalStorage(li) {
  const text = li.querySelector('.todo-text').textContent;
  const done = li.classList.contains('is-completed');
  const tasks = getTasksFromLocalStorage();
  const task = tasks.find(t => t.text === text);
  if (task) task.done = done;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskFromLocalStorage(li) {
  const text = li.querySelector('.todo-text').textContent;
  const tasks = getTasksFromLocalStorage().filter(t => t.text !== text);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateCounter() {
  const total = taskList.querySelectorAll('li').length;
  document.getElementById('task-counter').textContent = `${total} task${total !== 1 ? 's' : ''} left`;
}
