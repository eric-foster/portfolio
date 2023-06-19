// Navbar toggle
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.right-navbar');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active')
    navbarLinks.classList.toggle('active')
})

document.querySelectorAll(".right-navbar").forEach(n => n.addEventListener("click", () => {
    toggleButton.classList.remove('active');
    navbarLinks.classList.remove('active');
}))
