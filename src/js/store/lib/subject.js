export class DataSubject {
  #data = {
    isOpen: false,
    title: "",
    description: "",
    isUrgent: false,
  }
  #observersActions = [];

  #notifyAllObservers() {
    this.#observersActions.forEach(observersAction => {
      observersAction(this.#data)
    })
  };

  constructor(data) {
    this.#data = data;
  }

  getState() {
    return this.#data
  }
  setState(data) {
    this.#data = data
    this.#notifyAllObservers()
  }
  
  subscribe(observer) {
    this.#observersActions.push(observer)
  }
}