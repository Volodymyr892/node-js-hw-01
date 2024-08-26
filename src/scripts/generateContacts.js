// import * as fs from "node:fs/promises";
// import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";
// import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from "./getAllContacts.js";
import updateContacts from './updateContacts.js';

const generateContacts = async (number) => {
    // const {encoding}= await DetectFileEncodingAndLanguage(PATH_DB);
    // const contacntList = await fs.readFile(PATH_DB, encoding);
    const contactList = await getAllContacts();
    const newContactsList = Array(number).fill(0).map(()=> createFakeContact());
    // const data =[...contacntList, ...newContactsList];
    contactList.push(...newContactsList);
    await updateContacts(contactList);
  
};
    
generateContacts(5);
