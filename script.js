let ul = document.getElementById("ul");
let amount = random(5, 50);
for (let i = 0; i < amount; i++) {
    let li = document.createElement("li");
    li.innerHTML = generate();
    ul.appendChild(li);
}
function generate() {
    let length = random(5, 50);
    let result = "";
    for (let i = 0; i < length; i++) {
        result += String.fromCharCode(random(97, 122));
    }
    return result;
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}