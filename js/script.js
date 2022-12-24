
const result = document.getElementById('result');
const equally = document.getElementById('calculator__btn-equally');
const calc = document.querySelector('.calculator__bottom');

calc.addEventListener('click', function(e) {
    if(!e.target.classList.contains('calculator__btn')) return;
    console.log(e.target);


    e.target.classList = 'calculator__btn calculator__btn-rotate';
    const animationDisable = function() {
        e.target.classList = 'calculator__btn'
    }

    window.setTimeout(animationDisable, 500);

    
    let value = e.target.innerText;
    result.value += value;
    if (e.target.innerText === 'CE') {
        result.value = '';
    }
});
const results = function() {
    if (result.value === '') {
        result.value = '';
    } else {
        result.value = eval(result.value);
    }
};

equally.addEventListener('click', results);