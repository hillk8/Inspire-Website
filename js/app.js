//fadein class "hero-headline" on the home page
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

//fadein class "hero-cta-button" on the home page
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

//fadein class "product-track-hide" on the home page
function scrollProdTrackAppear(){
    var prodTrackCard = document.querySelector('.product-track-hide');
    var prodTrackPosition = prodTrackCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.1;

    if(prodTrackPosition < screenHeight)
    {
        prodTrackCard.classList.add('product-track-appear');
    }
}

window.addEventListener('scroll', scrollProdTrackAppear);

//fadein class "product-reliable-hide" on the home page
function scrollProdReliableAppear(){
    var prodReliableCard = document.querySelector('.product-reliable-hide');
    var prodReliablePosition = prodReliableCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.1;

    if(prodReliablePosition < screenHeight)
    {
        prodReliableCard.classList.add('product-reliable-appear');
    }
}

window.addEventListener('scroll', scrollProdReliableAppear);

//fadein class "product-everything-hide" on the home page
function scrollProdEverythingAppear(){
    var prodEverythingCard = document.querySelector('.product-everything-hide');
    var prodEverythingPosition = prodEverythingCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.1;

    if(prodEverythingPosition < screenHeight)
    {
        prodEverythingCard.classList.add('product-everything-appear');
    }
}

window.addEventListener('scroll', scrollProdEverythingAppear);

//fadein class "product-advanced-hide" on the home page
function scrollProdAdvancedAppear(){
    var prodAdvancedCard = document.querySelector('.product-advanced-hide');
    var prodAdvancedPosition = prodAdvancedCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.1;

    if(prodAdvancedPosition < screenHeight)
    {
        prodAdvancedCard.classList.add('product-advanced-appear');
    }
}

window.addEventListener('scroll', scrollProdAdvancedAppear);

//fadein class "eview-container-ali-hide" on the home page
function scrollReviewsAliAppear(){
    var reviewsAliCard = document.querySelector('.review-container-ali-hide');
    var reviewsAliPosition = reviewsAliCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.1;

    if(reviewsAliPosition < screenHeight)
    {
        reviewsAliCard.classList.add('review-container-ali-appear');
    }
}

window.addEventListener('scroll', scrollReviewsAliAppear);

//fadein class "review-container-li-hide" on the home page
function scrollReviewsLiAppear(){
    var reviewsLiCard = document.querySelector('.review-container-li-hide');
    var reviewsLiPosition = reviewsLiCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.1;

    if(reviewsLiPosition < screenHeight)
    {
        reviewsLiCard.classList.add('review-container-li-appear');
    }
}

window.addEventListener('scroll', scrollReviewsLiAppear);

//fadein class "review-container-rich-hide" on the home page
function scrollReviewsRichAppear(){
    var reviewsRichCard = document.querySelector('.review-container-rich-hide');
    var reviewsRichPosition = reviewsRichCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.1;

    if(reviewsRichPosition < screenHeight)
    {
        reviewsRichCard.classList.add('review-container-rich-appear');
    }
}

window.addEventListener('scroll', scrollReviewsRichAppear);

//fadein class "about-hero-text" on the about page
function loadAboutHeroHeadLineAppear(){
    var aboutHeroHeadline = document.querySelector('.about-hero-text');
    var aboutHeroHeadlinePosition = aboutHeroHeadline.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if(aboutHeroHeadlinePosition < screenHeight)
    {
        aboutHeroHeadline.classList.add('about-hero-text-appear');
    }
}

window.addEventListener('load', loadAboutHeroHeadLineAppear());

//fadein class "about-story" on the about page
function scrollAboutStoryAppear(){
    var aboutStoryCard = document.querySelector('.about-story');
    var aboutStoryPosition = aboutStoryCard.getBoundingClientRect().top;
    var screenHeight = window.innerHeight / 1.5;

    if(aboutStoryPosition < screenHeight)
    {
        aboutStoryCard.classList.add('about-story-appear');
    }
}

window.addEventListener('scroll', scrollAboutStoryAppear);