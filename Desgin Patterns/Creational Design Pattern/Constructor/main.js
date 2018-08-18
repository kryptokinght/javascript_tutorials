//const Task = require('./task.js');
const Task = require('./taskClass.js');

//creating various tasks
var task1= new Task("Task 1");
var task2= new Task("Task 2");
var task3= new Task("Task 3");

task1.complete();
task2.complete();
task1.save();
task2.save();
task3.save();   