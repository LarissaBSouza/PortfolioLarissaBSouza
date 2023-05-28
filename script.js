const nome = "<LarissaBandeira/>";
const strong = document.getElementById("name");

function digitar() {
    let i = 0;

    const interval = setInterval(() => {
        strong.textContent += nome[i];
        i++;
        if (i === nome.length) {
            clearInterval(interval);
        }
    }, 300);
}

digitar();