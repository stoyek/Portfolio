// --Toogle Menu START
toggleMenu();
console.log('nyu ?');


function toggleMenu() {
  const navbar = document.querySelector(".navbar_container");
  const burger = document.querySelector(".burger");
  const bar = document.querySelector(".bar_container");
  const main = document.querySelector("main");
  const text = document.querySelectorAll(".nav_text");

  for (let i = 0; i < text.length; i++) {
    text[i].addEventListener("click", () =>{
      if (navbar.classList.contains("show-nav")) {
        openCloseNav();
      }
    })
  }
  // Close menu
  main.addEventListener("click", () =>{
    if(navbar.classList.contains("show-nav")){
      openCloseNav();
    }
  })
  
  burger.addEventListener("click", () => {
    openCloseNav();
  });
  
  function openCloseNav() {
    bar.classList.toggle("align");
    navbar.classList.toggle("show-nav");
    setTimeout(function () {
      bar.classList.toggle("cross");
    }, 300);
  }
}

function closeMenu() {}
// --Toggle Menu END

// --Animation visible START
isScrolledInTOView();

function isScrolledInTOView() {
  let cards = document.querySelector("#hardSkills");
  let progressBar = document.querySelectorAll(".progress_bar");
  addEventListener("scroll", () => {
    if (scrollY >= cards.offsetTop - cards.clientHeight * 2) {
      for (let i = 0; i < progressBar.length; i++) {
        progressBar[i].classList.add("progress_anime");
      }
    }
  });
}

// --Animation visible END

// --Nav md:Onscroll bg START
navScroll();

function navScroll() {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".navLi");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    let i;
    for (i = 0; i < sections.length; i++) {
      navLi[i].classList.remove("active");
      if (navLi[i].classList.contains(current)) {
        navLi[i].classList.add("active");
      }
    }
  });
}

// --Nav md:Onscroll bg END

// --Slide Portfolio START
let slideIndex = 1;

// Show slide function
showSlides(slideIndex);

// Change slide with buttons
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Change slide with dots
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".portfolio_slide");
  let toggleInfo = document.querySelectorAll(".link_slide");
  let dots = document.querySelectorAll(".dot");

  
  // Boucle slides
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  // Reset slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].style.backgroundColor = "#F8F8F8";
    // toggleInfo[i].classList.remove("toggle-info");
  }
  
  console.log("a/ n:", n, "SlideIndex: ", slideIndex);
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.backgroundColor = "#D66853";
  slides[slideIndex - 1].addEventListener("click", () => {
    toggleInfo[slideIndex - 1].classList.toggle("toggle-info");
  });
}
// --Slides Portfolio END
