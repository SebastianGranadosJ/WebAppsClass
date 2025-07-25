"use strict";
// TypeScript agrega el tipado
let _num = 123;
// Flotante
_num = 123.456;
let _boo = true;
let _str = "text";
// Cualquier cosa, no usar xdxdxd, sirve para cuando en una api me mandan una vaina rara
let _anny = "any";
const PI = 3.14; // Escrito con mayusculas para saber que es constante, puro vizaje jajaja (estandar)
let numArray = [0, 1, 2];
// tupla
let _tuple = ["te", 1];
let _null = null;
// Funncion sintaxis
function add(n1, n2) {
    return n1 + n2;
}
// recibir varios tipos en un argumento
const addFunc = function add(n1, n2) {
    return 1;
};
// void
const _voidFunc = () => {
};
function testInterface(student) {
    return student.names;
}
console.log(testInterface({ id: 1, names: "lenin", lastNames: "cabra", age: 19 }));
class User {
    constructor(id, names, lastnames, age, address) {
        this.id = id;
        this.lastNames = lastnames;
        this.names = names;
        this.age = age;
        this._address = address;
    }
    // poder usarlo de esta manera user.address
    set address(address) {
        this._address = address;
    }
    get address() {
        return this._address;
    }
    // Otra manera
    setAddress(address) {
        this._address = address;
    }
    getAddress() {
        return this._address;
    }
}
// Constante es la direccion de memoria del usuario
const user = new User(123, "lenun", "serrano", 20, "calle 1 con 2");
user.address = "asdasd";
user.setAddress("asdas");
class ChildOfUser extends User {
    constructor(childOfUser) {
        super(childOfUser.id, childOfUser.names, childOfUser.lastNames, childOfUser.age, childOfUser.address);
    }
}
