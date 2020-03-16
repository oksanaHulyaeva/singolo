window.onload = function() {
    menuHandler();
    sliderHandler();
    portfolioHandler();
    formHandler();
}

//HEADER

const menuHandler = () => {

    let navPanel = document.querySelector('ul.navigation');
    let anchors = navPanel.querySelectorAll('li > a');

    navPanel.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.target.tagName != 'A') return;   

        anchors.forEach((item) => {item.classList.remove('active');
        })
        event.target.classList.add('active');
    
        let elemID = event.target.getAttribute('href').substr(1);
        document.getElementById(elemID).scrollIntoView({ behavior: 'smooth',
        block: 'start'})
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
        firstSlide = elem.querySelector('#slide1'),
        secondSlide = elem.querySelector('#slide2');

    leftArrow.addEventListener('click', () => {firstSlide.classList.toggle('hidden');
        secondSlide.classList.toggle('hidden');
    })
    
    rightArrow.addEventListener('click', () => {firstSlide.classList.toggle('hidden');
        secondSlide.classList.toggle('hidden');
    })
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

const addBordersInPortfolio = (elem, elemItems) => {
    elem.addEventListener('click', (event)=>{
        if(!event.target.classList.contains('portfolio-item')) return;

        elemItems.forEach((item) => item.classList.remove('portfolio-borders'));
        event.target.classList.add('portfolio-borders');
    })
}

const portfolioButtonsHandler = (elem, elemItems) => {
    let buttonsPanel = elem.querySelector('.buttons-panel'),
        portfolioButtons = elem.querySelectorAll('button'),
        portfolioContainer = elem.querySelector('.layout-4-column');

    buttonsPanel.addEventListener('click', (event) => {
        if(event.target.tagName != 'BUTTON') return;

        portfolioButtons.forEach((item) => item.classList.remove('active'));
        event.target.classList.add('active');
        let sortedItems = sortItems(elemItems);

        portfolioContainer.prepend(sortedItems[0]);
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
            
            subject.value ? popupTopic.innerHTML = ('Тема: ' + subject.value) : popupTopic.innerHTML ='Без темы';
            describe.value ? popupDescript.innerHTML = ('Описание: ' + describe.value) : popupTopic.innerHTML ='Без описания';
        
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
















