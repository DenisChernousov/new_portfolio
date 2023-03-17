
document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
});



window.onload = function () {
    window.setInterval(function () {
        let date = new Date();

        let hours = date.getHours();
        let minute = date.getMinutes();

        let clock = hours + ":" + minute;

        document.getElementById("clock").innerHTML = clock;
    }

    );
}

let text = `Могу, умею, практикую!
HTML, CSS, JavaScript, WordPress, 
React и что-то еще - я же все-таки джун, обучусь :) `;

let p = document.querySelector('.type-1');
let text1 = '';
let input = (i) => {
    setTimeout(() => {
        text1 += text[i];
        p.textContent = text1;
    }, 50 * i)
}
for (let i = 0; i < text.length - 1; i++) {
    input(i);
}