let journal = [];

const eventHub = document.querySelector('.container');

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent('journalStateChanged'));
};

export const getEntries = () => {
  return fetch('http://localhost:8088/entries')
    .then((res) => res.json())
    .then((entries) => {
      journal = entries;
    });
};

export const saveJournalEntry = (entry) => {
  return fetch('http://localhost:8088/entries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entry),
  })
    .then(getEntries)
    .then(dispatchStateChangeEvent);
};

export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
    (currentEntry, nextEntry) =>
      Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  );
  return sortedByDate.slice();
};

export const deleteJournalEntry = () => {
  document.addEventListener('deleteThisEntry', (event) => {
    if (event.detail.deleteItem !== 0) {
      return fetch(`http://localhost:8088/entries/${event.detail.deleteItem}`, {
        method: 'DELETE',
      })
        .then(getEntries)
        .then(dispatchStateChangeEvent);
    }
  });
};

export const editJournalEntry = (entry) => {
  return fetch(`http://localhost:8088/entries/${entry.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entry),
  })
    .then(getEntries)
    .then(dispatchStateChangeEvent);
};
