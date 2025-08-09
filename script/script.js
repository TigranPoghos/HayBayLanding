document.addEventListener("DOMContentLoaded", () => {


    gsap.registerPlugin(DrawSVGPlugin,MorphSVGPlugin,ScrollTrigger)
    const mm = gsap.matchMedia();
    const tl = gsap.timeline();

    tl.to('.titleGsap', {
        backgroundSize: "100% 100%",
        duration: 2,
        ease: "power2.inOut",
        delay: 0.5,
    })

    tl.to('.titleGsap', {
        left: 'auto',
        bottom: 'auto',
        duration: 1,
    })

    tl.to('.titleGsap', {
        position: 'relative',
        margin: '0 0 35px 0',
        color: 'black',
        duration: 0.5
    })

    tl.to('.main__fon', {
        width: 0,
        height: 0,
        duration: 0.5
    }, '<')

    tl.to('.arrow', {
          duration: 2,
  ease: "power2.inOut",
  clipPath: "inset(0% 0% 0% 0%)"
    })






})




