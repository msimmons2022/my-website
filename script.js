
document.addEventListener('DOMContentLoaded', function() {
    // Navigation bar script
    window.onscroll = function() {navFunction()};

    var navBar = document.getElementById("navBar");
    var sticky = navBar.offsetTop;

    function navFunction() {
        if(window.pageYOffset >= sticky){
            navBar.classList.add("sticky")
        } else {
            navBar.classList.remove("sticky");
        }
    }
})