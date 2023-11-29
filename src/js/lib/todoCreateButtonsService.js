export class TodoCreateButtonsService {
  #dialogFormStore
  constructor(dialogFormStore) {
    this.#dialogFormStore = dialogFormStore
  }

  openDialog() {
    this.#dialogFormStore.setState(
      {
        isOpen: true,
        title: "",
        description: "",
        isUrgent: false,
        id: ""
      }
    );
  }
}