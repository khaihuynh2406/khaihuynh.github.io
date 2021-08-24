function openMobileNav() {
    var x = document.querySelector(".m-sidebar");
    x.style.display = "block";
}
function closeMobileNav() {
    var x = document.querySelector(".m-sidebar");
    x.style.display = "none";
    var y = document.querySelector(".m-dropdown-contents");
    y.style.display = "none";
}

function toggleMobileNav() {
    var x = document.querySelector(".m-dropdown-contents");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}