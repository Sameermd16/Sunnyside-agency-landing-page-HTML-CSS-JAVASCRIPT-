const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
const iconWrap = document.getElementById("icon-wrap");

hamburger.addEventListener("click", () => {
   if (mobileNav.classList.contains("opacity-none")){
    mobileNav.classList.remove("opacity-none");
    iconWrap.classList.add("opacity-none");
   }else {
    mobileNav.classList.add("opacity-none");
    iconWrap.classList.remove("opacity-none");
   }
})