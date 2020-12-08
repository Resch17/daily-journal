import { ModalDisplay } from './modal.js';
import { EntryList } from './entryList.js';
import { JournalForm, deleteSelection, editSelection } from './JournalForm.js';
import { deleteJournalEntry } from './JournalDataProvider.js';
import './FilterBar.js';


JournalForm();
EntryList();
ModalDisplay();
deleteSelection();
deleteJournalEntry();
editSelection();
