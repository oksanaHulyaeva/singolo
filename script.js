window.onload = function() {
    document.addEventListener('scroll', scrollHandler);
    burgerHandler();
    sliderHandler();
    portfolioHandler();
    formHandler();
}

//HEADER

const scrollHandler = () => {

    let sections = document.querySelectorAll('section'),
        anchors = document.querySelectorAll('.navigation a'),
        currentPos = window.scrollY+95;

    sections.forEach((elem) => {
        if ((elem.offsetTop <= currentPos) && (elem.offsetTop + elem.offsetHeight) > currentPos){
            anchors.forEach((a) => {  
                a.classList.remove('active');
                if(elem.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            })
        }
    })

}

const burgerHandler = () => {
    let burger = document.querySelector('.menu-burger'),
        overlay = document.querySelector('.overlay'),
        navVert = document.querySelector('.navigation-vert'),
        h1 = document.querySelector('h1'),
        logo = document.querySelector('.logo-mobile');

    burger.addEventListener('click', () => {
        if(!burger.classList.value.includes('burger-rotated')){
            burger.classList.add('burger-rotated');
            overlay.style.display = 'block';
            navVert.style.display = 'block';
            logo.style.display = 'block';
            h1.classList.add('logo-transition');
        }
        else if(burger.classList.value.includes('burger-rotated')){
            burger.classList.remove('burger-rotated');
            overlay.style.display = 'none';
            navVert.style.display = 'none';
            logo.style.display = 'none';
            h1.classList.remove('logo-transition');

        }

        navVert.addEventListener('click', (event) => {
            if(event.target.tagName === 'A') {
                burger.classList.remove('burger-rotated');
                overlay.style.display = 'none';
                navVert.style.display = 'none';
                logo.style.display = 'none';
                h1.classList.remove('logo-transition');
                console.log(event.target.tagName);
            }
            else return;
        })
    })
}

//SLIDER

const sliderHandler = () => {
    let slider = document.getElementById('slider');
    changeSlides(slider);
    togglePhoneScreen(slider);
}

const changeSlides = (elem) => {
    let leftArrow = elem.querySelector('.arrow-left'),
    rightArrow = elem.querySelector('.arrow-right'),
    slides = elem.querySelectorAll('.slides');

    let slideIndex = 1;
    showSlides(slideIndex);

    const plusSlide = () => { showSlides(slideIndex += 1) };

    const minusSlide = () => { showSlides(slideIndex -= 1) };

    function showSlides(n) {

        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    leftArrow.addEventListener('click', () => { minusSlide() });  
    rightArrow.addEventListener('click', () => { plusSlide() });
}


const togglePhoneScreen = (elem) => {
    let homeButtonVert = elem.querySelector('.home-button-vert'),
        homeButtonHor = elem.querySelector('.home-button-hor'),
        screenVert = elem.querySelector('.vertical-cover'),
        screenHor = elem.querySelector('.horizontal-cover');

    homeButtonVert.addEventListener('click', () => screenVert.classList.toggle('hidden'));
    homeButtonHor.addEventListener('click', () => screenHor.classList.toggle('hidden'));
}

//PORTFOLIO

const portfolioHandler = () => {
    let portfolio = document.getElementById('portfolio'),
        portfolioItems = portfolio.querySelectorAll('.portfolio-item');

    addBordersInPortfolio(portfolio, portfolioItems);
    portfolioButtonsHandler(portfolio, portfolioItems);
}

const addBordersInPortfolio = (elem) => {
    elem.addEventListener('click', (event)=>{
        if(!event.target.classList.contains('portfolio-item')) return;

        elem.querySelectorAll('.portfolio-item').forEach((item) => item.classList.remove('portfolio-borders'));
        event.target.classList.add('portfolio-borders');
    })
}

const portfolioButtonsHandler = (elem, elemItems) => {
    let buttonsPanel = elem.querySelector('.buttons-panel'),
        portfolioButtons = elem.querySelectorAll('button'),
        portfolioContainer = elem.querySelector('.layout-4-column'),
        itemsArr = [];

    buttonsPanel.addEventListener('click', (event) => {
        if(event.target.tagName != 'BUTTON') return;

        portfolioButtons.forEach((item) => item.classList.remove('active'));
        event.target.classList.add('active');

        elem.querySelectorAll('.portfolio-item').forEach(item => itemsArr.push(item));
        itemsArr.sort(() => {return Math.random() - 0.5});

        portfolioContainer.innerHTML = '';
        itemsArr.forEach(item => portfolioContainer.appendChild(item));
    });
}

const sortItems = (collection) => {
    let arr = Array.from(collection);
    return arr.sort(function(){return Math.random() - 0.5;});
}

//FORM

const formHandler = () => {
    let form = document.querySelector('.contact_form'),
        subject = form.querySelector('.form_subject'),
        formName = form.querySelector('.form_name'),
        formEmail = form.querySelector('.form_email'),
        describe = form.querySelector('.form_description'),
        popup = document.querySelector('#popup'),
        popupButton = document.querySelector('#popup-button'),
        popupTopic = document.querySelector('#popup-subject'),
        popupDescript = document.querySelector('#popup-descipt');

        form.addEventListener("submit", function(event) {
        
            event.preventDefault();
            
            subject.value ? popupTopic.innerText = ('Тема: ' + subject.value) : popupTopic.innerText ='Без темы';
            describe.value ? popupDescript.innerText = ('Описание: ' + describe.value) : popupDescript.innerText ='Без описания';
        
            popup.classList.remove('hidden');
        });

        popupButton.addEventListener('click', () => {
            popup.classList.add('hidden');
            subject.value = '';
            describe.value = '';
            formName.value = '';
            formEmail.value = '';
        })
}
















