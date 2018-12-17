// Revealing module concept used

function database() {

    // var db = {}; //random database connection
    const get = (id) => {
        console.log("Getting task from db", id);
        return {
            name: "new task from db"
        };
    }
    const save = (task) => {
        console.log(`Saving task into db: ${task.name}`);
    }

    return {
        get,
        save
    };
}

module.exports = database();