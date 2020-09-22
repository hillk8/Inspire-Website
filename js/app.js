//Fadein elements on load or on scroll
function animateElements (itemHid, itemAppear, theEvent){
    function elementAppear(){
        var myElement = document.querySelector(itemHid);
        var elementPosition = myElement.getBoundingClientRect().top;
        var screenHeight = window.innerHeight / 1.5;
    
        if(elementPosition < screenHeight)
        {
            myElement.classList.add(itemAppear);
        }
    }
    
    window.addEventListener(theEvent, elementAppear); 
}

animateElements(".hero-headline", "hero-headline-appear", "load");

animateElements(".hero-cta-button", "hero-cta-button-appear", "load");

animateElements(".product-track-hide", "product-track-appear", "scroll");

animateElements(".product-reliable-hide", "product-reliable-appear", "scroll");

animateElements(".product-everything-hide", "product-everything-appear", "scroll");

animateElements(".product-advanced-hide", "product-advanced-appear", "scroll");

animateElements(".review-container-ali-hide", "review-container-ali-appear", "scroll");

animateElements(".review-container-li-hide", "review-container-li-appear", "scroll");

animateElements(".review-container-rich-hide", "review-container-rich-appear","scroll");

animateElements(".about-hero-text", "about-hero-text-appear","load");

animateElements(".about-story", "about-story-appear","scroll");

animateElements(".about-box-right", "about-box-right-appear", "scroll");

animateElements(".about-box-left", "about-box-left-appear", "scroll");

animateElements(".about-mission", "about-mission-appear", "scroll");

animateElements(".locations-container", "locations-container-appear", "scroll");

animateElements(".products-hero-text", "products-hero-text-appear","load");