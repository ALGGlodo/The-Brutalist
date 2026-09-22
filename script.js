gsap.registerPlugin(ScrollTrigger);

gsap.from(".img-box", {
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 100%", // animation starts when gallery is 80% into viewport
    },
    y: 60,
    opacity: 0,
    duration: 0.6,
    ease: "power4.out", // sharp, blunt deceleration — fits brutalist feel
    stagger: 0.15, // each box animates 0.15s after the previous
});

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("header nav");

navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", false);
    });
});