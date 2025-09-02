function getData() {
    
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            resolve('resolved simple');
        },3500);
    })
}

console.log('task 1');

console.log('task 2');


let data = getData();

data.then((v)=>{        //This is a promise container which waits for values
    console.log(data,'this is simple data');
    console.log('task after promise in .then');
})

//This creates lots of mess therefore
//Async await to keep things in check

console.log('task 3 after get data and .then');

async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('resolved in ----await');
        },3500);
    })
}

/*
Settle means Promise Resolved or Rejected

Resolve means promise settled Successfully
Reject means promise Failed settling
*/

async function main(){
    console.log('****************Async await****************');
    console.log('task 1 ----await');
    console.log('task 2 ----await ');

    let data2 = await getData2();
    console.log(data2, '`   this is data of ----await');        //This is resolved value thats why pure data no waiting conditions
    
    console.log('task after promise -----await');
    console.log('task 3 after get data ----await');
    console.log('---------------------end of main--------------------------');
    main2(); //Called here for clarity of console
}

main();


async function getFetchData() {
    //Simulation for data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    console.log(data, 'data of fetch');
}
async function main2() {
    let data = await getFetchData();
}


//post Request

