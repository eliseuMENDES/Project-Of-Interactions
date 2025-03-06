// const themeToggle = document.getElementById("theme-toggle");
// themeToggle.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
// })

document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollInToView({
            behavior: 'smooth'
        });
    });
});