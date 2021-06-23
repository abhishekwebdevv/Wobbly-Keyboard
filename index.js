const keys = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '+',
  '[',
  ']',
  ';',
  "'",
  ',',
  '.',
  '/',
];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
  return keys[getRandomNumber(0, keys.length - 1)];
}

function targetRandomKey() {
  const id = getRandomKey();
  const key = document.getElementById(id);
  key.classList.add('selected');
}

document.addEventListener('keydown', (event) => {
  const keyPressed = event.key.toLowerCase();
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector('.selected');

  keyElement.classList.add('hit');
  keyElement.addEventListener('animationend', () => {
    keyElement.classList.remove('hit');
  });

  if (keyElement.innerHTML === highlightedKey.innerHTML) {
    highlightedKey.classList.remove('selected');
    targetRandomKey();
  }
});

targetRandomKey();

// console.log(getRandomKey());
// console.log(targetRandomKey());
// console.log(document.getElementById('o'));
