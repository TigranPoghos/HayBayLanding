document.addEventListener("DOMContentLoaded", () => {


    gsap.registerPlugin(DrawSVGPlugin,MorphSVGPlugin,ScrollTrigger,SplitText)
    const mm = gsap.matchMedia();
    const tl = gsap.timeline();


    gsap.set("h1", { opacity: 1 });

    document.querySelectorAll('h1#heading').forEach((heading, index) => {   
        document.fonts.ready.then(() => {
            let split = SplitText.create(heading, { 
                type: "chars",
                charsClass: `char-${index}`
            });
            gsap.from(split.chars, {
                y: 20,
                autoAlpha: 0,
                stagger: 0.03,
                scrollTrigger: {
                    trigger: heading,
                    start: '100% bottom', 
                    scrub: false,
                }
            });  
        })
    });


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

    tl.from('.product__right', {
        y: 20,
        duration: 1,
    }, '<');

    tl.from('.header__top', {
        bottom: '100px',
        duration: 1,
    }, '<')

    tl.from('.header__logo', {
        x: -250,
        duration: 1,
    }, '<')

    document.querySelectorAll ('.service__line').forEach
    (serviceLine => {
        if (serviceLine) {
            gsap.to(serviceLine, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 1,
                ease: "power2.inOut",
            scrollTrigger: {
                    trigger: serviceLine,
                    start: 'bottom 95%',
                    scrub: false,
                }
            })
        }
    })

    document.querySelectorAll ('.service__subtitle').forEach
    (serviceSubtitle => {
        if (serviceSubtitle) {
            gsap.from(serviceSubtitle, {
                y: 20,
                duration: 1,
            scrollTrigger: {
                    trigger: serviceSubtitle,
                    start: '100% bottom',
                    scrub: false,
                }
            })
        }
    })

    gsap.to('.about__line', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: '.about__line',
            start: 'bottom 95%',
            scrub: false,
        }
    })

    gsap.from('.about__right', {
        x: 600,
        duration: 1,
        scrollTrigger: {
            start: 'bottom bottom',
            trigger: '.about__right-fon',
            scrub: false
        }
    })

    gsap.from('.portfolio__fon', {
        x: -2440,
        duration: 1.5,
        scrollTrigger: {
            trigger: '.portfolio__box',
            start: 'top 80%',
            scrub: false
        }
    })

    gsap.from('.portfolio__fon-1920', {
        x: -3000,
        duration: 1.5,
        scrollTrigger: {
            trigger: '.portfolio__box',
            start: 'top 80%',
            scrub: false
        }
    })

    gsap.to('.portfolio__title', {
        color: '#EEE8DF',
        scrollTrigger: {
            trigger: '.portfolio__box',
            start: 'top 80%',
            scrub: false
        }
    })

    gsap.to('.faq__line', {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: '.faq__line',
            start: 'bottom 95%',
            scrub: false,
        }
    })

    gsap.from('.faq__subtitle', {
        y: 20,
        duration: 1,
        scrollTrigger: {
            trigger: '.faq__subtitle',
            start: '100% bottom',
            scrub: false
        }
    })

    document.querySelectorAll('.FaqJs__item').forEach((faqItem, index) => {
    
        const isMobile = window.innerWidth <= 768;
        
        let xValue = '-120%';
        
        if (isMobile) {
            xValue = index % 2 === 0 ? '-120%' : '120%';
        }
        
        gsap.from(faqItem, {
            x: xValue,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: faqItem,
                start: '100% bottom',
                scrub: false,
            }
        });
    });

    gsap.from('.faq__letter', {
        x: 500,
        duration: 1,
        scrollTrigger: {
            trigger: '.faq__letter',
            start: '100% bottom',
            scrub: false,
        }
    })
    



    //вопросы

    document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('.FaqJs__item');
    
        if (!isClickInside) {
            document.querySelectorAll('.FaqJs__item').forEach(item => {
                const FaqJs__answer = item.querySelector('.FaqJs__answer');
                const FaqJs__svg = item.querySelector('.FaqJs__svg');
                const FaqJs__line = item.querySelector('.FaqJs__line');
    
                if (FaqJs__answer && FaqJs__answer.classList.contains('active')) {
                    FaqJs__answer.classList.remove('show-text');
                    setTimeout(() => {
                        FaqJs__answer.style.height = '0';
                        FaqJs__answer.classList.remove('active');
                    }, 400);
                }
                if (FaqJs__svg) FaqJs__svg.classList.remove('active');
                if (FaqJs__line) FaqJs__line.classList.remove('active');
            });
        }
    });
    document.querySelectorAll('.FaqJs__item').forEach(item => {
        item.addEventListener('click', function(event) {
    
            const FaqJs__answer = item.querySelector('.FaqJs__answer');
            const FaqJs__svg = item.querySelector('.FaqJs__svg');  
            const FaqJs__line = item.querySelector('.FaqJs__line');  
    
            document.querySelectorAll('.FaqJs__item').forEach(siblingitem => {
                if (siblingitem !== item) {
                    const siblingAnswer = siblingitem.querySelector('.FaqJs__answer');
                    const siblingSvg = siblingitem.querySelector('.FaqJs__svg');
                    const siblingLine = siblingitem.querySelector('.FaqJs__line');
    
                    if (siblingAnswer) {
                        siblingAnswer.classList.remove('show-text');
                        setTimeout(() => {
                            siblingAnswer.style.height = '0';
                            siblingAnswer.classList.remove('active');
                        }, 400);
                    }
                    if (siblingSvg) siblingSvg.classList.remove('active');
                    if (siblingLine) siblingLine.classList.remove('active');
                }
            });
    
            if (FaqJs__answer.classList.contains('active')) {
                FaqJs__answer.classList.remove('show-text');
                setTimeout(() => {
                    FaqJs__answer.style.height = '0';
                    FaqJs__answer.classList.remove('active');
                }, 400);
            } else {
                FaqJs__answer.classList.add('active');
                FaqJs__answer.style.height = FaqJs__answer.scrollHeight + 'px';
                setTimeout(() => {
                    FaqJs__answer.classList.add('show-text'); 
                }, 400);
            }
    
            if (FaqJs__svg) FaqJs__svg.classList.toggle('active');
            if (FaqJs__line) FaqJs__line.classList.toggle('active');
        });
    });    

    function scrollToTopInstant() {
        window.scrollTo(0, 0);
    }



    // Получаем кнопки меню
    const buttons = {
        service: document.querySelector('.btn-service'),
        about: document.querySelector('.btn-about'),
        project: document.querySelector('.btn-portfolio'),
        faq: document.querySelector('.btn-faq'),
        footer: document.querySelector('.btn-footer'),
        footer2: document.querySelector('.btn-footer2')
    };

    // Получаем целевые секции
    const sections = {
        service: document.querySelector('.service'),
        about: document.querySelector('.about'),
        project: document.querySelector('.portfolio'),
        faq: document.querySelector('.faq'),
        footer: document.querySelector('.footer')
    };

    // Добавляем обработчики клика на кнопки
    for (const key in buttons) {
        buttons[key]?.addEventListener('click', () => {
            if (key === 'footer2') {
                sections.footer?.scrollIntoView({ behavior: 'smooth' }); // дополнительная кнопка ведёт на футер
            } else {
                sections[key]?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }



    const burger__js = document.querySelector('.header__burger');
    const burger__jsBody = document.querySelector('.header__burger-body');
    const header = document.querySelector('.header');
    const opacity = document.querySelector('.header__burger-opacity')
    const logo = document.querySelector('.header__logo')

    burger__js.addEventListener('click', () => {
        burger__jsBody.classList.toggle('active');
        header.classList.toggle('active')
        opacity.classList.toggle('active')

        if (burger__jsBody.classList.contains('active')) {
            gsap.to(burger__js, { rotate: '90deg', duration: 1 });
        } else {
            gsap.to(burger__js, { rotate: '0deg', duration: 1 });
        }
    });

    document.addEventListener('click', (e) => {
        // если клик НЕ внутри меню и НЕ внутри хедера
        if (!burger__jsBody.contains(e.target) && !header.contains(e.target)) {
            burger__jsBody.classList.remove('active');
            header.classList.remove('active')
            opacity.classList.remove('active')
            gsap.to(burger__js, { rotate: '0deg', duration: 1 });
        }
    });

    const headerService = document.querySelector('.headerService')
    const main = document.querySelector('.main') 

    headerService.addEventListener('click', () => {
        main.classList.add('active')
        scrollToTopInstant();
        burger__jsBody.classList.remove('active');
        header.classList.remove('active')
        opacity.classList.remove('active')
        gsap.to(burger__js, { rotate: '0deg', duration: 1 });
    })

    logo.addEventListener('click', () => {
        main.classList.remove('active')
        scrollToTopInstant();
        burger__jsBody.classList.remove('active');
        header.classList.remove('active')
        opacity.classList.remove('active')
        gsap.to(burger__js, { rotate: '0deg', duration: 1 });
    })





    const menuButtons = document.querySelectorAll('.header__burger-item');

    const sectionsM = {
    aboutM: document.querySelector('.aboutM__title'),
    portfolioM: document.querySelector('.best'),
    faqM: document.querySelector('.faqM'),
    contactsM: document.querySelector('.footerM')
    };

    menuButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.section;
            const sectionM = sectionsM[target];

            if (!sectionM) return;

            burger__jsBody.classList.remove('active');
            header.classList.remove('active');
            opacity.classList.remove('active');
            gsap.to(burger__js, { rotate: '0deg', duration: 1 });

            if (main.classList.contains('active')) {
            main.classList.remove('active');
            scrollToTopInstant();
            setTimeout(() => {
                sectionM.scrollIntoView({ behavior: 'smooth' });
            }, 50);
            } else {
            sectionM.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });



    
    
    const firstBtn = document.getElementById('firstBtn');
    const secondBtn = document.getElementById('secondBtn');
    const allBlocks = document.querySelectorAll('.itemsM__block');

    function switchTabs(activeTab) {
        localStorage.setItem('activeTab', activeTab);
        
        firstBtn.classList.toggle('active', activeTab === 'first');
        secondBtn.classList.toggle('active', activeTab === 'second');
        
        allBlocks.forEach(block => {
            const isVisible = block.id === activeTab;
            block.classList.toggle('active', isVisible);
        });
    }

    const savedTab = localStorage.getItem('activeTab') || 'first';
    switchTabs(savedTab);

    firstBtn.addEventListener('click', () => switchTabs('first'));
    secondBtn.addEventListener('click', () => switchTabs('second'));




    gsap.from ('.header__burger', {
        x: 200,
        duration: 1,
    })

    gsap.to ('.productM__line', {
        duration: 1,
        ease: "none",
        clipPath: "inset(0% 0% 0% 0%)"
    })

    gsap.from('.aboutM__subtitle-box', {
        x:'-100%',
        duration: 1,
        scrollTrigger: {
            trigger: '.aboutM__subtitle-box',
            start: '100% bottom',
            scrub: false,
        }
    })

    gsap.from('.aboutM__gallery-left', {
        x: '-120%',
        duration: 1,
        scrollTrigger: {
            trigger: '.aboutM__gallery-left',
            start: '100% bottom',
            scrub: false,
        }
    })

    gsap.from('.aboutM__gallery-right', {
        x: '120%',
        duration: 1,
        scrollTrigger: {
            trigger: '.aboutM__gallery-left',
            start: '100% bottom',
            scrub: false,
        }
    })

    document.querySelectorAll('.best__item:nth-child(even)').forEach
    (bestitemEven => {
        gsap.from(bestitemEven, {
            x: '-120%',
            duration: 1,
            scrollTrigger: {
                trigger: bestitemEven,
                start: '100% bottom',
                scrub: false
            }
        })
    }) 

    document.querySelectorAll('.best__item:nth-child(odd)').forEach
    (bestitemOdd => {
        gsap.from(bestitemOdd, {
            x: '120%',
            duration: 1,
            scrollTrigger: {
                trigger: bestitemOdd,
                start: '100% bottom',
                scrub: false
            }
        })
    }) 





})




