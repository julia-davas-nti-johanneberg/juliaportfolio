// hamburgemeny

const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')

function toggleMeny() {
    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMeny)

// pil upp

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