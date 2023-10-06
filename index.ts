class Greeter {
    private name: String;

    constructor(name:string) {
        this.name = name;
    }
    public greet():string {
        return 'Hello ${this.name}!'
    }
}
console.log(new Greeter("Paweł").greet());