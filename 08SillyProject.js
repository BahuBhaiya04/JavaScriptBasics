// Div Box is targeted
target = document.body.childNodes[1].children;//HTML collection
target_length = target.length;//9

for(let i=0; i<target_length; i++){
    const r = Math.floor(255*Math.random());
    const g = Math.floor(255*Math.random());
    const b = Math.floor(255*Math.random());

    let color = `rgb(${r},${g},${b})`;
    console.log(color);

    target[i].style.backgroundColor = color;
}

