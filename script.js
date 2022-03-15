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
// headerTitle.innerHTML = '<h1>Hello Garci</h1>';
// header.style.borderBottom = 'solid black 3px';

// SELECTORS GETLEMENTSBYCLASSNAME //
// let items = document.getElementsByClassName('list-group-item');
// console.log(items)

// items[1].textContent = 'I\'m number 2';
// items[1].style.fontWeight = ' bold'
// items[1].style.backgroundColor = 'yellow';

// Gives error because the computer is stupid and you need to loop through the nodelist to apply the style to each and everyone
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

// let items = document.querySelectorAll('.list-group-item');
// console.log(items)

// for(i = 0; i < items.length; i++) {
//     items[i].style.color = 'green';
// }

// Note how we use last child and nth-child(2) (selecting the 2nd child)
// let lastItem = document.querySelector('.list-group-item:last-child')

// lastItem.style.color = 'green'

// let secondItem = document.querySelector('.list-group-item:nth-child(2)')

// secondItem.style.color = 'cyan'

// SELECTOR QUERYSELECTORALL //
// let titles = document.querySelectorAll('.title')
// titles[0].textContent = 'Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for(i = 0; i < odd.length; i++) {
//     // odd[i] = odd on its current iteration
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// QUERYING PARENTS AND SIBLINGS -- TRAVERSING THE DOM //
// let itemList = document.querySelector('#items');
// console.log(itemList)
// parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode)
// console.log(itemList.parentNode.parentNode)

// parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement)

// childNodes
// console.log(itemList.childNodes) //not advisable, considers linebreaks as text
// console.log(itemList.children)
// itemList.children[1].style.backgroundColor = 'orange';

// firstChild
// console.log(itemList.firstChild);
// console.log(itemList.lastChild);  // will also include whitespace and line break as text

// firstElementChild // lastElementChild
// console.log(itemList.firstElementChild);
// console.log(itemList.lastElementChild)

// itemList.lastElementChild.textContent = 'I\'m here';

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// CREATING DOM ELEMENTS USING DOM MANIPULATION THROUGH JAVASCRIPT //
// createElement

// create a div
// let newDiv = document.createElement('div');

// add class
// newDiv.className = 'tanga';

// add ID
// newDiv.id = 'tanga-tanga';

// add attr
// newDiv.setAttribute('title', 'Hello Div');

// create text node - to add content to our div
// let newDivText = document.createTextNode('Hello World')

// after creating the node/element we need to append it
// newDiv.appendChild(newDivText)

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1')

// newDiv.style.fontSize = '40px';
// container.insertBefore(newDiv, h1)

// console.log(newDiv);

// EVENTS click events //

// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor =  '#f4f4f4';
    // console.log(e);

    // console.log(e)
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList)

    // let output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';   
    

    //MOUSE LOCATION
    // console.log(e.type);
    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);


    //IF YOU'RE HOLDING DOWN THESE KEYS
    // console.log(e.altKey);
    // console.log(e.shiftKey);
    // console.log(e.ctrlKey);

// }

// function runEvent(e) {
//     e.preventDefault();
//     console.log('EVENT TYPE:' + ' ' +e.type);
//     console.log(e.target.value);


    //tracking mouse movement
    // output.innerHTML = '<h3>'+e.offsetX+'</h3>' + '<h3>'+e.offsetY+'</h3>'

    // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";

    //key-log
    // console.log(e.target.value)
    //outputing on the html
    // document.getElementById('output').innerHTML = '<h2>' + e.target.value + '</h2>';

    // document.body.style.display = 'none';
// }
// let button = document.getElementById('button');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// button.addEventListener('mousedown', runEvent);

// let box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent); // for any inner elements
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

// EVENTS keyboard events  //

// let itemInput = document.querySelector('input[type=text]');
// let form = document.querySelector('form');
// let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

//focus and blur, active and inactive 
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

//cut and paste
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);
// form.addEventListener('submit', runEvent);

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Remove item
itemList.addEventListener('click', removeItem);

// Filter item
filter.addEventListener('keyup', filterItems)

// Add item function
function addItem(e) {
    e.preventDefault();

    //Get input value
    let newItem = document.getElementById('item').value;

    //Create new li element
    let li = document.createElement('li');
    
    //Add class name so it will follow the CSS ruling in this case bootstrap
    li.className = 'list-group-item';
    // li.id = 'tange testing lang to';
    
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    let delBtn = document.createElement('btn');

    delBtn.className = 'btn-danger btn-sm float-right delete'

    delBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(delBtn);

    //Append li to list
    itemList.appendChild(li);
}

//Function remove items
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            console.log(e.target.parentElement.parentElement);

        }
    }
}


//Function filter items
function filterItems(e) {
    //conver text to lowercase
    let text = e.target.value.toLowerCase();
    //get lis
    let items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}