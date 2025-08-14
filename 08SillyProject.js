// Div Boxes are Target
// childNodes[1] Targets container
target = document.body.childNodes[1].children;     //.children creates array ==>HTML collection<==
target_length = target.length;                     //==> 9 <==

for(let i=0; i<target_length; i++){
    const r = Math.floor(255*Math.random());
    const g = Math.floor(255*Math.random());
    const b = Math.floor(255*Math.random());

    let color = `rgb(${r},${g},${b})`;            // Color string Generation as sample ==> rgb(145,253,21) <==
    console.log(color);                           // Can be commented for checking Values nature 

    target[i].style.backgroundColor = color;
}


