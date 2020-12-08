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
    let customEvent
    if (changeEvent.target.id === "moodEnthusiastic") {
      customEvent = new CustomEvent("enthusiasticChosen");
    } else if (changeEvent.target.id === "moodSweaty") {
      customEvent = new CustomEvent("sweatyChosen");
    } else if (changeEvent.target.id === "moodTerrified") {
      customEvent = new CustomEvent("terrifiedChosen");
    } else if (changeEvent.target.id === "allMoods") {
      customEvent = new CustomEvent("allMoodsChosen");
    }
    eventHub.dispatchEvent(customEvent);
  }
});

FilterBar();