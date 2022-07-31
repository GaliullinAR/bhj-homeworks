const input = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');
const button = document.querySelector('.tasks__add');
const form = document.getElementById('tasks__form');

button.addEventListener('click', function (e) {
  e.preventDefault();

  if (input.value.trim()) {
    let val = input.value;
    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
      <div class="task__title">
        ${val}
      </div>
      <a href="#" class="task__remove">&times;</a> 
    `;
    taskList.appendChild(task);
    form.reset();

    const taskRemove = task.querySelector('.task__remove');
    taskRemove.onclick = function (el) {
      let taskItem = el.target.closest('.task');
      taskItem.remove();
    }
  }
});



