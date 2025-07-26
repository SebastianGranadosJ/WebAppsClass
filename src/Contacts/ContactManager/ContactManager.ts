import Contact from "../Contact/Contact.js";
import Imput from "../../Imput/Imput.js";
import View from "../View/View.js";
import ContactCRUD from "../ContactCRUD/ContactCRUD.js";

export default class ContactManager{


    private contactCRUD: ContactCRUD;
    private appClosed: boolean;


    constructor(){
        this.contactCRUD = new ContactCRUD();
        this.contactCRUD.loadData()
        this.appClosed = false;
    }


    public async init(){
        while(!this.appClosed){
            View.showMenu();
            await this.doAction()
        }

    }

    private async doAction(){
    
            let choose = await Imput.prompt("Ingresa el numero de opcion que deseas usar: ");
            
            switch(choose){
                case "1":
                    await this.createContact()
                    break;
    
                    
                case "2":
                    await this.searchContact()

                    break;
                case "3":
                    await this.deleteContact()
                    break;
    
                case "4":
                    await this.listContacts()
                    break;
    
                case "5":
                    await this.editContacts()
                    break;
    
                default: 
                    console.log("Ingrese un valor valido.")
    
    
            }
    
        }
    private async editContacts():Promise<void> {
            View.showEdit();
            let cel = await Imput.prompt("Ingresa el numero del contacto que deseas editar: ");
            
            let contact: Contact | null  = this.contactCRUD.getContactByCel(cel)

            if(contact == null){
                View.showNoContactFindet();
                await this.pressToContinue();
                return;
            }
            View.showContactFindet(contact);
    
            let newNames = await Imput.prompt("Ingresa los nuevos nombres del contacto: ");
            let newLastnames = await Imput.prompt("Ingresa los nuevos apellidos del contacto: ");
            let newCel = await Imput.prompt("Ingresa el nuevo numero contacto: ");

            

            if(newCel != cel && this.contactCRUD.contactExist(newCel)){
                View.showAlreadyExistCel()
                await this.pressToContinue()
                return
            }


            await this.contactCRUD.updateContact(cel,newNames, newLastnames, newCel);

            View.showSuccesfulContactUpdated(contact);
            await this.pressToContinue()
            return


            

        
    }
    private async listContacts():Promise<void> {
        View.showList();
        View.shwoContacts( this.contactCRUD.getAllContacts());
        await this.pressToContinue()

        
    }
    private async deleteContact():Promise<void>  {
        View.showDelete();

        let cel:string = await Imput.prompt("Ingresa el numero del contacto que deseas eliminar: ");
            
        let result: boolean = await this.contactCRUD.deleteContact(cel);

        if(!result){
            View.showNoContactFindet();
            await this.pressToContinue()
            return;
        }

        View.showSuccesfulContactDeleted(cel);
        await this.pressToContinue()
        return;

        
    }
    private async searchContact():Promise<void>  {
        View.showSearch()
        let names:string =  await Imput.prompt("Ingresa el nombre del contacto que deseas buscar: ");
        let findetContacts: Contact[] = this.contactCRUD.getContactsByNames(names); 


        if(findetContacts.length == 0){

            View.showNoContactFindet();
            await this.pressToContinue()
            return;
        }

        View.showContactsFindet(findetContacts);
        await this.pressToContinue()

        
    }

    private async createContact():Promise<void>  {
        View.showCreate()

        let names:string =  await Imput.prompt("Ingresa los nombres del contacto: ");
        let lastNames:string =  await Imput.prompt("Ingresa los apellidos del contacto: ");
        let cel:string = await Imput.prompt("Ingresa el numero del contacto: ");

        if(!this.contactCRUD.contactExist(cel)){
            let contact: Contact = new Contact(names, lastNames, cel);
            await this.contactCRUD.addContact(contact);
            View.showSuccesfulContactCreated(contact);
        }else{
            View.showAlreadyExistCel()
        }
        await this.pressToContinue()
            
        
        }

        

    private async pressToContinue(){

        await Imput.prompt("Presione cualquie tecla para continuar.");
        

    }


}