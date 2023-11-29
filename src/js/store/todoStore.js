import { DataSubject } from "./lib/subject";

const todoState = new DataSubject([]);

export const todoStore = {
  getState: () => todoState.getState(),
  setState: (data) => todoState.setState(data),
  get: (id) => todoState.getState().find((item) => item.id === id),
  add: (data) => {
    const todoData = todoState.getState();
    const newData = [...todoData, data];
    todoState.setState(newData);
  },
  delete: (id) => {
    const data = todoState.getState();
    const newData = data.filter((item) => item.id !== id);
    todoState.setState(newData);
  },
  edit: (editData) => {
    const todoData = todoState.getState();
    const newData = todoData.map((item) => {
      if (item.id === editData.id) return editData;
      return item;
    });
    todoState.setState(newData);
  },

  subscribe: (observer) => todoState.subscribe(observer),
};