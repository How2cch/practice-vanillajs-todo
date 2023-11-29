
export const todoElementFactory = (data) => {
  const { title, isUrgent, id, isChecked } = data;
  const todo = document.createElement("div");
  todo.classList.add("todo-item");
  if (isUrgent) todo.classList.add("urgent");

  if (isChecked) todo.classList.add("checked");

  const checkIcon = document.createElement("sl-icon");
  checkIcon.name = "check-circle-fill";
  checkIcon.classList.add("icon");
  todo.appendChild(checkIcon);

  const todoTitleElement = document.createElement("p");
  todoTitleElement.innerText = title;
  todo.appendChild(todoTitleElement);

  const option = document.createElement("div");
  option.classList.add("option");
  todo.appendChild(option);

  const editIcon = document.createElement("sl-icon");
  editIcon.name = "pencil-fill";
  editIcon.classList.add("todo-edit-btn", "icon");
  option.appendChild(editIcon);

  const deleteIcon = document.createElement("sl-icon");
  deleteIcon.name = "trash3-fill";
  deleteIcon.classList.add("delete-btn", "icon");
  option.appendChild(deleteIcon);

  // todo["data-id"] = id;
  todo.dataset.id = id;
  return todo;
}