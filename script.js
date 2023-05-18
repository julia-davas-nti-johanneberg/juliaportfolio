// hämtar html-taggar
const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

// taggarna togglas
function toggleMeny() {
    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')
}

// lyssnar när någon klickar på hamburgarmenyn
burger.addEventListener('click', toggleMeny)








myID = document.getElementById("myID");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = "bottomMenu show"
    } else {
        myID.className = "bottomMenu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);