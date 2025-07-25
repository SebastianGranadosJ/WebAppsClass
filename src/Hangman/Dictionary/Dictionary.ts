export default class Dictionary {

    private words: string[] = ["interface", "type","enum", "extends", "implements", "readonly", "namespace", "abstract",
    "declare","as"];

    constructor(){}

    public getRandomWord():string {
        const index = Math.floor(Math.random() * this.words.length);
        return this.words[index];
    }

}