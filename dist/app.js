// Mobile navigation toggle

let openButton = document.getElementById("openBtn");
let closeButton = document.getElementById("closeBtn");
let mobileMenu = document.getElementById("mobileNav");

openBtn.onclick = () => {
    mobileMenu.style.display = "block";
    openButton.style.display= "none"
}

closeButton.onclick = () =>{
    mobileMenu.style.display = "none";
    openButton.style.display = "block"
}
