document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');
  const sortButton = document.getElementById('sort-button');

  // Function to create a new task item
  function createTaskElement(description, priority, dueDate) {
    const taskItem = document.createElement('li');
    taskItem.classList.add(`priority-${priority}`);
    taskItem.innerHTML = `
      <span>${description}</span>
      <span>Priority: ${priority}</span>
      <span>Due: ${dueDate}</span>
    `;
    return taskItem;
  }

  // Function to sort tasks by priority
  function sortTasks() {
    const tasks = Array.from(taskList.children);
    const sortedTasks = tasks.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      const priorityA = a.classList[0].split('-')[1];
      const priorityB = b.classList[0].split('-')[1];
      return priorityOrder[priorityB] - priorityOrder[priorityA];
    });

    // Clear the list and append sorted tasks
    taskList.innerHTML = '';
    sortedTasks.forEach(task => taskList.appendChild(task));
  }

  // Add task form submission handler
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const description = document.getElementById('new-task-description').value;
    const priority = document.getElementById('task-priority').value;
    const dueDate = document.getElementById('task-due-date').value;

    const taskItem = createTaskElement(description, priority, dueDate);
    taskList.appendChild(taskItem);

    // Reset the form
    form.reset();
  });

  // Add click event listener to sort button
  sortButton.addEventListener('click', sortTasks);
});
