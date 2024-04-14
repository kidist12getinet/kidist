function mymenufunction(){
  var menuBth = document.getElementById("mynavmenu");
  if(menuBth.className === "nav-menu"){
    menuBth.className += "responsive";
  } 
  else{
    menuBth.className = "nav-menu";
  } 
}
/*---dark mode----*/
const body = document.querySelector("body"),
     toggleswitch = document.getElementById("toggle-switch");

toggleswitch.addEventListener("click",()=> {
   body.classList.toggle("dark");
});
/*----type effect----*/
var typingEffect = new Typed(".typedText",{
    strings: ["Designer","Coder","Developer"],


    loop:true,
    typespeed:100,
    backspeed:80,
    backdelay:2000,
})
/*-----scroil animation-----*/
const sr = ScrollReveal({
    origin:"top",
    distance:"80px",
    duration:2000,
    reset:true,
});
sr.reveal(".featured-name", {delay: 100});
sr.reveal(".text-info", {delay: 200});
sr.reveal(".text-btn", {delay: 200});
sr.reveal(".social-icons", {delay: 200});
sr.reveal(".featured-image", {delay: 320});


sr.reveal(".project-box", {interval: 200});
sr.reveal(".top-header",{});

const srleft = ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
});
srleft.reveal(".about-info",{ delay:100});
srleft.reveal(".contact-info",{ delay:100});

const srRight = ScrollReveal({
    origin:"left",
    distance:"80px",
    duration:2000,
    reset:true,
});

srRight.reveal(".skill", { delay: 100});
srRight.reveal(".skill-box", { delay: 100});
/*----active link---*/
const sections = document.querySelectorAll(".section[id]");

function scrollactive() {
const scrollY = window.scrollY;
Selection.forEach((current) => {
  const sectionHeight = current.offsetHeight,
  sectionTop = current.offsetTop -50,
  sectionId = current.getAttribute("id");
  
  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    document
    .querySelector(".nav-menu a[href*=" + sectionId + "]")
    .classList.add("active-link");
  }
  else{
    document
    .querySelector(".nav-menu a[href*=" + sectionId + "]")
    .classList.remove("active-link");
  }
});
}
window.addEventListener("scroll", scrollActive);
    
