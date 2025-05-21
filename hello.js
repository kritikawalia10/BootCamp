class Hello{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        return `Hello ${this.name}`;
    }
}

module.exports = Hello;