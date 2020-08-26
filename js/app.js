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

//555555555

function scrollProdTrackAppear(){
    var prodTrackCard = document.querySelector('.product-track-hide');
    var prodTrackPosition = prodTrackCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.3;

    if(prodTrackPosition < screenHeight)
    {
        prodTrackCard.classList.add('product-track-appear');
    }
}

window.addEventListener('scroll', scrollProdTrackAppear);

//666666666

function scrollProdReliableAppear(){
    var prodReliableCard = document.querySelector('.product-reliable-hide');
    var prodReliablePosition = prodReliableCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.3;

    if(prodReliablePosition < screenHeight)
    {
        prodReliableCard.classList.add('product-reliable-appear');
    }
}

window.addEventListener('scroll', scrollProdReliableAppear);

//333333333

function scrollProdEverythingAppear(){
    var prodEverythingCard = document.querySelector('.product-everything-hide');
    var prodEverythingPosition = prodEverythingCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.3;

    if(prodEverythingPosition < screenHeight)
    {
        prodEverythingCard.classList.add('product-everything-appear');
    }
}

window.addEventListener('scroll', scrollProdEverythingAppear);

//22222

function scrollProdAdvancedAppear(){
    var prodAdvancedCard = document.querySelector('.product-advanced-hide');
    var prodAdvancedPosition = prodAdvancedCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.3;

    if(prodAdvancedPosition < screenHeight)
    {
        prodAdvancedCard.classList.add('product-advanced-appear');
    }
}

window.addEventListener('scroll', scrollProdAdvancedAppear);