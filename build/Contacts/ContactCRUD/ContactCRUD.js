"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Contact_1 = __importDefault(require("../Contact/Contact"));
class ContactCRUD {
    contacts = [];
    filePath;
    constructor(fileName = 'contacts.json') {
        this.filePath = path_1.default.resolve(__dirname, fileName); // __dirName me da la ruta absoluta de donde esto parado
        // luego le agrega el fileName Por tanto el archivo queda en esta misma carpeta
    }
    getAllContacts() {
        return this.contacts;
    }
    getContactsByNames(names) {
        let findetContacts = [];
        let namesLower = names.toLowerCase();
        for (let ii = 0; ii < this.contacts.length; ii++) {
            const contact = this.contacts[ii];
            if (contact && contact.names.toLowerCase() == namesLower) {
                findetContacts.push(contact);
            }
        }
        return findetContacts;
    }
    /**
      public getContactsByNames(names:string): Contact[] {

        let findetContacts: Contact[] =[];
        let namesLower = names.toLowerCase()
        
         for(let ii = 0; ii < this.contacts.length; ii++){
            if(  this.contacts[ii].names.toLowerCase() == namesLower){
                findetContacts.push(this.contacts[ii])
            }
        }
        return findetContacts;
    }
     
     */
    getContactByIndex(index) {
        return this.contacts[index] || null;
    }
    getContactByCel(cel) {
        const index = this.contacts.findIndex(contact => contact.cel === cel);
        if (index === -1) {
            return null;
        }
        return this.contacts[index] || null;
    }
    async addContact(contact) {
        this.contacts.push(contact);
        await this.saveData();
    }
    async updateContact(actualCel, names, lastnames, changedCel) {
        const index = this.contacts.findIndex(contact => contact.cel === actualCel);
        if (index === -1) {
            return false;
        }
        const contact = this.contacts[index];
        if (!contact) {
            return false;
        }
        contact.names = names;
        contact.lastnames = lastnames;
        contact.cel = changedCel;
        await this.saveData();
        return true;
    }
    async deleteContact(cel) {
        const index = this.contacts.findIndex(contact => contact.cel === cel);
        if (index === -1) {
            return false;
        }
        this.contacts.splice(index, 1);
        await this.saveData();
        return true;
    }
    contactExist(cel) {
        for (let ii = 0; ii < this.contacts.length; ii++) {
            const contact = this.contacts[ii];
            if (contact && contact.cel == cel) {
                return true;
            }
        }
        return false;
    }
    /*
    public contactExist(cel:string):boolean{

        for(let ii = 0; ii < this.contacts.length; ii++){
            const contact = this.contacts[ii];

            if(this.contacts[ii].cel == cel){
                return true;
            }
        }
        return false;

    }
    */
    async saveData() {
        // Se convierte el objeto plano el array (Solo llaves, no metodos) JSON.stringify solo recibe planos
        const data = this.contacts.map(c => ({
            names: c.names,
            lastnames: c.lastnames,
            cel: c.cel
        }));
        // JSON.stringify(data, null, 2) cibverute ek array en formato JSON, el 2 es para que el formato tenga sangria
        // escribe en el archivo
        fs_1.default.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
    }
    async loadData() {
        if (fs_1.default.existsSync(this.filePath)) { // Verifica si el archivo existe :)
            const rawData = fs_1.default.readFileSync(this.filePath, 'utf-8'); // Retorna la Data en String
            const parsed = JSON.parse(rawData); // Se hace el parse a objetos de JS
            // El parsed devuelve tipo Any pq no sabe que es jejej
            this.contacts = parsed.map((obj) => new Contact_1.default(obj.names, obj.lastnames, obj.cel));
        }
    }
}
exports.default = ContactCRUD;
