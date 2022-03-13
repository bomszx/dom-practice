//EXAMINE THE DOCUMENT OBJECT

//shows properties and methods attached to the DOM
// console.dir(document);
// console.log(document.domain);
// console.log(document.title);

// document.title = 123;
// console.log(document.all)
// console.log(document.all[9])
// document.all[10].textContent = 'Hello'
// console.log(document.forms)
// console.log(document.images)

//SELECTORS GETELEMENTBYID
// console.log(document.getElementById('header-title'))
//selecting elements
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header')

// headerTitle.textContent = 'test'
// headerTitle.innerText = 'Goodbye'
// ** innerText pays attention to the style
// headerTitle.innerHTML = '<h6>Hello Garci</h6>';
// header.style.borderBottom = 'solid black 3px';

// SELECTORS GETLEMENTSBYCLASSNAME
let items = document.getElementsByClassName('list-group-item');
console.log(items)

items[1].textContent = 'I\'m number 2';
items[1].style.fontWeight = ' bold'
items[1].style.backgroundColor = 'yellow';

// Gives error because the computer is stupid and you need to loop through the nodelist to apply the style
// items.style.backgroundColor = '#f4f4f4';

for(i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}