import { dashboard } from "./elementInstance";
import { RenderFunction } from "./lib/renderFunctions";

const render = {
  service: null,
  renderView: function (elementsData, itemType) {
    const renderFunction = new RenderFunction(this.service);
    renderFunction[itemType](elementsData, dashboard.listWrapper);
  },
};

export const dashboardListElement = {
  init: (service) => {
    dashboard.expendListButton.addEventListener("click", () => {
      const mainContainer = document.querySelector("#mainContainer");
      mainContainer.scrollTo({
        left: mainContainer.scrollWidth,
        behavior: "smooth",
      });
    });
    render.service = service;
    service.setRenderCallback(render.renderView.bind(render));
  },
};
