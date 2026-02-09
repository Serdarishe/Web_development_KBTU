const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

document.addEventListener('DOMContentLoaded', loadTasks);

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const task = { text: taskText, done: false };

  addTaskToUI(task);
  saveTaskToLocalStorage(task);

  taskInput.value = ''; 
});

taskList.addEventListener('click', (e) => {
  const taskItem = e.target.closest('li');

  if (e.target.tagName === 'INPUT' && taskItem) {

    toggleTaskStatus(taskItem);
    updateTaskStatusInLocalStorage(taskItem);
  } else if (e.target.classList.contains('delete')) {
  
    taskItem.remove();
    deleteTaskFromLocalStorage(taskItem);
  }
});

function addTaskToUI(task) {
  const li = document.createElement('li');
  li.classList.toggle('done', task.done);
  li.innerHTML = `
    <input type="checkbox" ${task.done ? 'checked' : ''}>
    <span>${task.text}</span>
    <button class="delete">Delete</button>
  `;
  taskList.appendChild(li);
}


function loadTasks() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(addTaskToUI);
}


function saveTaskToLocalStorage(task) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function toggleTaskStatus(taskItem) {
  taskItem.classList.toggle('done');
  const taskText = taskItem.querySelector('span').textContent;
  const tasks = getTasksFromLocalStorage();
  const task = tasks.find(t => t.text === taskText);
  if (task) task.done = !task.done;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskStatusInLocalStorage(taskItem) {
  const taskText = taskItem.querySelector('span').textContent;
  const tasks = getTasksFromLocalStorage();
  const task = tasks.find(t => t.text === taskText);
  if (task) task.done = !task.done;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteTaskFromLocalStorage(taskItem) {
  const taskText = taskItem.querySelector('span').textContent;
  const tasks = getTasksFromLocalStorage();
  const filteredTasks = tasks.filter(t => t.text !== taskText);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}
