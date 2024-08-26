import updateContacts from './updateContacts.js';
import { getAllContacts } from './getAllContacts.js';

export const removeLastContact = async () => {
    const contactlist = await getAllContacts();
    contactlist.pop();
    await updateContacts(contactlist);
};
removeLastContact();
