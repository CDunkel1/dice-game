let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}



var myImages1 = new Array();
myImages1.push("img_01.png");
myImages1.push("img_02.png");
myImages1.push("img_03.png");
myImages1.push("img_04.png");
myImages1.push("img_05.png");
myImages1.push("img_06.png");



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
  document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}