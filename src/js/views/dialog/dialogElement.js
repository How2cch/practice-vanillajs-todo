import dayjs from "dayjs";

import { dialogDOM } from "./elementInstance";
import { v4 as uuid } from "uuid";

const renderView = (data) => {
  const { isOpen, title, description, isUrgent, id } = data;
  if (isOpen) {
    dialogDOM.wrapper.show();
    dialogDOM.inputTitle.value = title;
    dialogDOM.inputDescription.value = description;
    dialogDOM.inputIsUrgentOption.checked = isUrgent;
    dialogDOM.wrapper.dataset.id = id;
  } else {
    dialogDOM.wrapper.hide();
  }
};

export const dialogElement = {
  init: (service) => {
    dialogDOM.form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!dialogDOM.form.reportValidity()) return;
      const { inputTitle, inputDescription, inputIsUrgentOption, wrapper } = dialogDOM;
      const isNewTodo = wrapper.dataset.id == "";
      const todoData = {
        title: inputTitle.value,
        description: inputDescription.value,
        isUrgent: inputIsUrgentOption.checked,
        time: dayjs(),
        id: isNewTodo ? uuid() : wrapper.dataset.id,
        isChecked: false,
      };

      if(isNewTodo){
        service.saveTodo(todoData);
      } else {
        service.editTodo(todoData);
      }

    });

    dialogDOM.closeButtons.forEach((button) =>
      button.addEventListener("click", () => service.closeDialog())
    );

    service.setRenderCallback(renderView);
  },
};
