function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  // Add task text
  li.appendChild(document.createTextNode(taskText));

  // Toggle 'done' class on click
  li.onclick = function () {
    li.classList.toggle("done");
  };

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.className = "delete-btn";

  // Prevent toggle when deleting
  deleteBtn.onclick = function (event) {
    event.stopPropagation(); // Stop from toggling done
    li.remove();
  };

  // Append delete button to list item
  li.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(li);

  // Clear input box
  input.value = "";
}
