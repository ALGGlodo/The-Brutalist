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