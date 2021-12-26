let txt = "const man = new stickman();"; /* The text */
let speed = 70; /* The speed/duration of the effect in milliseconds */

const caret = document.getElementById("caret");
const input = document.getElementById("input");
const txtDiv = document.getElementById("txt");

window.onload = () => {
  txtDiv.innerText = txt;
};

let i = 0;
function typeWriter() {
  if (i < txt.length) {
    caret.classList.remove("blink");

    const curTxt = txt.charAt(i);

    document.getElementById("typing").innerHTML += curTxt;
    i++;
    if (curTxt === " ") setTimeout(typeWriter, speed * 1.2);
    else setTimeout(typeWriter, speed);
  } else if (i >= txt.length) {
    caret.classList.add("blink");
  }
}

function reset() {
  i = 0;
  document.getElementById("typing").innerHTML = "";
}

function changeTxt() {
  txt = input.value;
  txtDiv.innerText = txt;
}
