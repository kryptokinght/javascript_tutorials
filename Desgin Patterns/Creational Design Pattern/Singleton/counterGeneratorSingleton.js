let CounterGenerator = (function() {
    let instance = null;

    function init() {
        let _counter = 0;
        function _log() {
            console.log("counter", _counter);
        }
        function increment() {
            _counter++;
            _log();
        }
        function decrement() {
            _counter--;
            _log();
        }
        return {
            increment: increment,
            decrement: decrement
        };
    }

    return {
        getInstance: () => {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

export default CounterGenerator;