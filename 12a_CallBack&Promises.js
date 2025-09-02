//acyncronous syncronus programming

console.log('1st Code');
console.log('2nd Code');

setTimeout(()=>{
    console.log('Timeout Code1');
},0);

setTimeout(()=>{
    console.log('Timeout Code2');   //Timeout codes are left for last to run even if 0ms run time
},0);                               //this is known as syncronous programming

console.log('3rd Code After Timeout');



//Callback
const Callback = (arg) =>{
    console.log(arg);
}

const loadScript = (src, Callback) => {
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload = Callback('Callback at 26')
    document.head.append(sc);
}

loadScript('https://www.youtube.com/',Callback);

// function loadScript (src, Callback){
// let script = document.createElement('script');
// script.src = src;
// script.onload = ()=> Callback(script);
// document.head.append('script');
// }


/*     Pyramid of Doom

loadScript((...){
    loadScript((...){
        loadScript((...){
            loadScript((...){
                .....
            })
        })
    })
})
callback hell is a problem
This results in emergence of promises
*/

console.log('*******************Promise Function New Outputs*******************');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject(`random number less than .5 ${a}`);
    }

    else{
        setTimeout(()=>{
            console.log('Promise code');
            resolve(`resolve value ${a}`);
        }, 1000);
    }
})
//.then
prom1.then((a)=>{  //if resolved 
    console.log(a);
})

//Catching error 

.catch((err)=>{
    console.log('catched error', err); 
})

//.finally

/*
******************Promise API*****************
promise.all([promis1, promis2,...])
.allSettled()
.race()
.any()
.resolve()
.reject()

 */