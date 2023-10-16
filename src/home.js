export default function createHome() {
    const content = document.createElement('div');
    content.classList.add('home-container');

    // Content one
    const contentOne = document.createElement('p');
    contentOne.textContent = 'The steaks have never been higher.'

    // Content two
    const contentTwo = document.createElement('p');
    contentTwo.textContent = 'Order online or visit us!';

    // Content three
    const contentThree = document.createElement('div');

    const hoursHeader = document.createElement('h3');
    hoursHeader.textContent = 'Hours'

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');

    const sunday = document.createElement('p');
    sunday.textContent = 'Sunday: 8AM - 10PM';
    const monday = document.createElement('p');
    monday.textContent = 'Monday: 11AM - 8PM';
    const tuesday = document.createElement('p');
    tuesday.textContent = 'Tuesday: 11AM - 8PM';
    const wednesday = document.createElement('p');
    wednesday.textContent = 'Wednesday: 11AM - 8PM';
    const thursday = document.createElement('p');
    thursday.textContent = 'Thursday: 11AM - 8PM';
    const friday = document.createElement('p');
    friday.textContent = 'Friday: 8AM - 10PM';
    const saturday = document.createElement('p');
    saturday.textContent = 'Saturday: 8AM - 10PM';

    // Append
    document.querySelector('#content').appendChild(content);
    content.appendChild(contentOne);
    content.appendChild(contentTwo);
    content.appendChild(contentThree);

    contentThree.appendChild(hoursHeader);
    contentThree.appendChild(hoursContainer);
    hoursContainer.appendChild(sunday);
    hoursContainer.appendChild(monday);
    hoursContainer.appendChild(tuesday);
    hoursContainer.appendChild(wednesday);
    hoursContainer.appendChild(thursday);
    hoursContainer.appendChild(friday);
    hoursContainer.appendChild(saturday);
}