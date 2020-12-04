import { MoodFilter } from "./MoodFilter.js";

const contentTarget = document.querySelector(".filters");
const eventHub = document.querySelector(".container");

export const FilterBar = () => {
  const render = () => {
    contentTarget.innerHTML = `
      ${MoodFilter()}
    `;
  };

  render();
};

contentTarget.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.name === "moodFilter") {
    if (changeEvent.target.id === "moodEnthusiastic") {
      const customEvent = new CustomEvent("enthusiasticChosen");
      eventHub.dispatchEvent(customEvent);
    } else if (changeEvent.target.id === "moodSweaty") {
      const customEvent = new CustomEvent("sweatyChosen");
      eventHub.dispatchEvent(customEvent);
    } else if (changeEvent.target.id === "moodTerrified") {
      const customEvent = new CustomEvent("terrifiedChosen");
      eventHub.dispatchEvent(customEvent);
    } else if (changeEvent.target.id === "allMoods") {
      const customEvent = new CustomEvent("allMoodsChosen");
      eventHub.dispatchEvent(customEvent);
    }
  }
});
