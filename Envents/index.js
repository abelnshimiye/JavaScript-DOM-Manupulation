
// function for inline event handler
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "you are changed !!!!";
}

const button = document.querySelector('button');
button.onclick = changeText;