const form = document.getElementById("whatsappForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let whatsappMessage =
  `Hello NV Hub!%0A%0A`
  + `Name: ${name}%0A`
  + `Phone: ${phone}%0A`
  + `Issue: ${message}`;

  let whatsappURL =
  `https://wa.me/918796493504?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");

});

/* Navbar Background Change */

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.background = "#06141f";
  } else{
    navbar.style.background = "rgba(0,0,0,0.5)";
  }

});

/* Smooth Reveal Animation */

const revealElements = document.querySelectorAll(
  ".card, .service-box, .stat-box, .about img, .contact-form"
);

window.addEventListener("scroll", reveal);

function reveal(){

  revealElements.forEach((element)=>{

    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      element.style.opacity = "1";
      element.style.transform = "translateY(0)";

    }

  });

}

revealElements.forEach((element)=>{

  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "all 1s ease";

});
