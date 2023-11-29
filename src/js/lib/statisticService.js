export class StatisticService {
  #todoStore;
  #viewRender;
  constructor(todoStore) {
    this.#todoStore = todoStore
    this.#todoStore.subscribe(this.render.bind(this));
  }

  render() {
    const todoItems = this.#todoStore.getState();
    const urgentNumber = todoItems.filter(({isUrgent, isChecked}) => isUrgent && !isChecked).length; 
    const regularNumber = todoItems.filter(({isUrgent, isChecked}) => !isUrgent && !isChecked).length;
    const doneNumber = todoItems.filter(({isChecked}) => isChecked).length;
    this.#viewRender({urgentNumber, regularNumber, doneNumber});
  }

  setRenderCallback(render) {
    this.#viewRender = render;
  }
}