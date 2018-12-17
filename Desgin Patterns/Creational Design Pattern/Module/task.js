const db = require('./Database');

function Task(data) {
    this.name = data.name;
    this.completed = false;
}

Task.prototype.save = function () {
    console.log(`Saving task ${this.name}`);
    db.save(this);

}

Task.prototype.complete = function () {
    console.log(`Completing task: ${this.name}`);
    this.completed = true;
}

module.exports = Task;