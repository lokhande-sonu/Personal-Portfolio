// Mobile Menu Toggle Function
function myMenuFunction() {
    const navmenuBtn = document.getElementById("mynavmenu");
    menuBtn.classList.toggle("responsive");
}

// Dark Mode Toggle
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-swtich");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// Typed Text Effect
document.addEventListener('DOMContentLoaded', () => {
    new Typed(".typedText", {
        strings: ["Designer", "Coder", "Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
    });
});