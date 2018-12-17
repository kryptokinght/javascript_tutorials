const CounterGenerator = (function () {
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
            _counter -= 1;
            _log();
        }
        return {
            increment,
            decrement
        };
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

export default CounterGenerator;