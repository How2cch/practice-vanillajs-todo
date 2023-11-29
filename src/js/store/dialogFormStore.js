import { DataSubject } from "./lib/subject";

const dialogFormState = new DataSubject({
  isOpen: false,
  title: "",
  description: "",
  isUrgent: false,
  id: ""
});

export const dialogFormStore = {
  getState: () => dialogFormState.getState(),
  setState: ({isOpen, title, description, isUrgent, id}) => {
    dialogFormState.setState({
      isOpen,
      title,
      description,
      isUrgent,
      id
    });
  },
  subscribe: (observer) => dialogFormState.subscribe(observer),
};
