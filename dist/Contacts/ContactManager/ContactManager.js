"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Contact_js_1 = __importDefault(require("../Contact/Contact.js"));
const Imput_js_1 = __importDefault(require("../../Imput/Imput.js"));
const View_js_1 = __importDefault(require("../View/View.js"));
const ContactCRUD_js_1 = __importDefault(require("../ContactCRUD/ContactCRUD.js"));
class ContactManager {
    constructor() {
        this.contactCRUD = new ContactCRUD_js_1.default();
        this.contactCRUD.loadData();
        this.appClosed = false;
    }
    async init() {
        while (!this.appClosed) {
            View_js_1.default.showMenu();
            await this.doAction();
        }
    }
    async doAction() {
        let choose = await Imput_js_1.default.prompt("Ingresa el numero de opcion que deseas usar: ");
        switch (choose) {
            case "1":
                await this.createContact();
                break;
            case "2":
                await this.searchContact();
                break;
            case "3":
                await this.deleteContact();
                break;
            case "4":
                await this.listContacts();
                break;
            case "5":
                await this.editContacts();
                break;
            default:
                console.log("Ingrese un valor valido.");
        }
    }
    async editContacts() {
        View_js_1.default.showEdit();
        let cel = await Imput_js_1.default.prompt("Ingresa el numero del contacto que deseas editar: ");
        let contact = this.contactCRUD.getContactByCel(cel);
        if (contact == null) {
            View_js_1.default.showNoContactFindet();
            await this.pressToContinue();
            return;
        }
        View_js_1.default.showContactFindet(contact);
        let newNames = await Imput_js_1.default.prompt("Ingresa los nuevos nombres del contacto: ");
        let newLastnames = await Imput_js_1.default.prompt("Ingresa los nuevos apellidos del contacto: ");
        let newCel = await Imput_js_1.default.prompt("Ingresa el nuevo numero contacto: ");
        if (newCel != cel && this.contactCRUD.contactExist(newCel)) {
            View_js_1.default.showAlreadyExistCel();
            await this.pressToContinue();
            return;
        }
        await this.contactCRUD.updateContact(cel, newNames, newLastnames, newCel);
        View_js_1.default.showSuccesfulContactUpdated(contact);
        await this.pressToContinue();
        return;
    }
    async listContacts() {
        View_js_1.default.showList();
        View_js_1.default.shwoContacts(this.contactCRUD.getAllContacts());
        await this.pressToContinue();
    }
    async deleteContact() {
        View_js_1.default.showDelete();
        let cel = await Imput_js_1.default.prompt("Ingresa el numero del contacto que deseas eliminar: ");
        let result = await this.contactCRUD.deleteContact(cel);
        if (!result) {
            View_js_1.default.showNoContactFindet();
            await this.pressToContinue();
            return;
        }
        View_js_1.default.showSuccesfulContactDeleted(cel);
        await this.pressToContinue();
        return;
    }
    async searchContact() {
        View_js_1.default.showSearch();
        let names = await Imput_js_1.default.prompt("Ingresa el nombre del contacto que deseas buscar: ");
        let findetContacts = this.contactCRUD.getContactsByNames(names);
        if (findetContacts.length == 0) {
            View_js_1.default.showNoContactFindet();
            await this.pressToContinue();
            return;
        }
        View_js_1.default.showContactsFindet(findetContacts);
        await this.pressToContinue();
    }
    async createContact() {
        View_js_1.default.showCreate();
        let names = await Imput_js_1.default.prompt("Ingresa los nombres del contacto: ");
        let lastNames = await Imput_js_1.default.prompt("Ingresa los apellidos del contacto: ");
        let cel = await Imput_js_1.default.prompt("Ingresa el numero del contacto: ");
        if (!this.contactCRUD.contactExist(cel)) {
            let contact = new Contact_js_1.default(names, lastNames, cel);
            await this.contactCRUD.addContact(contact);
            View_js_1.default.showSuccesfulContactCreated(contact);
        }
        else {
            View_js_1.default.showAlreadyExistCel();
        }
        await this.pressToContinue();
    }
    async pressToContinue() {
        await Imput_js_1.default.prompt("Presione cualquie tecla para continuar.");
    }
}
exports.default = ContactManager;
