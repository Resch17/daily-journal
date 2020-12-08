import { clearFields } from './JournalForm.js';

export const ModalDisplay = () => {
  // Get modal elements
  const modal = document.querySelector('#modal');
  const modalBtn = document.querySelector('#newEntry');
  const closeBtn = document.querySelector('#closeModal');
  const record = document.querySelector('.record-entry');

  // Listen for click
  modalBtn.addEventListener('click', () => {
    clearFields();
    openModal();
  });

  document.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.id.startsWith('edit')) {
      openModal();
    }
  });
  // Function to open modal
  function openModal() {
    modal.style.display = 'block';
  }

  // Close button event listener
  closeBtn.addEventListener('click', closeModal);

  // Listen for click outside modal content
  window.addEventListener('click', clickOutside);

  // record.addEventListener('click', closeModal);

  // outside click function
  function clickOutside(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }
};

export const closeModal = () => {
  document.querySelector('#modal').style.display = 'none';
};
