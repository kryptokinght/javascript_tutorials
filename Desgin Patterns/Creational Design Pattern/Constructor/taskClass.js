class Task {

    constructor(name) {
        this.name = name;
        this.completed = false;
    };

    save() {
        console.log(`Saving task ${this.name}`);
    };

    complete() {
        console.log("Completing task " + this.name);
        this.completed = true;
    };   
}

module.exports = Task;