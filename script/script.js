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
            duration: .7,
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





    // Получаем кнопки меню
    const buttons = {
    service: document.querySelector('.btn-service'),
    about: document.querySelector('.btn-about'),
    project: document.querySelector('.btn-portfolio'),
    faq: document.querySelector('.btn-faq'),
    footer: document.querySelector('.btn-footer')
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
        sections[key]?.scrollIntoView({ behavior: 'smooth' });
    });
    }






})




