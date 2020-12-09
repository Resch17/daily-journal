import { saveJournalEntry } from './JournalDataProvider.js';
import { editJournalEntry, useJournalEntries } from './JournalDataProvider.js';
import { closeModal } from './modal.js';

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.modal');

const render = () => {
  contentTarget.innerHTML = `
  <section class="modal-content">
  <div class="modal__top-line">
    <a href="#" class="btn btn--delete" id="closeModal">X</a>
    <div class="modal__top-line__stack">
      <input type="hidden" name="entryId" id="entryId">
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
      <input type="text" name="concepts-covered" id="conceptsCovered" autocomplete="off">
    </div>
  </div>
  <textarea name="journal-entry" id="journalEntryText" cols="30" rows="10"></textarea>
  <div class="btn btn--success record-entry">Record Journal Entry</div>
</section>
  `;
};

export const JournalForm = () => {
  render();
};

document.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.classList.contains('record-entry')) {
    let entryDate = document.getElementById('date').value;
    let entryConcept = document.getElementById('conceptsCovered').value;
    let entryText = document.getElementById('journalEntryText').value;
    let entryMood = document.getElementById('moods').value;
    let id = document.querySelector('#entryId').value;

    if (entryDate && entryConcept && entryText && entryMood !== '') {
      const newEntry = {
        date: entryDate,
        concept: entryConcept,
        entry: entryText,
        mood: entryMood,
      };
      if (id === '') {
        saveJournalEntry(newEntry);
        entryDate = '';
        entryConcept = '';
        entryText = '';
        entryMood = '';
        closeModal();
      } else {
        newEntry.id = id;
        editJournalEntry(newEntry);
        clearFields();
        closeModal();
      }
    }
  }
});

export const deleteSelection = () => {
  document.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id.startsWith('delete')) {
      const idToDelete = clickEvent.target.id;
      const [prefix, deleteItem] = idToDelete.split('--');

      const customEvent = new CustomEvent('deleteThisEntry', {
        detail: {
          deleteItem: deleteItem,
        },
      });
      document.dispatchEvent(customEvent);
    }
  });
};

export const editSelection = () => {
  document.addEventListener('editEntry', (event) => {
    const idToEdit = event.detail.entryIdToEdit;
    const entriesArray = useJournalEntries();
    const entryToEdit = entriesArray.find((entry) => entry.id === idToEdit);
    let entryDate = entryToEdit.date;
    let entryConcept = entryToEdit.concept;
    let entryText = entryToEdit.entry;
    let entryMood = entryToEdit.mood;
    let entryId = entryToEdit.id;

    render();
    document.getElementById('date').value = entryDate;
    document.getElementById('conceptsCovered').value = entryConcept;
    document.getElementById('journalEntryText').value = entryText;
    document.getElementById('moods').value = entryMood;
    document.getElementById('entryId').value = entryId;
  });
};

document.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id === "closeModal") {
    clearFields();
    closeModal();
  }
})

export const clearFields = () => {
  document.getElementById('date').value = '';
  document.getElementById('conceptsCovered').value = '';
  document.getElementById('journalEntryText').value = '';
  document.getElementById('moods').value = '';
  document.querySelector('#entryId').value = '';
}