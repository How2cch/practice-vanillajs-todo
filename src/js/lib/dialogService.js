import { TodoItem } from "./model/todoItem";

export class DialogService {
  #dialogFormStore;
  #todoStore;
  #viewRender;

  constructor(dialogFormStore, todoStore) {
    this.#dialogFormStore = dialogFormStore;
    this.#todoStore = todoStore;
    this.#dialogFormStore.subscribe(this.update.bind(this));
  }

  closeDialog() {
    this.#dialogFormStore.setState({
      isOpen: false,
      title: "",
      description: "",
      isUrgent: false,
      id: ""
    });
  }

  saveTodo(formData) {
    const { title, description, isUrgent, time, id, isChecked } = formData;
    const todoItem = new TodoItem({title, description, isUrgent, time, id, isChecked});
    this.#todoStore.add(todoItem);
    this.closeDialog();
  }

  editTodo(formData) {
    const { title, description, isUrgent, time, id, isChecked } = formData;
    const todoItem = new TodoItem({title, description, isUrgent, time, id, isChecked});
    this.#todoStore.edit(todoItem);
    this.closeDialog();
  }

  update() {
    const formState = this.#dialogFormStore.getState();
    this.#viewRender(formState);
  }

  setRenderCallback(render) {
    this.#viewRender = render;
  }
}
