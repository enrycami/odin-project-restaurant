// create about page 

const createAboutPage = () => {
    const content = document.querySelector('#content');
    const aboutPageContent = document.createElement('div');
    aboutPageContent.classList.add('about-page-content');
    
    // restaurant info div
    const restaurantInfo = document.createElement('div');
    restaurantInfo.classList.add('restaurant-info');
    
    const restaurantAddress = document.createElement('h3');
    restaurantAddress.textContent = "Our address: \r\n 123 Avenue, Random City, Generic Country";
    restaurantAddress.style.whiteSpace = 'pre';
    restaurantInfo.appendChild(restaurantAddress);

    const restaurantPhone = document.createElement('h3');
    restaurantPhone.textContent = "Our phone number: \r\n +12345678910 (opening hours only)";
    restaurantPhone.style.whiteSpace = 'pre';
    restaurantInfo.appendChild(restaurantPhone);

    const restaurantBusinessPhone = document.createElement('h3');
    restaurantBusinessPhone.textContent = "Our number for business inquires only: \r\n +12310987654";
    restaurantBusinessPhone.style.whiteSpace = 'pre';
    restaurantInfo.appendChild(restaurantBusinessPhone);

    const restaurantHours = document.createElement('h3');
    restaurantHours.textContent = "Opening hours: \r\n 11:00/14:30 19:00/22:30 \r\n Mon close"
    restaurantHours.style.whiteSpace = 'pre';
    restaurantInfo.appendChild(restaurantHours);   

    aboutPageContent.appendChild(restaurantInfo);
    content.appendChild(aboutPageContent);
}

export default createAboutPage;