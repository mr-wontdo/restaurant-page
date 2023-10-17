export default function createMenu() {
    const content = document.createElement('div');
    content.classList.add('menu-container');
    document.querySelector('#content').appendChild(content);

    const menuItem = (item, description) => {
        return {item, description};
    };

    const menuItems = [
        menuItem('Ribeye', 'Fatty, tender, and juicy.'),
        menuItem('New York Strip', 'A perfect balance between lean and fatty.'),
        menuItem('Filet Mignon', 'Lean but extremely tender.'),
        menuItem('Porterhouse','A combination of the New York strip and filet mignon. Best of both worlds.'),
    ];

    const createMenuDOM = ((menuItems) => {
        menuItems.forEach(menuItem => {
            const itemDiv = document.createElement('div');
            const itemHeader = document.createElement('h3');
            const itemDescription = document.createElement('p');
            itemHeader.textContent = menuItem.item;
            itemDescription.textContent = menuItem.description;

            content.appendChild(itemDiv);
            itemDiv.appendChild(itemHeader);
            itemDiv.appendChild(itemDescription);
        });
    })(menuItems);
}