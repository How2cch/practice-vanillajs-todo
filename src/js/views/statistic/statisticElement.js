import { statisticDOM } from "./elementInstance";

const renderView = ({ urgentNumber, regularNumber, doneNumber }) => {
  statisticDOM.urgent.textContent = urgentNumber;
  statisticDOM.regular.textContent = regularNumber;
  statisticDOM.done.textContent = doneNumber;
}

export const statisticElement = {
  init: (service) => {
    service.setRenderCallback(renderView);
  },
};
