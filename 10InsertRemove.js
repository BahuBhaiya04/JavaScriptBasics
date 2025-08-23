//TableOps for insert remove then more

var target = document.querySelector('.container');

console.log(target.innerHTML);//Gives HTML of target
// Output
//<div class="box">I am a box</div>
//<div class="box">I am a box</div>

console.log(target.innerText);
//Output
// I am a box
// I am a box

console.log(target.outerHTML);//Gives HTML of target including element itself
//Output
/* <div class="container">
    <div class="box">I am a box</div>
    <div class="box">I am a box</div>
    </div> */

console.log(target.tagName);
//Output
// DIV

console.log(target.nodeName);
//tagname for elements nodename identifies everything

console.log(target.textContent);
// gives all the text content inside the Element

// Hiding elements 
console.log(target.hidden);//checks
target.hidden = true; //hides whole targeted element
console.log(target.hidden);
target.hidden = false; //revert back targeted element

//alternative
target.style.display = "none";   // hide
target.style.display = "block";  // show (or "inline"/"flex" depending on your layout)

target.innerHTML = 'This is new html';//Changes HTML\

// console.log(target.hasAttribute('style')); //returns boolean
// console.log(target.setAttribute());
// console.log(target.getAttribute());
// console.log(target.removeAttribute());
// console.log(target.Attributes());

document.designMode = 'on';
console.log(target);
target.setAttribute('data-nameOfData', 'this is data log'); //Created an attribute

console.log(target.dataset);//Returns 'data-' logs of target

// Element Creation 
let NewDiv = document.createElement('div'); //Creation
target.append(NewDiv); //Insertion in target
/*
===================Insertion Methods=================
.append();      --|  Inside placement nodes
.prepend();     --|

.before();      --|  Outside placement nodes
.after();       --|

.replacewith(); --| Replacement node
*/

NewDiv.innerHTML = "<h1> this adds html writtewn in innerHTML as it is</h1>";
NewDiv.setAttribute('class', 'sample-attribute-addition');
target.insertAdjacentHTML('beforebegin', '<h3>Adjecent HTML</h3>');//.insertAdjacentElement('placement position', 'HTML/Text/Element');



const h1 = document.createElement('h2');//Element creation
h1.textContent = 'Adjacent Element'; //Content addition
target.insertAdjacentElement('afterend', h1);//Insertion
document.querySelector('h3').setAttribute('style', 'background-color: blue; margin: 0;')

/*
=====================Placement Position===================
beforebegin //outside
afterbegin  //inside
beforeend   //inside
afterend    //outside
*/
target.classList.add('new-class');
target.classList.remove('container');
target.classList.toggle('container');
console.log(target.className)

