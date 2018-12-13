function Task(name) {
    this.name = name; //public
    this.completed = false; //public
}

Task.prototype.save = function() {
    console.log(`Saving task ${this.name}`);
}

Task.prototype.complete = function() {
    console.log("Completing task " + this.completed);
    this.completed = true;
}

module.exports = Task;