const btnChange = document.getElementById('btnChange');
const imgButton = document.getElementById('imgButton');
const body = document.getElementById('body');
const h1 = document.querySelector('h1');

function changeColor() {
    btnChange.classList.toggle('btn-change');

    if(btnChange.classList.contains('btn-change') === true) {
        imgButton.src = "assets/moon.svg";

        btnChange.style.justifyContent = 'flex-start';
        btnChange.style.backgroundColor = 'white';

        body.style.backgroundColor = "var(--dark)";

        if(body.style.backgroundColor === "var(--dark)") {
            const h1 = document.querySelector('h1');

            h1.style.color = "white"
        }

    } else {
        imgButton.src = "assets/sun.svg";

        btnChange.style.backgroundColor = 'var(--dark)';
        btnChange.style.justifyContent = 'flex-end';
        console.log('light')

        body.style.backgroundColor = "white";
        
        h1.style.color = "black"
    }

}