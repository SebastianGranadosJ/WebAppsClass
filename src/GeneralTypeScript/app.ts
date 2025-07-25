

// TypeScript agrega el tipado
let _num: number = 123;

// Flotante
_num = 123.456;

let _boo: boolean = true;

let _str: string = "text";

// Cualquier cosa, no usar xdxdxd, sirve para cuando en una api me mandan una vaina rara
let _anny: any = "any";

const PI: number = 3.14 // Escrito con mayusculas para saber que es constante, puro vizaje jajaja (estandar)

let numArray: number[] = [0,1,2];


// tupla
let _tuple: [string, number] = ["te", 1]

let _null: null = null


// Funncion sintaxis
function add(n1: number, n2:number): number{
    return n1 + n2;
}

// recibir varios tipos en un argumento
const addFunc = function add(
    n1: number | string,
    n2: number | string

): number{
    return 1
}

// void
const _voidFunc = (): void =>{

}

// Interfaces, epico, todo esto son atributos y funciones publicos  
interface StudentInterface{
    id: number;
    names:string;
    lastNames:string;
    age?: number | undefined // permite que cuando se implemente la interface pueda estar definida o no (?)
}

function testInterface(student: StudentInterface): string{
    return student.names
}

console.log(testInterface({id: 1, names:"lenin", lastNames: "cabra", age:19}))


class User implements StudentInterface{
    public id:number;
    public names: string;
    public lastNames: string;
    public age: number | undefined;
    private _address: string; // Diferenciarlo de la funcion
    
    constructor(id:number, names:string, lastnames:string, age:number | undefined, address:string ){
        this.id = id;
        this.lastNames = lastnames
        this.names = names;
        this.age = age;
        this._address = address
    }

    // poder usarlo de esta manera user.address
    public set address(address: string){
        this._address = address
    }

    public get address(): string{
        return this._address
    }

    // Otra manera
    public setAddress(address: string){
        this._address = address
    }

    public getAddress(): string{
        return this._address
    }

}


// Constante es la direccion de memoria del usuario
const user = new User(123, "lenun", "serrano", 20, "calle 1 con 2");
user.address = "asdasd";
user.setAddress("asdas");

interface ChildOfUserInterface extends StudentInterface{
    address: string;
}

class ChildOfUser extends User{

    constructor(childOfUser: ChildOfUserInterface){
        super(childOfUser.id, childOfUser.names, childOfUser.lastNames,childOfUser.age, childOfUser.address)
    }

}