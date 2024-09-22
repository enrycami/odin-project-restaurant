import restaurantImage from "./img/restaurant.jpg"

const createHomepage = () => {
    const content = document.querySelector('#content');
    const homepageContent = document.createElement('div');
    homepageContent.classList.add('homepage-content');

    // create and append image
    const image = document.createElement('img');
    image.src = restaurantImage;
    image.height = '300';
    homepageContent.appendChild(image);

    // create and append h1 element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Generic Restaurant';
    homepageContent.appendChild(headline);

    // create and append h2 element
    const h2text = document.createElement('h2');
    h2text.textContent = 'The best food in this part of the internet';
    homepageContent.appendChild(h2text)

    content.appendChild(homepageContent);
}

export default createHomepage;



// <div class="page-content">
// <img src="./img/restaurant.jpg" alt="" width="300" height="500">
// <h1>Welcome to Generic Restaurant</h1>
// <h2>The best food in this part of the Internet</h2>
// </div>