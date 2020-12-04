import { getEntries, useJournalEntries } from "./JournalDataProvider.js";
import { Entry } from "./entry.js";

const contentElement = document.querySelector("#journalEntries");
const eventHub = document.querySelector(".container");

eventHub.addEventListener("enthusiasticChosen", () => {
  let entryArray = useJournalEntries();
  let filteredArray = entryArray.filter(
    (entry) => entry.mood === "Enthusiastic"
  );
  console.log("filtered", filteredArray);
  render(filteredArray);
});

eventHub.addEventListener("sweatyChosen", () => {
  let entryArray = useJournalEntries();
  let filteredArray = entryArray.filter((entry) => entry.mood === "Sweaty");
  console.log("filtered", filteredArray);
  render(filteredArray);
});

eventHub.addEventListener("terrifiedChosen", () => {
  let entryArray = useJournalEntries();
  let filteredArray = entryArray.filter((entry) => entry.mood === "Terrified");
  console.log("filtered", filteredArray);
  render(filteredArray);
});

eventHub.addEventListener("allMoodsChosen", () => {
  EntryList();
})

export const EntryList = () => {
  getEntries().then(() => {
    const entryArray = useJournalEntries();

    // for (const entry of entryArray) {
    //   const entryHTML = Entry(entry);
    //   contentElement.innerHTML += entryHTML;
    // }
    render(entryArray);
  });
};

const render = (entryArray) => {
  if (entryArray.length > 0) {
    contentElement.innerHTML = entryArray
      .map((entry) => `${Entry(entry)}`)
      .join("");
  }
};
