let regexEmail = /^[^\s@]+@[^\s@]+\.[a-z]+$/;

function validation() {
    let email = document.getElementById("email").value;
    let form = document.getElementById("form");
    let text = document.getElementById("text");

    if (email.match(regexEmail)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Email correcto";
        text.style.color = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Email incorrecto";
        text.style.color = "#ff0000";
    }
}
