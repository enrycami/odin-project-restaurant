import createHomepage from './homepage';
import createAboutPage from './about';
import createMenuPage from './menu';
import createReviewPage from './reviews';


function initialLoad() {
    createHomepage();

    const homeButton = document.querySelector('#home-button');
    homeButton.addEventListener('click', () =>{
        clearContent();
        createHomepage();
    })

    const menuButton = document.querySelector('#menu-button');
    menuButton.addEventListener('click', () =>{
        clearContent();
        createMenuPage();
    })
    
    const reviewButton = document.querySelector('#reviews-button');
    reviewButton.addEventListener('click', () =>{
        clearContent();
        createReviewPage();
    })
    
    const aboutButton = document.querySelector('#about-button');
    aboutButton.addEventListener('click', () =>{
        clearContent();
        createAboutPage();
    })
    
}

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = ''
}

export default initialLoad;