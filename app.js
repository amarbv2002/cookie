const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power1.out" } })

tl.fromTo(".cookie-content", { scale: 0, rotate: "180deg" }, { scale: 1, rotate: "0deg" })
tl.fromTo(".single-cookie", { opacity: 0, rotate: "-90deg" }, { rotate: "0deg", opacity: 1, ease: "bounce.out", duration: 1 })
tl.fromTo('.text-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, ease: "bounce.out", duration: 1 }, "<")

//Crumbs
tl.fromTo(".single-cookie", { y: 0, rotate: "0deg" }, { y: -15, rotate: "-20deg", yoyo: true, repeat: -1, duration: 1 })
tl.fromTo("#crumbs", { opacity: 0.75 }, { opacity: 1, yoyo: true, repeat: -1, duration: 1 }, "<")

const button = document.querySelector(".btn")

button.addEventListener("click", () => {
    gsap.to(".cookie-content", { scale: 0, rotate: "180deg", opacity: 0 })
})