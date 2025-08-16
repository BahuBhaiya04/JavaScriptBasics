//previoussibling firstelementchild good for small projects 
// in big projects these are useful

//Target Element by Class

const target2 = document.getElementsByClassName('box');        //Gives all classes as a HTML Collection
console.log(target2);                                          //Confirm check

target2[2].style.backgroundColor = 'salmon';                   //indexing to target

//Target by Element Id

const target = document.getElementById('specific-target');     //single target specific element
console.log(target);                                           //confirm check

target.style.backgroundColor = 'turquoise';


//target by querySelector
const Query_target = document.querySelector('.box');
console.log(Query_target);                                     //Returns first element that matches class

//To color element
Query_target.style.backgroundColor = 'rgb(255, 244, 95)';

//QueryselectorAll
const QueryAll_target = document.querySelectorAll('.box');
console.log(QueryAll_target);                                  //Returns all classes box as nodelist 

// To color all elements 
// use this
for(let i = 0; i<QueryAll_target.length; i++){
    QueryAll_target[i].style.backgroundColor = 'rgb(93, 255, 133)';
}

// or
QueryAll_target.forEach(e=>{
    e.style.backgroundColor = 'purple';
})

document.body.style.backgroundColor = 'beige';                //Just for eyecomfort nothing else


//Get Element by tagname
console.log(document.getElementsByTagName('div'));            //Returns HTML Collection

console.log(document.getElementsByName(''));


// matches closest contain 

e = document.getElementsByTagName('div');

//elem.matches(css)
console.log(e[5].matches('#specific-target'));               // Returns boolean 

//elem.closest(css)
console.log(e[5].closest('.container'));

//elem1.contains(element2)
console.log(document.body.getElementsByClassName('container')[0].contains(e[5]));

