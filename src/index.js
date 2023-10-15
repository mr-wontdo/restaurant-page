import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

createHome();

const updateDOM = (() => {
    const content = document.querySelector('#content');
    
    const clearContent = () => {
        content.textContent = '';
    };

    document.querySelector('.home').addEventListener('click', () => {
        clearContent();
        createHome();
    });
    document.querySelector('.menu').addEventListener('click', () => {
        clearContent();
        createMenu();
    });
    document.querySelector('.contact').addEventListener('click', () => {
        clearContent();
        createContact();
    });
})();