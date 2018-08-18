function Task(name) {
    this.name = name;
    this.completed = false;
}

Task.prototype.save = function() {
    console.log(`Saving task ${this.name}`);
}

Task.prototype.complete = function() {
    console.log("Completing task " + this.name);
    this.completed = true;
}

module.exports = Task;