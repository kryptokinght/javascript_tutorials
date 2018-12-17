/* eslint-disable no-alert */
/*
Ensure there is only one instance of that class for example an object that 
manages databse management pool.
*/

const Singleton = (function () {
    let instance;

    function createInstance() {
        const object = { "name": "Minanshu" };
        return object;
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function run() {

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    alert(`Same instance? ${instance1 === instance2}`);
}

run();