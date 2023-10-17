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

    const createHours = (hours) => {
        const day = document.createElement('p');
        day.textContent = hours;
        return day;
    }; 

    // Append
    document.querySelector('#content').appendChild(content);
    content.appendChild(contentOne);
    content.appendChild(contentTwo);
    content.appendChild(contentThree);

    contentThree.appendChild(hoursHeader);
    contentThree.appendChild(hoursContainer);
    hoursContainer.appendChild(createHours('Sunday: 8AM - 10PM'));
    hoursContainer.appendChild(createHours('Monday: 11AM - 8PM'));
    hoursContainer.appendChild(createHours('Tuesday: 11AM - 8PM'));
    hoursContainer.appendChild(createHours('Wednesday: 11AM - 8PM'));
    hoursContainer.appendChild(createHours('Thursday: 11AM - 8PM'));
    hoursContainer.appendChild(createHours('Friday: 8AM - 10PM'));
    hoursContainer.appendChild(createHours('Saturday: 8AM - 10PM'));
}