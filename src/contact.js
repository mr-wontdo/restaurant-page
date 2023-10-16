export default function createContact() {
    const content = document.createElement('div');
    content.classList.add('contact-container');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 (515) 555-5555';

    const address = document.createElement('p');
    address.textContent = '📍 Hollywood Boulevard 42, Los Angeles, USA';

    const image = document.createElement('img');
    image.src = 'images/restaurant-location.png';

    // Append
    document.querySelector('#content').appendChild(content);
    content.appendChild(phoneNumber);
    content.appendChild(address);
    content.appendChild(image);
}