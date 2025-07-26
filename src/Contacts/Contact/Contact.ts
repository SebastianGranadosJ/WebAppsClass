export default class Contact {
    private _names: string;
    private _lastnames: string;
    private _cel: string;

    constructor(names: string, lastnames: string, cel: string) {
        this._names = names;
        this._lastnames = lastnames;
        this._cel = cel;
    }

    public get names(): string {
        return this._names;
    }

    public get lastnames(): string {
        return this._lastnames;
    }

    public get cel(): string {
        return this._cel;
    }

  
    public set names(value: string) {
        this._names = value;
    }

    public set lastnames(value: string) {
        this._lastnames = value;
    }

    public set cel(value: string) {
        this._cel = value;
    }
}
