import { todoItemType } from "../constant/todoItemType";
import { TodoItem } from "./model/todoItem";
import dayjs from "dayjs";



export class DashboardListService {
  #viewRender;
  #todoStore;
  #dialogFormStore;
  #previousItems = [];

  constructor(todoStore, dialogFormStore) {
    this.#todoStore = todoStore;
    this.#dialogFormStore = dialogFormStore;
    this.#todoStore.subscribe(this.update.bind(this));
  }

  update() {
    const todoItems = this.#todoStore.getState().filter(({isUrgent}) => isUrgent);
    const newItems = [];
    const editItems = [];
    const deleteItems = this.#previousItems.filter(({id}) => !todoItems.find((item) => item.id === id));
    todoItems.forEach((currentItem) => {
      const pervItem = this.#previousItems.find(
        (item) => item.id === currentItem.id
      );
      if (!pervItem) return newItems.push(currentItem);
      if (pervItem.time !== currentItem.time) return editItems.push(currentItem);
    });

    this.#previousItems = todoItems;
    if (newItems.length) this.#viewRender(newItems, todoItemType.NEW);
    if (editItems.length) this.#viewRender(editItems, todoItemType.EDIT);
    if (deleteItems.length) this.#viewRender(deleteItems, todoItemType.DELETE);
  }

  openDialogForEdit(todoId) {
    const { title, description, isUrgent, id } = this.#todoStore.get(todoId);
    this.#dialogFormStore.setState({isOpen: true, title, description, isUrgent, id});
  }

  deleteItem(id) {
    this.#todoStore.delete(id);
  }

  toggleItemCheckState(id) {
    const target = this.#todoStore.get(id);
    const newItem = new TodoItem({...target, isChecked: !target.isChecked, time: dayjs()});
    this.#todoStore.edit(newItem);
  }

  setRenderCallback(render) {
    this.#viewRender = render;
  }
}
