document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");

  // Make sure there is a container for tasks
  let taskList = document.getElementById("tasks");
  if (!taskList) {
    taskList = document.createElement("ul");
    taskList.id = "tasks";
    document.body.appendChild(taskList);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);

      form.reset();
    }
  });
});