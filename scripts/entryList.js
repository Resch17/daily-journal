import { getEntries, useJournalEntries } from './JournalDataProvider.js';
import { Entry } from './entry.js';

const contentElement = document.querySelector('#journalEntries');
const eventHub = document.querySelector('.container');

eventHub.addEventListener('enthusiasticChosen', () => {
  let entryArray = useJournalEntries();
  let filteredArray = entryArray.filter(
    (entry) => entry.mood === 'Enthusiastic'
  );
  render(filteredArray);
});

eventHub.addEventListener('sweatyChosen', () => {
  let entryArray = useJournalEntries();
  let filteredArray = entryArray.filter((entry) => entry.mood === 'Sweaty');
  render(filteredArray);
});

eventHub.addEventListener('terrifiedChosen', () => {
  let entryArray = useJournalEntries();
  let filteredArray = entryArray.filter((entry) => entry.mood === 'Terrified');
  render(filteredArray);
});

eventHub.addEventListener('allMoodsChosen', () => {
  EntryList();
});

eventHub.addEventListener('journalStateChanged', () => {
  EntryList();
});

eventHub.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id.startsWith('edit--')) {
    const [unused, entryId] = clickEvent.target.id.split('--');
    const message = new CustomEvent('editEntry', {
      detail: {
        entryIdToEdit: parseInt(entryId),
      },
    });
    document.dispatchEvent(message);
  }
});

export const EntryList = () => {
  getEntries().then(() => {
    const entryArray = useJournalEntries();
    render(entryArray);
  });
};

const render = (entryArray) => {
  if (entryArray.length > 0) {
    contentElement.innerHTML = entryArray
      .map((entry) => `${Entry(entry)}`)
      .join('');
  } else {
    contentElement.innerHTML = 'No Entries Found';
  }
};
