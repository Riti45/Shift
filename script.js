
let card = document.querySelectorAll(".trend");
let card2 = document.querySelectorAll(".trendSec");
let about = document.querySelectorAll(".about");
let contact = document.querySelectorAll(".contact");
let blogs = document.querySelectorAll(".trends"); // Added missing variable

let mainPage = document.querySelector(".main");

function homes(){
    mainPage.style.display = "flex";
    card.forEach(item => item.style.display = "block");
    card2.style.display = "block";
    blogs.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";

    // Update color for navigation links
    resetNavColors();
    document.getElementById("home").style.color = "rgb(2,173,173)";
}

function shops(){
    mainPage.style.display = "none";
    blogs.style.display = "none";

    resetNavColors();
    document.getElementById("shop").style.color = "rgb(2,173,173)";
}

function blogs(){
    mainPage.style.display = "none";
    card.forEach(item => item.style.display = "none");
    card2.style.display = "none";
    blogs.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";

    resetNavColors();
    document.getElementById("blogs").style.color = "rgb(2,173,173)";
}

function abouts(){
    mainPage.style.display = "none";
    card.forEach(item => item.style.display = "none");
    card2.style.display = "none";
    blogs.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";

    resetNavColors();
    document.getElementById("about").style.color = "rgb(2,173,173)";
}

function contacts(){
    mainPage.style.display = "none";
    card.forEach(item => item.style.display = "none");
    card2.style.display = "none";
    blogs.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";

    resetNavColors();
    document.getElementById("contact").style.color = "rgb(2,173,173)";
}

function show(img){
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;

    mainPage.style.display = "none";
    card.forEach(item => item.style.display = "none");
    card2.style.display = "none";
    blogs.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "flex";
}

function addCart(){
    alert("Added To Cart");
    location.reload();
}

function resetNavColors() {
    let navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => link.style.color = "black");
}
