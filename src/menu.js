// create menu page

const createMenuPage = () => {
    const content = document.querySelector('#content');
    const menuPageContent = document.createElement('div');
    menuPageContent.classList.add('menu-page-content');
    content.appendChild(menuPageContent);

    const menuDiv = document.createElement('div');
    const title = document.createElement('h2');
    title.textContent = 'Our offerings';
    menuDiv.appendChild(title);
    menuPageContent.appendChild(menuDiv);

    const entreeDiv = document.createElement('div');
    const entreeTitle = document.createElement('h3');
    entreeTitle.textContent = 'Our entrees';
    entreeDiv.appendChild(entreeTitle);
    const entree1 = document.createElement('h4')
    entree1.textContent = "Random Entree \r\n €10"
    entree1.style.whiteSpace = 'pre';
    entreeDiv.appendChild(entree1);
    const entree2 = document.createElement('h4')
    entree2.textContent = "Random Entree \r\n €10"
    entree2.style.whiteSpace = 'pre';
    entreeDiv.appendChild(entree2);
    const entree3 = document.createElement('h4')
    entree3.textContent = "Random Entree \r\n €10"
    entree3.style.whiteSpace = 'pre';
    entreeDiv.appendChild(entree3);
    const entree4 = document.createElement('h4')
    entree4.textContent = "Random Entree \r\n €10"
    entree4.style.whiteSpace = 'pre';
    entreeDiv.appendChild(entree4);
    menuDiv.appendChild(entreeDiv);

    const mainCourseDiv = document.createElement('div');
    const mainCourseTitle = document.createElement('h3');
    mainCourseTitle.textContent = 'Our Main Courses';
    mainCourseDiv.appendChild(mainCourseTitle);
    const mainCourse1 = document.createElement('h4')
    mainCourse1.textContent = "Random Main Course \r\n €16"
    mainCourse1.style.whiteSpace = 'pre';
    mainCourseDiv.appendChild(mainCourse1);
    const mainCourse2 = document.createElement('h4')
    mainCourse2.textContent = "Random Main Course \r\n €16"
    mainCourse2.style.whiteSpace = 'pre';
    mainCourseDiv.appendChild(mainCourse2);
    const mainCourse3 = document.createElement('h4')
    mainCourse3.textContent = "Random Main Course \r\n €16"
    mainCourse3.style.whiteSpace = 'pre';
    mainCourseDiv.appendChild(mainCourse3);
    const mainCourse4 = document.createElement('h4')
    mainCourse4.textContent = "Random Main Course \r\n €16"
    mainCourse4.style.whiteSpace = 'pre';
    mainCourseDiv.appendChild(mainCourse4);
    menuDiv.appendChild(mainCourseDiv);

    const firstCourseDiv = document.createElement('div');
    const firstCourseTitle = document.createElement('h3');
    firstCourseTitle.textContent = 'Our First Courses';
    firstCourseDiv.appendChild(firstCourseTitle);
    const firstCourse1 = document.createElement('h4')
    firstCourse1.textContent = "Random First Course \r\n €14"
    firstCourse1.style.whiteSpace = 'pre';
    firstCourseDiv.appendChild(firstCourse1);
    const firstCourse2 = document.createElement('h4')
    firstCourse2.textContent = "Random First Course \r\n €14"
    firstCourse2.style.whiteSpace = 'pre';
    firstCourseDiv.appendChild(firstCourse2);
    const firstCourse3 = document.createElement('h4')
    firstCourse3.textContent = "Random First Course \r\n €14"
    firstCourse3.style.whiteSpace = 'pre';
    firstCourseDiv.appendChild(firstCourse3);
    const firstCourse4 = document.createElement('h4')
    firstCourse4.textContent = "Random First Course \r\n €14"
    firstCourse4.style.whiteSpace = 'pre';
    firstCourseDiv.appendChild(firstCourse4);
    menuDiv.appendChild(firstCourseDiv);

    const dessertDiv = document.createElement('div');
    const dessertTitle = document.createElement('h3');
    dessertTitle.textContent = 'Our Desserts';
    dessertDiv.appendChild(dessertTitle);
    const dessert1 = document.createElement('h4')
    dessert1.textContent = "Random dessert \r\n €6"
    dessert1.style.whiteSpace = 'pre';
    dessertDiv.appendChild(dessert1);
    const dessert2 = document.createElement('h4')
    dessert2.textContent = "Random dessert \r\n €6"
    dessert2.style.whiteSpace = 'pre';
    dessertDiv.appendChild(dessert2);
    menuDiv.appendChild(dessertDiv);

}

export default createMenuPage;