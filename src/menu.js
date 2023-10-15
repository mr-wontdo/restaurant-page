export default function createMenu() {
    const content = document.createElement('div');
    content.classList.add('content-container');

    const ribeye = document.createElement('div');
    const ribeyeHeader = document.createElement('h3');
    const ribeyeInfo = document.createElement('p');
    ribeyeHeader.textContent = 'Ribeye';
    ribeyeInfo.textContent = 'Fatty, tender, and juicy.';

    const newYorkStrip = document.createElement('div');
    const newYorkStripHeader = document.createElement('h3');
    const newYorkStripInfo = document.createElement('p');
    newYorkStripHeader.textContent = 'New York Strip'
    newYorkStripInfo.textContent = 'A perfect balance between lean and fatty.';

    const filetMignon = document.createElement('div');
    const filetMignonHeader = document.createElement('h3');
    const filetMignonInfo = document.createElement('p');
    filetMignonHeader.textContent = 'Filet Mignon';
    filetMignonInfo.textContent = 'Lean but extremely tender.';

    const porterHouse = document.createElement('div');
    const porterHouseHeader = document.createElement('h3');
    const porterHouseInfo = document.createElement('p');
    porterHouseHeader.textContent = 'Porterhouse';
    porterHouseInfo.textContent = 'A combination of the New York strip and filet mignon. Best of both worlds.';

    // Append
    document.querySelector('#content').appendChild(content);

    content.appendChild(ribeye);
    ribeye.appendChild(ribeyeHeader);
    ribeye.appendChild(ribeyeInfo);

    content.appendChild(newYorkStrip);
    newYorkStrip.appendChild(newYorkStripHeader);
    newYorkStrip.appendChild(newYorkStripInfo);

    content.appendChild(filetMignon);
    filetMignon.appendChild(filetMignonHeader);
    filetMignon.appendChild(filetMignonInfo);

    content.appendChild(porterHouse);
    porterHouse.appendChild(porterHouseHeader);
    porterHouse.appendChild(porterHouseInfo);
}