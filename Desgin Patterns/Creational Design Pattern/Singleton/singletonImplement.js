import counterGenerator from './counterGeneratorSingleton.js';
(function(window, counterGenerator) {
    let btn = document.getElementById('btn');
    btn.addEventListener('click', (event) => {
        let counterGen = counterGenerator.getInstance();
        counterGen.increment();
    });
})(window, counterGenerator);