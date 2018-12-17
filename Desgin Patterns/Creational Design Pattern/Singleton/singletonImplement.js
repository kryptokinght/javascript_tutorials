import counterGenerator from './counterGeneratorSingleton';

(function (window, cg) {
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        const counterGen = cg.getInstance();
        counterGen.increment();
    });
})(window, counterGenerator);