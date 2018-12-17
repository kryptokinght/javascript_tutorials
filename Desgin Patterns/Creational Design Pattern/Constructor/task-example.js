/*
var task = {
    title: "My title",
    description: "My descritpion"
}; */

const task = {};
task.title = "Task Title";
task.description = "My task description";
Object.defineProperty(task, "toString", {
    value: () => `${task.title} ${task.description}`,
    writable: false, // value of toString cannot be changed
    enumerable: false, // doesn't show this property when you do Object.keys
    configurable: false // when false the property toString cannot be redefined using Object.defineProperty
});



// task.toString = ()  => `${task.title} ${task.description}`;

console.log(task.toString());
