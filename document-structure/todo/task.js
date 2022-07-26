const input = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');
const taskRemove = document.querySelector('.task');

button.addEventListener('click', function (e) {
  e.preventDefault();
});

window.addEventListener('keydown', function (e) {
  
  if (e.key === 'Enter') {
    
    let task = document.createElement("div");
    task.classList.add('task');
    task.innerHTML = `
      <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a> 
    `;
    taskList.appendChild(task);
    input.value = '';
    
    const taskRemove = document.querySelectorAll(".task__remove");
    taskRemove.forEach((item) => {
      item.onclick = function (el) {
        const taskItem = el.target.closest('.task');
        taskItem.remove();
      }
    })
  }
});

