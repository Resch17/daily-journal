import {useJournalEntries} from "./JournalDataProvider.js";
import {Entry} from "./entry.js";

export const EntryList = () => {
  const contentElement = document.querySelector("#journalEntries");
  const entryArray = useJournalEntries();

  for (const entry of entryArray) {
    const entryHTML = Entry(entry);
    contentElement.innerHTML += entryHTML;
  }

}