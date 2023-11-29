import { totalPage } from "./elementInstance";
import { RenderFunction } from "./lib/renderFunctions";

const render = {
  service: null,
  renderView: function( elementsData, itemType) {
    const renderFunction = new RenderFunction(this.service);
    renderFunction[itemType](elementsData, totalPage.listWrapper);
  }
}

export const totalListElement = {
  init: (service) => {
    totalPage.backButton.addEventListener("click", () => {
      const mainContainer = document.querySelector("#mainContainer");
      mainContainer.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    });

    render.service = service;
    service.setRenderCallback(render.renderView.bind(render));
  },
};