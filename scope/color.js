
const colorElement = document.querySelector('.value')

function value(num) {
    if (num >= 12) {
        return 'red';
    } else {
        return 'black';
    }
}

function colorize() {
    const val = colorElement.textContent;
    const num = parseInt(val);
    colorElement.style.color = value(num);
}