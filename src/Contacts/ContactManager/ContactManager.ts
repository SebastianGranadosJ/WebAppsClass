import Contact from "../Contact/Contact.js";
import Imput from "../../Imput/Imput.js";
import View from "../View/View.js";

export default class ContactManager{


    private contacts: Contact[];
    private appClosed: boolean;


    constructor(){
        this.contacts = []; // Aqui iria jsonManger.getall()
        this.appClosed = false;
    }


    public async init(){
        View.showWelcome();
        while(!this.appClosed){
            View.showMenu();
            await this.doAction()
        }

    }

    private async doAction(){
    
            let choose = await Imput.prompt("Ingresa 1 si quieres probar un caracter, Ingresa 2 si quieres ingresar la palabra completa: ");
            
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
        let closeAction:boolean = false;

        while(!closeAction){
            let choose = await Imput.prompt("Ingresa el numero del contacto que deseas editar, o presiona enter si deseas dejar de editar: ");
            
            if(choose == ""){
                closeAction = true;
                return;
            }

            
            



        }
        
    }
    private async listContacts():Promise<void> {
        View.showList();
        View.shwoContacts(this.contacts);
        let choose = await Imput.prompt("Presiona culquier tecla para continuar.");

        
    }
    private async deleteContact():Promise<void>  {
        
    }
    private async searchContact():Promise<void>  {


        
        
    }
    private async createContact():Promise<void>  {
        View.showCreate()
        let actionClosed: boolean = false;

        let names:string =  await Imput.prompt("Ingresa los nombres del contacto: ");
        let lastNames:string =  await Imput.prompt("Ingresa los apellidos del contacto: ");
        let cel:string = await Imput.prompt("Ingresa el numero del contacto: ");

        if(!this.contactExist(cel)){
            let contact: Contact = new Contact(names, lastNames, cel);
            this.contacts.push(contact);
            View.showSuccesfulContactCreated(contact);
        }else{
            View.showFailedContactCreated()
        }

            
        
        }

        

    private contactExist(cel:string):boolean{

        for(let ii = 0; ii < this.contacts.length; ii++){
            if(this.contacts[ii].cel == cel){
                return true;
            }
        }
        return false;

    }



}