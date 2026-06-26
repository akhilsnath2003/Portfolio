gsap.from(".logo",{
    y:-50,
    opacity:0,
    duration:1.2
});

gsap.from(".nav-links li",{
    y:-50,
    opacity:0,
    duration:2.1,
    stagger:0.15,
    ease:"power3.out"
});
console.log("Hello World");