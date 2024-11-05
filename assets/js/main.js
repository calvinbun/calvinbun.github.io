/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
  
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function () {
    headerShadow();
  };
  
  function headerShadow() {
    const navHeader = document.getElementById("header");
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }
  
  /* ----- TYPING EFFECT ----- */
  var typingEffect = new Typed(".typedText", {
    strings: ["an Engineer", "an Innovator", "a Problem-Solver"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });
  
  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  /* -- HOME -- */
  sr.reveal(".featured-text-card", {});
  sr.reveal(".featured-name", { delay: 100 });
  sr.reveal(".featured-text-info", { delay: 200 });
  sr.reveal(".featured-text-btn", { delay: 200 });
  sr.reveal(".social_icons", { delay: 200 });
  sr.reveal(".featured-image", { delay: 300 });
  
  /* -- PROJECT BOX -- */
  sr.reveal(".project-box", { interval: 200 });
  // sr.reveal(".award-object", { interval: 200 });
  /* -- HEADINGS -- */
  sr.reveal(".top-header", {});
  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  srLeft.reveal(".about-info", { delay: 100 });
  srLeft.reveal(".contact-info", { delay: 100 });
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  srRight.reveal(".skills-box", { delay: 100 });
  srRight.reveal(".form-control", { delay: 100 });
  
  /* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll("section[id]");
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  }
  window.addEventListener("scroll", scrollActive);
  



// MODALS



  // Get DOM Elements
const modal = document.querySelector('#my-modal');
const firstModal = document.querySelector('#first-modal');
const secondModal = document.querySelector('#second-modal');
const thirdModal = document.querySelector('#third-modal');
const fourthModal = document.querySelector('#fourth-modal');
const fifthModal = document.querySelector('#fifth-modal');
const sixthModal = document.querySelector('#sixth-modal');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close');
const firstCloseBtn = document.querySelector('.first-close');
const secondCloseBtn = document.querySelector('.second-close');
const thirdCloseBtn = document.querySelector('.third-close');
const fourthCloseBtn = document.querySelector('.fourth-close');
const fifthCloseBtn = document.querySelector('.fifth-close');
const sixthCloseBtn = document.querySelector('.sixth-close');
const modalBtn2 = document.querySelector('.modal-btn2');
const modalBtn3 = document.querySelector('.modal-btn3');
const firstModalBtn = document.querySelector('.first-modal-btn');
const secondModalBtn = document.querySelector('.second-modal-btn');
const thirdModalBtn = document.querySelector('.third-modal-btn');
const fourthModalBtn = document.querySelector('.fourth-modal-btn');
const fifthModalBtn = document.querySelector('.fifth-modal-btn');
const sixthModalBtn = document.querySelector('.sixth-modal-btn');

// Events
modalBtn.addEventListener('click', openCVModal);
modalBtn2.addEventListener('click', openCVModal);
firstModalBtn.addEventListener('click', openFirstModal)
secondModalBtn.addEventListener('click', openSecondModal)
thirdModalBtn.addEventListener('click', openThirdModal)
fourthModalBtn.addEventListener('click', openFourthModal)
fifthModalBtn.addEventListener('click', openFifthModal)
sixthModalBtn.addEventListener('click', openSixthModal)
modalBtn3.addEventListener('click', openCVModal);
closeBtn.addEventListener('click', closeModal);
firstCloseBtn.addEventListener('click', firstCloseModal);
secondCloseBtn.addEventListener('click', secondCloseModal);
thirdCloseBtn.addEventListener('click', thirdCloseModal);
fourthCloseBtn.addEventListener('click', fourthCloseModal);
fifthCloseBtn.addEventListener('click', fifthCloseModal);
sixthCloseBtn.addEventListener('click', sixthCloseModal);
window.addEventListener('click', outsideClick);

// Open
function openCVModal() {
  modal.style.display = 'block';
}
function openFirstModal() {
  firstModal.style.display = 'block';
}
function openSecondModal() {
  secondModal.style.display = 'block';
}
function openThirdModal() {
  thirdModal.style.display = 'block';
}
function openFourthModal() {
  fourthModal.style.display = 'block';
}
function openFifthModal() {
  fifthModal.style.display = 'block';
}
function openSixthModal() {
  sixthModal.style.display = 'block';
}


// Close
function closeModal() {
  modal.style.display = 'none';
}

function firstCloseModal() {
  firstModal.style.display = 'none';
}

function secondCloseModal() {
  secondModal.style.display = 'none';
}

function thirdCloseModal() {
  thirdModal.style.display = 'none';
}

function fourthCloseModal() {
  fourthModal.style.display = 'none';
}

function fifthCloseModal() {
  fifthModal.style.display = 'none';
}

function sixthCloseModal() {
  sixthModal.style.display = 'none';
}


// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  } else if (e.target == firstModal) {
    firstModal.style.display = 'none';
  } else if (e.target == secondModal) {
    secondModal.style.display = 'none';
  } else if (e.target == thirdModal) {
    thirdModal.style.display = 'none';
  } else if (e.target == fourthModal) {
    fourthModal.style.display = 'none';
  } else if (e.target == fifthModal) {
    fifthModal.style.display = 'none';
  } else if (e.target == sixthModal) {
    sixthModal.style.display = 'none';
  }
}
