const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

todoForm.addEventListener("submit", handleAddTodo);

function handleAddTodo(event) {
  event.preventDefault();

  if (todoInput.value.trim() === "") {
    return;
  }
  //   console.log(todoInput.value);

  const todoListItem = document.createElement("li");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  const todoText = document.createElement("span");
  todoText.textContent = todoInput.value.trim();

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  todoListItem.appendChild(checkBox);
  todoListItem.appendChild(todoText);
  todoListItem.appendChild(deleteBtn);
  todoList.appendChild(todoListItem);

  deleteBtn.addEventListener("click", (event) => {
    todoListItem.remove();
  });

  checkBox.addEventListener("change", (event) => {
    todoText.classList.toggle("checkBox");
  });


  todoInput.value = "";
}