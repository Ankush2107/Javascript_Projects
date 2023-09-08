Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {videos: ["./0.mp4", "./2.mp4", "./3.mp4"]});


gsap.to(".left_element", {
    scrollTrigger: {
        trigger: "#images",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
})


let section = document.querySelectorAll(".left_element");
Shery.imageEffect(".right_images", {
    style: 5, 
    slideStyle: (setScroll) => {
       section.forEach(function(section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog) {
                    setScroll(prog.progress+index)
                }
            })
       })
    }
});