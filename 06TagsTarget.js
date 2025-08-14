// To obtain all nodes of a body

var body_nodes = document.body.childNodes //ReturnsArray

// To target a specific Node
function node_target(index) {

    //Extracts Nodes from document/body
    return document.body.childNodes[index];
}

console.log(node_target(1));


//Accesses
// Can use "Node_target(index)" as an anchor for JS DOM Manupulation
const anchor = node_target(1);

console.log(anchor.lastElementChild);
console.log(anchor.lastChild);
console.log(anchor.firstElementChild);
console.log(anchor.firstChild);

console.log(anchor.parentElement);

// Further
// sole command will execute on DOM
anchor.lastElementChild.style.backgroundColor = 'Green'; 
anchor.firstElementChild.style.backgroundColor = 'Turquoise';

console.log('=====================>    NewLogs    <=====================');

console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.childNodes);//Returns nodes
console.log(document.body.firstElementChild.children);//Returns Useful Tags

//As These generate an array indexing can be done

// document.body.firstElementChild.children[index]
console.log(document.body.firstElementChild.children[2]);
console.log(document.body.firstElementChild.children[2].previousElementSibling);
console.log(document.body.firstElementChild.children[2].previousSibling);
