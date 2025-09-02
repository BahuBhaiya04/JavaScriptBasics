import { rand_color } from "./11bEventsEtc.js";

console.log(document.body.childNodes);
console.log(document.querySelector('.container'));

let target = document.getElementsByClassName('btn')[0];
console.log(target);


//Event listner
// There can be multiple events other than just click click dblclick
target.addEventListener('dblclick',()=>{
    document.querySelector('.container').innerHTML = '<h1>Header on click</h1>';
})

target.addEventListener('contextmenu', ()=>{
    alert('rightclick');
})

// Bubbling
document.querySelector('.child2').addEventListener('click',  (e)=>{
    e.stopPropagation();
    alert('child2');
})

document.querySelector('.child').addEventListener('click',  (e)=>{
    alert('child');
})

document.querySelector('.cont2').addEventListener('click',  (e)=>{
    alert('cont2');
})

// these three are togather if smallest element is clicked all above 
// else will be executed tooo 

// for stopping bubbling e.stopPropogation()

// target.addEventListener(event, handler);
// target.removeEventListener(event, handler)


document.addEventListener('keydown', (e) =>{
    console.log(e, e.key, e.keyCode);
})

let a = setInterval(() => {
        rand_color(document.querySelector('.child'))
        }, 3000);

console.log(a);

//clearInterval(interval) removes the setinterval function


//setTimeout
let b = setTimeout(() => {

        rand_color(document.querySelector('.child'))
       ; console.log('set timeout active');
    }  , 3500);

console.log(b);