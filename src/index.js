import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

createHome();

const updateDOM = (() => {
    const content = document.querySelector('#content');
    const tabs = document.querySelectorAll('li');
    
    const clearContent = () => {
        content.textContent = '';
    };

    const clearTabActiveStatus = () => {
        tabs.forEach(tab => tab.classList.remove('active'));
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            clearContent();
            if (e.srcElement.className.includes('home')) createHome();
            if (e.srcElement.className.includes('menu')) createMenu();
            if (e.srcElement.className.includes('contact')) createContact();
            clearTabActiveStatus();
            e.target.classList.add('active');
        })
    });
})();