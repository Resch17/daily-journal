import { saveJournalEntry } from "./JournalDataProvider.js";

const eventHub = document.getElementsByTagName("body");
const contentTarget = document.querySelector(".modal");

const render = () => {
  contentTarget.innerHTML = `
  <section class="modal-content">
  <div class="modal__top-line">
    <a href="#" class="btn btn--delete" id="closeModal">X</a>
    <div class="modal__top-line__stack">
      <label for="date">Entry Date:</label>
      <input type="date" name="date" id="date">
      <label for="moods">Select a mood:</label>
      <select name="moods" id="moods">
        <option value="Enthusiastic">Enthusiastic</option>
        <option value="Sweaty">Sweaty</option>
        <option value="Terrified">Terrified</option>
      </select>
    </div>
    <div>
      <label for="concepts-covered">Concepts covered:</label>
      <input type="text" name="concepts-covered" id="conceptsCovered">
    </div>
  </div>
  <textarea name="journal-entry" id="journalEntryText" cols="30" rows="10"></textarea>
  <a href="#" class="btn btn--success record-entry">Record Journal Entry</a>
</section>
  `;
};

export const JournalForm = () => {
  render();
};

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.classList.contains("record-entry")) {
    let entryDate = document.getElementById("date").value;
    let entryConcept = document.getElementById("conceptsCovered").value;
    let entryText = document.getElementById("journalEntryText").value;
    let entryMood = document.getElementById("moods").value;

    if (entryDate && entryConcept && entryText && entryMood !== "") {
      const newEntry = {
        date: entryDate,
        concept: entryConcept,
        entry: entryText,
        mood: entryMood,
      };

      saveJournalEntry(newEntry);
    }
  }
});
