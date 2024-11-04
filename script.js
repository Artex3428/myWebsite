/* Copyright date */
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${month}-${day}-${year}`;

document.getElementById("date").innerHTML = formattedDate;



/* My age */
const birthDate = new Date(2005, 1, 14);

function updateAge() {
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();
    const dayDiff = now.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById("age").textContent = age;
}

setInterval(updateAge, 1000);
updateAge();



/* Navbar */
var navBar = document.getElementById("nav");
var navImgContainer = document.getElementById("nav-img-container");
var navList = document.getElementById("nav-list");
var navSecoundList = document.getElementById("secound-nav-list");

function navOpen() {
    navList.style.display = "flex";
    navSecoundList.style.display = "flex";
    navBar.style.paddingBottom = "25px";
    navBar.style.justifyContent = "flex-start";
}

function navClose() {
    navList.style.display = "none";
    navSecoundList.style.display = "none";
    navBar.style.paddingBottom = "0";
    navBar.style.justifyContent = "center";
}

function toggleNav() {
    if (navList.style.display === "flex") {
        navClose();
    } else {
        navOpen();
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 625) {
        navList.style.display = "flex";
        navSecoundList.style.display = "flex";
        navBar.style.paddingBottom = "0";
        navBar.style.justifyContent = "space-between";
    } else {
        navClose();
    }
});







function scrollToSection(event, sectionId, containerId) {
    event.preventDefault(); // Prevent default anchor behavior
  
    const element = document.getElementById(sectionId);
    const container = document.getElementById(containerId);
    if (element) {
      // Scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
  
      // Add highlight class to element and remove it after animation
      container.classList.add('highlight');
      setTimeout(() => {
        container.classList.remove('highlight');
      }, 500); // Match the animation duration (1 second in this case)
    }
  }