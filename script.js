document.addEventListener("DOMContentLoaded", function() {
    // import { gsap } from "gsap/dist/gsap";
gsap.registerPlugin(SplitText);

let text = new SplitText(".hero", {type:"words,chars"});

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

gsap.from(text.words,{
    delay:1.5,
    scale: 3,
    y:60,
    autoAlpha:0,
    stagger:0.3,
    // opacity:0,
    // ease:"power3.out",
    // duration:1.2,
    // stagger  : {
    //     each:0.2,
    //     from:"end"

    })
// gsap.registerPlugin(TextPlugin);

// const tl = gsap.timeline({ repeat: -1 });

// tl.to("#typing", {
//   duration: 1,
//   text: "BU"
// })
// .to({}, { duration: 1 }) // pause
// .to("#typing", {
//   duration: 0.8,
//   text: ""
// })
// .to("#typing", {
//   duration: 1,
//   text: "BUILD GAMES"
// })
// .to({}, { duration: 1 })
// .to("#typing", {
//   duration: 0.8,
//   text: ""
// });
})