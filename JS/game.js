const grid = document.querySelector('.grid');

const characters  = [
    'abelaeafera',
    'Alice',
    'anastasia',
    'bolt',
    'encanto back',
    'enrolados',
    'frozen',
    'princesaeosapo',
    'reileao',
    'tarzan',
];


const createElement = (tag, classname) => {
    const element = document.createElement(tag);
    element.className = classname;
    return element;

}

const createCard = () => {
     const card = document.createElement('div', 'card');
     const front = document.createElement('div', 'face front');
     const back = document.createElement('div', 'face back');
 
    card.appendChild(front);
    card.appendChild(back);

return card;
} 

const loadGame = () => {

  characters.forEach((character) => {

    const card = createCard();
    grid.appendChild(card);

  });
}
loadGame();
