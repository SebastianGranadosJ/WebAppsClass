import Contact from "../Contact/Contact";
export default class View{

    public static showWelcome(){
        console.log("------------ BIENVENIDO A TU AGENDA CABRONA 😈😈😈 ------------");
    }

    public static showMenu(){
        console.log("------- Menu -------");
        console.log();
        console.log();

        console.log("1. Crear Contacto. ");
        console.log("2. Buscar Contacto. ");
        console.log("3. Borrar Contacto. ");
        console.log("4. Listar Contactos. ");
        console.log("5. Editar Contacto. ");
        
    }
    public static showContact(contact: Contact){
        console.log("Nombre: " + contact.names);
        console.log("Apellidos: " + contact.lastnames);
        console.log("Telefono: " + contact.cel);
    }

    public static shwoContacts(contacts: Contact[]){
        for(let ii = 0; ii < contacts.length; ii++){
            this.showContact(contacts[ii]);
        }
    }

    public static showSearch(){
        console.log("--- BUSCAR CONTACTOS ---");
        console.log();
        console.log("Busca tu contacto por su nombre :)");
    }

    public static showList(){
        console.log("--- VER CONTACTOS ---");
        console.log();
        console.log("Estos son tus contactos :)");
    }

    public static showCreate(){
        console.log("--- CREAR CONTACTOS ---");
        console.log();
        console.log("Ingresa los siguientes datos para crear el usuario: ");
    }

    public static showSuccesfulContactCreated(contact:Contact){
        console.log("Usuario Exitosamente Creado!!!")
        console.log()
        this.showContact(contact)
    }
     public static showFailedContactCreated(){
        console.log("El usuario no pudo ser creado.")
        console.log("Ya existe un usuario con ese numero.")
    }


}