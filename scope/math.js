
const math = (function () {
    let value = 10;
    const elem = document.querySelector('.value');
    elem.textContent = value;

    function increase() {
        value++;
        elem.textContent = value;
    }

    return {
        increase: increase
    }
})()
