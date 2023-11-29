import { todoCreateButtons } from "./elementInstance";

export const todoCreateButtonElement = {
  init: (service) => {
    todoCreateButtons.forEach((button) =>
      button.addEventListener("click", () => service.openDialog())
    );
  },
};
