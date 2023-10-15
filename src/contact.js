export default function createContact() {
    const content = document.createElement('div');
    content.classList.add('content-container');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '(515) 555-5555';
    const address = document.createElement('p');
    address.textContent = 'Hollywood Boulevard 42, Los Angeles, USA'

    // Append
    document.querySelector('#content').appendChild(content);
    content.appendChild(phoneNumber);
    content.appendChild(address);
}