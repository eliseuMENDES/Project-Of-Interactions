// const themeToggle = document.getElementById("theme-toggle");
// themeToggle.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
// })

// document.querySelectorAll('a[href^="#"').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollInToView({
//             behavior: 'smooth'
//         });
//     });
// });

const input = document.getElementById('user-input');
const button = document.getElementById('send-button');
const resultDiv = document.getElementById('result');

button.addEventListener('click', () => {
    const inputValue = input.value;
    if (inputValue) {
        resultDiv.textContent = `Você digitou: ${inputValue}`
    } else {
        resultDiv.textContent = 'Por favor, digite algo.';
    }
});