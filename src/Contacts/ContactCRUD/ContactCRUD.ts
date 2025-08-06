import fs from 'fs';
import path from 'path';
import Contact from '../Contact/Contact';



export default class ContactCRUD {
    private contacts: Contact[] = [];
    private filePath: string;

    constructor(fileName: string = 'contacts.json') {

        this.filePath = path.resolve(__dirname, fileName); // __dirName me da la ruta absoluta de donde esto parado
        // luego le agrega el fileName Por tanto el archivo queda en esta misma carpeta
    }



    public getAllContacts(): Contact[] {
        return this.contacts;
    }


    public getContactsByNames(names:string): Contact[] {

        let findetContacts: Contact[] =[]; 
        let namesLower = names.toLowerCase()
        
         for(let ii = 0; ii < this.contacts.length; ii++){
            const contact = this.contacts[ii];
            if(contact &&  contact.names.toLowerCase() == namesLower){
                findetContacts.push(contact)
            }
        }
        return findetContacts;
    }


    public getContactByIndex(index: number): Contact | null {
        return this.contacts[index] || null;
    }

    public getContactByCel(cel: string): Contact | null {

         const index = this.contacts.findIndex(contact => contact.cel === cel);
        
        if(index === -1){
            return null;
        }


        return this.contacts[index] || null;
    }


    public async addContact(contact: Contact): Promise<void> {
        this.contacts.push(contact);
        await this.saveData();
    }

    public async updateContact(actualCel: string, names: string, lastnames: string, changedCel: string ): Promise<boolean> {
        const index = this.contacts.findIndex(contact => contact.cel === actualCel);
        
        if(index === -1){
            return false;
        }
        const contact = this.contacts[index];

        if(!contact){
            return false;
        }

        contact.names = names;
        contact.lastnames = lastnames;
        contact.cel = changedCel;
        

        await this.saveData();
        return true;
    }

    public async deleteContact(cel: string): Promise<boolean> {
        const index = this.contacts.findIndex(contact => contact.cel === cel);
        
        if(index === -1){
            return false;
        }

        this.contacts.splice(index,1);
        await this.saveData();
        return true;
    }

    public contactExist(cel:string):boolean{

        for(let ii = 0; ii < this.contacts.length; ii++){
            const contact = this.contacts[ii];

            if(contact && contact.cel == cel){
                return true;
            }
        }
        return false;

    }



    private async saveData(): Promise<void> {
        // Se convierte el objeto plano el array (Solo llaves, no metodos) JSON.stringify solo recibe planos
        const data = this.contacts.map(c => ({
            names: c.names,
            lastnames: c.lastnames,
            cel: c.cel
        }));

        // JSON.stringify(data, null, 2) cibverute ek array en formato JSON, el 2 es para que el formato tenga sangria
        // escribe en el archivo
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
    }


    public async loadData(): Promise<void> {
        if (fs.existsSync(this.filePath)) { // Verifica si el archivo existe :)

            const rawData = fs.readFileSync(this.filePath, 'utf-8'); // Retorna la Data en String
            const parsed = JSON.parse(rawData); // Se hace el parse a objetos de JS
            // El parsed devuelve tipo Any pq no sabe que es jejej
            this.contacts = parsed.map((obj: any) => new Contact(obj.names, obj.lastnames, obj.cel));
        }
    }

}
