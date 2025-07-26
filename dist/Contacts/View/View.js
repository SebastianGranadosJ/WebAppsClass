"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    static showMenu() {
        console.clear();
        console.log("------ TU AGENDA CABRONA 😈😈😈 ------");
        console.log();
        console.log();
        console.log("------- Menu -------");
        console.log("1. Crear Contacto. ");
        console.log("2. Buscar Contacto. ");
        console.log("3. Borrar Contacto. ");
        console.log("4. Listar Contactos. ");
        console.log("5. Editar Contacto. ");
        console.log();
        console.log();
    }
    static showContact(contact) {
        console.log();
        console.log("Nombre: " + contact.names);
        console.log("Apellidos: " + contact.lastnames);
        console.log("Telefono: " + contact.cel);
        console.log();
    }
    static shwoContacts(contacts) {
        for (let ii = 0; ii < contacts.length; ii++) {
            this.showContact(contacts[ii]);
        }
    }
    static showSearch() {
        console.clear();
        console.log();
        console.log("--- BUSCAR CONTACTOS ---");
        console.log();
        console.log("Busca tu contacto por su nombre :)");
        console.log();
    }
    static showList() {
        console.clear();
        console.log("--- VER CONTACTOS ---");
        console.log();
        console.log("Estos son tus contactos :)");
    }
    static showCreate() {
        console.clear();
        console.log("--- CREAR CONTACTOS ---");
        console.log();
        console.log("Ingresa los siguientes datos para crear el contacto: ");
    }
    static showDelete() {
        console.clear();
        console.log("--- ELIMINAR CONTACTO ---");
        console.log();
        console.log("Ingresa los siguientes datos para crear el contacto: ");
    }
    static showEdit() {
        console.clear();
        console.log("--- EDITAR CONTACTO ---");
        console.log();
        console.log("Ingresa los siguientes datos para crear el contacto: ");
    }
    static showNoContactFindet() {
        console.log();
        console.log("No fue encontrado ningun contacto. ");
    }
    static showContactsFindet(contacts) {
        console.log();
        console.log("Los siguientes son los contactos encontrados: ");
        this.shwoContacts(contacts);
    }
    static showContactFindet(contact) {
        console.log();
        console.log("El siguiente es el  contacto encontrado: ");
        this.showContact(contact);
    }
    static showSuccesfulContactUpdated(contact) {
        console.log("Contacto Exitosamente Actualizado!!!");
        console.log();
        this.showContact(contact);
    }
    static showSuccesfulContactDeleted(cel) {
        console.log(`Contacto con el numero ${cel} Exitosamente Eliminado!!!`);
        console.log();
    }
    static showSuccesfulContactCreated(contact) {
        console.log("Contacto Exitosamente Creado!!!");
        console.log();
        this.showContact(contact);
    }
    static showAlreadyExistCel() {
        console.log("Ya existe un contacto con ese numero.");
    }
}
exports.default = View;
