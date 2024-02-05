// Accessing Elements
// by ID
//const heading = document.getElementById('heading');

// by class
// const heading = document.getElementsByClassName('heading1');

// by tag name
const heading = document.getElementsByTagName('h1');

console.log(heading[1]);

const listItems = document.querySelectorAll('#list li');

console.log(listItems);

// Modifying Elements
// contents using innerHTML
heading[0].innerHTML = '<em>Learning DOM Manipulation</em>';

// context using textContent 
//heading[0].textContent = '<em>All About DOM Manipulation</em>';

// attributes using setAttribute
heading[1].setAttribute('class', 'highlight');

// styles using style property
const button = document.getElementById('btn');
button.style.backgroundColor = 'skyblue';
button.style.border = 'blue 5px solid';

// creating elements dynamically
const divContainer = document.getElementsByClassName('Container');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';

divContainer[0].appendChild(newParagraph);

// remove elements dynamically
// divContainer[0].remove();
// button.remove();

// Handling Events
button.addEventListener('click', addListItem);

function addListItem() {
    const newListItem = document.createElement('li');
    newListItem.textContent = "New List Item"

    document.getElementById('list').appendChild(newListItem);
}

window.addEventListener('keydown', addAnotherItem);

function addAnotherItem(event) {
    console.log("Pressed a ", event.keyCode);
}


// Click Event: Triggered when an element is clicked.
// Mouseover (Hover) Event: Occurs when the mouse pointer is moved over an element.
// Keydown Event: Fired when a key is pressed down. More advanced.
// Submit Event: Triggered when a form is submitted. What the form will do once its submitted. will explore later in Interactive Forms
// Load Event: Occurs when a page or an element has finished loading.
// Change Event: Fired when the value of an input element changes.
// Focus and Blur Events: These happen when an element gains or loses focus.

// Here are the common ones

// Mouse Events:
// click, dblclick, mousemove

// Keyboard Events:
// keydown, keyup, keypress

// Form Events:
// submit, reset, change

// Handling Events
button.addEventListener('click', addListItem);

function addListItem() {
    const newListItem = document.createElement('li');
    newListItem.textContent = "New List Item";

    const list = document.getElementById('list');
    list.appendChild(newListItem);
}