import { ModalDisplay } from "./modal.js";
import { EntryList } from "./entryList.js";
import { JournalForm, deleteSelection } from "./JournalForm.js";
import { deleteJournalEntry } from "./JournalDataProvider.js";
import { FilterBar } from "./FilterBar.js";

JournalForm();
FilterBar();
EntryList();
ModalDisplay();
deleteSelection();
deleteJournalEntry();