const Task = require('./task');
const db = require('./Database');

// creating various tasks
const task1 = new Task(db.get(13245));
task1.complete();
task1.save();