gsap.registerPlugin(SplitText);


gsap.from(".logo", {
    x: '-100%',
    duration: 1
})

gsap.from("nav", {
    opacity: 0,
    y: '100%',
    duration: 1
})

gsap.from(".btn", {
    x: '100%',
    duration: 1
})

gsap.from(".social-wrapper", {
    opacity: 0,
    y: '100%',
    duration: 1
})

gsap.from("p", {
    opacity: 0,
    duration: 1,
    delay: 1
})

let split = SplitText.create("h1", { type: "words, chars" });


gsap.from(split.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-80, 80)",
    duration: 1.2, 
    ease: "back",
    stagger: 0.25
})