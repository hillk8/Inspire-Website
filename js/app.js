function loadHeroHeadLineAppear(){
    var heroHeadline = document.querySelector('.hero-headline');
    var heroHeadlinePosition = heroHeadline.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if(heroHeadlinePosition < screenHeight)
    {
        heroHeadline.classList.add('hero-headline-appear');
    }
}

window.addEventListener('load', loadHeroHeadLineAppear);

//888888

function loadHeroCTAAppear(){
    var heroHeadline = document.querySelector('.hero-cta-button');
    var heroHeadlinePosition = heroHeadline.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if(heroHeadlinePosition < screenHeight)
    {
        heroHeadline.classList.add('hero-cta-button-appear');
    }
}

window.addEventListener('load', loadHeroCTAAppear);