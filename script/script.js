document.addEventListener("DOMContentLoaded", () => {


    gsap.registerPlugin(DrawSVGPlugin,MorphSVGPlugin,ScrollTrigger)
    const mm = gsap.matchMedia();
    const tl = gsap.timeline();


    // Проверяем, был ли уже заход в этой сессии
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
        // Первый заход
        tl.to('.titleGsap', {
            backgroundSize: "100% 100%",
            duration: 2,
            ease: "power2.inOut",
            delay: 0.5,
        });

        tl.to('.titleGsap', {
            left: 'auto',
            bottom: 'auto',
            duration: 1,
        });

        tl.to('.titleGsap', {
            position: 'relative',
            margin: '0 0 35px 0',
            color: '#16192F',
            duration: 0.5,
        });

        tl.to('.main__fon', {
            opacity: 0,
            duration: 0.5,
            zIndex: '-100',
        }, '<');

        tl.to('body', {
            overflow: 'auto'
        });

        // Второй блок анимаций
        tl.to('.arrow', {
            duration: 1,
            ease: "power2.inOut",
            clipPath: "inset(0% 0% 0% 0%)"
        });

        tl.from('.product__stand', {
            right: '-650px',
            duration: 1
        }, '<');

        tl.to('.header__middle-line', {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "power2.inOut"
        }, '<');

        // Сохраняем отметку, что анимация уже проигрывалась
        sessionStorage.setItem("visited", "true");

    } else {
        // Повторный заход — сразу финальные стили первого блока
        gsap.set('.titleGsap', {
            position: 'relative',
            left: 'auto',
            bottom: 'auto',
            margin: '0 0 35px 0',
            color: '#16192F'
        });

        gsap.set('body', { overflow: 'auto' });

        gsap.set('.main__fon', { display: 'none' });

        // И сразу запускаем второй блок
        tl.to('.arrow', {
            duration: 1,
            ease: "power2.inOut",
            clipPath: "inset(0% 0% 0% 0%)"
        });

        tl.from('.product__stand', {
            right: '-650px',
            duration: 1
        }, '<');

        tl.to('.header__middle-line', {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "power2.inOut"
        }, '<');
    }








})




