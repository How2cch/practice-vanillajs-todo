import { todoItemType } from "../../../constant/todoItemType";
import { todoElementFactory } from "../../../factories/todoItemFactory";

export class RenderFunction {
  #service;

  constructor(service) {
    this.#service = service;
  }

  #check(todo) {
    todo.addEventListener("click", () => {
      this.#service.toggleItemCheckState(todo.dataset.id);
      todo.classList.toggle("checked");
    });
  }
  #edit(todo) {
    todo.querySelector(".todo-edit-btn").addEventListener("click", (event) => {
      event.stopPropagation();
      this.#service.openDialogForEdit(todo.dataset.id);
    });
  }
  #delete(todo) {
    todo.querySelector(".delete-btn").addEventListener("click", (event) => {
      event.stopPropagation();
      this.#service.deleteItem(todo.dataset.id);
    });
  }

  #bindEvent(todo) {
    this.#check(todo);
    this.#edit(todo);
    this.#delete(todo);
  }

  [todoItemType.NEW] = (data, targetWrapper) => {
    const elements = data.map((todoItem) => todoElementFactory(todoItem));
    elements.forEach((element) => {
      this.#bindEvent(element);
      targetWrapper.appendChild(element);
    });
  };

  [todoItemType.EDIT] = (data, targetWrapper) => {
    const elements = data.map((todoItem) => todoElementFactory(todoItem));
    elements.forEach((element) => {
      this.#bindEvent(element);
      targetWrapper
        .querySelector(`[data-id="${element.dataset.id}"]`)
        .replaceWith(element);
    });
  };

  [todoItemType.DELETE] = (data, targetWrapper) => {
    data.forEach((todoItem) => {
      targetWrapper.querySelector(`[data-id="${todoItem.id}"]`).remove();
    });
  };
}
