"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(names, lastnames, cel) {
        this._names = names;
        this._lastnames = lastnames;
        this._cel = cel;
    }
    get names() {
        return this._names;
    }
    get lastnames() {
        return this._lastnames;
    }
    get cel() {
        return this._cel;
    }
    set names(value) {
        this._names = value;
    }
    set lastnames(value) {
        this._lastnames = value;
    }
    set cel(value) {
        this._cel = value;
    }
}
exports.default = Contact;
