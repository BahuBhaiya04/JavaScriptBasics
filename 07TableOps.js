//Items Price orignal stled color is green and blue respectively


console.log(document.body.childNodes);

// Targetting Table 
const table = document.body.childNodes[1].children[1];
console.log(table);                                            //SelfChecks

console.log(table.rows);                                       //Gives HTMLcollection of all Rows in table

// Accessing table rows and cells
console.log(table.tHead.rows[0].cells[0]);                     //tHead [Item]
console.log(table.tBodies[0].rows[1].cells[1]);                //tBody [$0.5]
// tBodies[index] because there can be multiple bodies given to a table 


// Accessing row cells 
console.log(table.rows[0].rowIndex);                           //output index-0
console.log(table.rows[0].cells[0].cellIndex);                 //output index-0


// Styling Singular cell 
// use .row[idx].cell[idx].style
table.tBodies[0].rows[1].cells[0].style.backgroundColor = 'rgb(255, 253, 152)';    //Targeting banana cell

//Targeting Whole row
// use .row[idx].style
table.tBodies[0].rows[0].style.backgroundColor = 'rgba(255, 141, 236, 1)';         //targeted apple row


// New row addition via JS
const newRow = table.tBodies[0].insertRow();  //<tr>

const newCell1 = newRow.insertCell();         //<td>
newCell1.textContent = 'Mangoos';

const newCell2 = newRow.insertCell();         //<td>
newCell2.textContent = '$890';


console.log(`Table length is ${table.rows.length}`)

table.tBodies[0].rows[1].deleteCell(1);      //deleteCell(Index if cell to be deleted)

table.deleteTHead();                         //parentnode.deletetag();         <th> delete


// Creating a <thead> via JS
const newHead = table.createTHead();         //<thead>

const headRow = newHead.insertRow();         //<tr> insert in <thead>

// Two ways 
// 1
const Hcell1 = headRow.insertCell();         //<th> insert in <tr>
// .insertCell() always creates a <td>
Hcell1.outerHTML = '<th>TextContent1</th>';
// 2
const HCell2 = document.createElement('th'); //th
HCell2.textContent = 'New Header 2';
headRow.appendChild(HCell2);                 //parentNode.appendChild(childNode)


// Creating a <tfoot> via JS 
const newTfoot = table.createTFoot();        //<tfoot>
const footrow = newTfoot.insertRow();        //<tr>

const Fcell1 = footrow.insertCell();         //<td>
const Fcell2 = footrow.insertCell();         //<td>

Fcell1.textContent = "FooterNew1";           //Content For <td>
Fcell2.textContent = "FooterNew2";


// Creating a <caption> via JS
const newCaption = table.createCaption();
newCaption.textContent = 'Updated caption';


//<ul> <ol> JS manupulations
const newul = document.body.childNodes[1].children[3];
const newli1 = document.createElement('li');
newli1.textContent = 'NewJsINstalled worrd';
newul.appendChild(newli1);

const newol = document.body.childNodes[1].children[5];
const newli2 = document.createElement('li');
newli2.textContent = 'new installed word via js';
newol.appendChild(newli2);

//<dl> manupulations
const newdl = document.body.childNodes[1].children[7];
console.log(newdl);

const newdt = document.createElement('dt');
const newdd = document.createElement('dd');

newdt.textContent = 'New dt content';
newdd.textContent = 'new dl content';

newdl.appendChild(newdt);        //Order of  Command input matters its BasicallyHtml just much harder
newdl.appendChild(newdd);


//Access dt and dd
console.log(newdl.querySelectorAll('dt'));
console.log(newdl.querySelectorAll('dd'));

