/******************Strings**********************/
var a= 'StrInG'

// Indexing
for(let i=0; i<=5; i++){
    
    let idx = a[i]; //Indexing

    console.log(`This index is ${i} and letter is ${idx}`);
}

let len= a.length
console.log(`length is ${len}`);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

console.log(a.slice(1,4));


console.log(a.replace('nG', 'bc'));

console.log(a.concat(" ",a, " hi"));

console.log(a.endsWith("nG"));
console.log(a.startsWith('ab'));

/********************************Array***********************************/
// array is an object
// Collections of multiple dataTypes is called an Array
let arr = [7, 'str', false];

console.log(arr);
console.log(arr.length);

for(let i=0; i<=2; i++){
    console.log('Iteration answer', arr[i]);
}

//mutate arrAY 
arr[2] = 'mutated value';
console.log(arr);

let arra = arr.join(' and ')
console.log(arra);

// Removal from Array
arr1 = arr.pop()  //Back removal
console.log(arr1);
console.log('after pop', arr);

arr.shift()  //Front removal
console.log('Shift removal', arr);

//Addition to array
arr.push('abc');    //Back push
console.log('push', arr);

arr.unshift('unshift'); //Front push
console.log('after unshift', arr);

arr.concat(arr,arr);
console.log(arr);

// Array reverse 
arr.reverse();
console.log('reversed array', arr);

// array.splice(startIndex, deleteCount, item1, item2, ..., itemN)

arr.splice(1, 1,'str', 'newsplice');
console.log('splice array', arr);

// arr.concat(arr1,arr2,......,arrN);


/************Array Loops*************/

let ar= [1, 2, 3, 4, 5, 6, 7];

for( let index = 0; index<ar.length; index++){
    const element = ar[index];
    console.log(element);
}


// array.forEach((element, index, array) => {
//   // 'array' here is the original array itself
// });

ar.forEach((Num, ind, len)=>{
    console.log(`number ${Num} index ${ind} length is${ len.length}`);
});



// array.forEach(function(element, index, array) {
//   // your code here
// });


const users = [
  { id: 1, name: "Mudit", role: "Programmer" },
  { id: 2, name: "Anita", role: "Designer" },
  { id: 3, name: "Ravi", role: "Manager" }
];

users.forEach((user, index, array) => {
  console.log(`User #${index + 1}:`);
  console.log(`  ID: ${user.id}`);
  console.log(`  Name: ${user.name}`);
  console.log(`  Role: ${user.role}`);

  // Example: Modify user role (mutating original array)
  if(user.role === "Programmer") {
    user.role = "Senior Programmer";
  }

  // Example: Log total number of users at last iteration
  if(index === array.length - 1) {
    console.log(`Total users processed: ${array.length}`);
  }

  console.log("-------------------------");
});

console.log("Modified array:", users);




// Map()
// filter()
// reduce()

