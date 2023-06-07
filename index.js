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
// Contact Form

function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    const serviceID = 'service_pho2ilc'
    const templateID = 'template_nzyvrie'

    emailjs.send(serviceID, templateID, params)
    .then(
        (res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Message Sent Successfully. Please frequently check your email for responses.");
        })
        .catch((err) => console.log(err));
}