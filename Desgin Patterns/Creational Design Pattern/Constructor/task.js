function Task(name) {
    this.name = name; // public
    this.completed = false; // public
}

Task.prototype.save = (parent = this) => {
    console.log(`Saving task ${parent.name}`);
}

Task.prototype.complete = () => {
    console.log(`Completing task ${this.completed}`);
    this.completed = true;
}

const obj = new Task('Minanshu');
obj.save();

module.exports = Task;