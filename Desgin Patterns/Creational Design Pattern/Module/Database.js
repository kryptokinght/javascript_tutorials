//Revealing module concept used

function database() {

    //var db = {}; //random database connection
    const get = function(id) {
        console.log("Getting task from db", id);
        return {
            name: "new task from db"
        };
    }
    const save = function(task) {
        console.log(`Saving task into db: ${task.name}`);
    } 

    return {
        get: get,
        save: save
    };
}

module.exports = database();