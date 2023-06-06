// Navbar toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('right-navbar')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

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