const inputTask = document.querySelector('#newTask');
const button = document.querySelector('#addButton');
const addList = document.querySelector('#taskList');

button.addEventListener('click', () => {
  const taskText = inputTask.value;

  if(taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    addList.appendChild(li);
    inputTask.textContent = '';
  }
})