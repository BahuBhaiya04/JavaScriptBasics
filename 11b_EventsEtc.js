//Export for 11EventsEtc.js
export function rand_color(target_exp) {

    const r = Math.floor(255*Math.random());
    const g = Math.floor(255*Math.random());
    const b = Math.floor(255*Math.random());

    let color = `rgb(${r},${g},${b})`;

    var otpt = target_exp.style.backgroundColor = color;
    return otpt;
}