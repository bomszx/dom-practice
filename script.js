//EXAMINE THE DOCUMENT OBJECT //

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

//SELECTORS GETELEMENTBYID //
// console.log(document.getElementById('header-title'))
//selecting elements
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header')

// headerTitle.textContent = 'test'
// headerTitle.innerText = 'Goodbye'
// ** innerText pays attention to the style
// headerTitle.innerHTML = '<h6>Hello Garci</h6>';
// header.style.borderBottom = 'solid black 3px';

// SELECTORS GETLEMENTSBYCLASSNAME //
// let items = document.getElementsByClassName('list-group-item');
// console.log(items)

// items[1].textContent = 'I\'m number 2';
// items[1].style.fontWeight = ' bold'
// items[1].style.backgroundColor = 'yellow';

// Gives error because the computer is stupid and you need to loop through the nodelist to apply the style
// items.style.backgroundColor = '#f4f4f4';

// for(i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// SELECTOR GETELEMENTSBYTAGNAME tag -- meaning element tag, h1-h2-li etc... //
// let li = document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1])

// li[1].textContent = 'I\'m number 2';
// li[1].style.fontWeight = ' bold'
// li[1].style.backgroundColor = 'yellow';

// for(i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// SELECTOR QUERYSELECTOR // grabs the first one by default
// let header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// We use the open and close brackets to indicate the second input (because querySelector by default chooses the 1st) element labelled by its type which is submit
// let submit = document.querySelector('input[type="submit"]')
// submit.value = "Send";

// let item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// Note how we use last child and nth-child(2) (selecting the 2nd child)
// let lastItem = document.querySelector('.list-group-item:last-child')

// lastItem.style.color = 'green'

// let secondItem = document.querySelector('.list-group-item:nth-child(2)')

// secondItem.style.color = 'cyan'

// SELECTOR QUERYSELECTORALL 
let titles = document.querySelectorAll('.title')

console.log(titles)